import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import { useRouter } from 'next/router'

const NFTaddress = process.env.NFTaddress
const NFTmarketaddress = process.env.NFTmarketaddress

import NFT from '../abi/NFT.json'
import Market from '../abi/Market.json'


export default function Home() {
  const [NFTs, setNFTs] = useState([]);
  const [loadingState, setLoadingState] = useState('not-loaded');
  const [purchaseTx, setPurchaseTx] = useState();
  const [purchaseImg, setPurchaseImg] = useState();
  useEffect(() => {
    loadNFTs();
  }, [])

  const router = useRouter();

  function resetForm() {
    router.reload(window.location.pathname);
  }
  async function loadNFTs() {    
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const tokenContract = new ethers.Contract(NFTaddress, NFT.abi, provider);
    const marketContract = new ethers.Contract(NFTmarketaddress, Market.abi, provider);
    const data = await marketContract.fetchMarketItems();
    const items = await Promise.all(data.map(async i => {
      if (i.visible) {
        const tokenUri = await tokenContract.tokenURI(i.tokenID);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
        let item = {
          price,
          itemID: i.itemID.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        }
        return item
      } else {
        return {};
      }
    }))
    const validItems = [];
    items.forEach(i => {
      if (Object.keys(i).length > 0){
        validItems.push(i);
      }
    })
    setNFTs(validItems);
    setLoadingState('loaded');
  }

  async function buyNFT(NFT) {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    setPurchaseTx('processing');
    const contract = new ethers.Contract(NFTmarketaddress, Market.abi, signer);
    const price = ethers.utils.parseUnits(NFT.price.toString(), 'ether');
    const transaction = await contract.createMarketSale(NFTaddress, NFT.itemID, {
      value: price
    });
    const tx = await transaction.wait();
    //Transaction hash is tx.transactionHash
    setPurchaseTx(tx.transactionHash);
    setPurchaseImg(NFT.image);
  }
  if (loadingState === 'loaded' && !NFTs.length) return (<h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>)
  if (purchaseTx) {
    return (
      <div style={{textAlign: "center", backgroundColor: "black", paddingTop: "12px", minHeight: "90vh"}}>
      <h1 className="text-white" style={{fontSize: "33px", width: "100%"}}>This transaction will use the RINKEBY TEST NETWORK on Ethereum</h1>
      <h2 className="text-white" style={{fontSize: "25px", width: "100%"}}>{purchaseTx === 'processing' ? "The Ethereum network will transfer your NFT to your address: " : "Token has been transferred! Transaction hash: "}</h2>
      {purchaseTx === 'processing' ? <h2 className="text-white" style={{fontSize: "15px", width: "100%"}}>{window.ethereum.selectedAddress}</h2> : <h2 className="text-white" style={{fontSize: "15px", width: "100%"}}><a href={"https://rinkeby.etherscan.io/tx/" + purchaseTx}><u>{purchaseTx}</u></a></h2>}
      {purchaseTx === 'processing' ? null : <h2 className="bg-pink-500 text-white rounded" style={{fontSize: "23px", padding: "6px", margin: "15px 33%", cursor: "pointer"}} onClick={() => resetForm()}>Buy another NFT</h2>}
      <div className="flex justify-center">
        <div className="w-1/2 flex flex-col pb-12 nftMinting">
          {purchaseImg ? <img style={{border: "3px #EC4899 solid"}} src={purchaseImg}/> : <div className="lds-ellipsis animation-white"><div></div><div></div><div></div><div></div></div>}
        </div>
      </div>
    </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="px-4" style={{ maxWidth: '1600px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
            NFTs.map((NFT, i) => (
              <div key={i} className="border shadow rounded-xl overflow-hidden">
                <img src={NFT.image} />
                <div className="p-4">
                  <p style={{ height: '64px' }} className="text-2xl font-semibold">{NFT.name}</p>
                  <div style={{ height: '70px', overflow: 'hidden' }}>
                    <p className="text-gray-400">{NFT.description}</p>
                  </div>
                </div>
                <div className="p-4 bg-black">
                  <p className="text-2xl mb-4 font-bold text-white">{NFT.price} ETH</p>
                  <button className="w-full bg-pink-500 text-white font-bold py-2 px-12 rounded" onClick={() => buyNFT(NFT)}>Buy</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}