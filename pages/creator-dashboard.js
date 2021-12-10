import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import axios from 'axios'
import Web3Modal from "web3modal"

const NFTaddress = process.env.NFTaddress
const NFTmarketaddress = process.env.NFTmarketaddress

import Market from '../abi/Market.json'
import NFT from '../abi/NFT.json'

export default function CreatorDashboard() {
  const [NFTs, setNFTs] = useState([]);
  const [hoverMsg, setHoverMsg] = useState("");
  const [hoverID, setHoverID] = useState(0);

  const [providerWin, setProviderWin] = useState();
  const [loadingState, setLoadingState] = useState('not-loaded');
  useEffect(() => {
    loadNFTs();
    setProviderWin(window.ethereum);
  }, [])

  async function loadNFTs() {
    const web3Modal = new Web3Modal({
      network: "rinkeby",
      cacheProvider: true,
    });
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const marketContract = new ethers.Contract(NFTmarketaddress, Market.abi, signer);
    const tokenContract = new ethers.Contract(NFTaddress, NFT.abi, provider);
    const data = await marketContract.fetchMyCreatedNFTs();
    
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenID);
      const meta = await axios.get(tokenUri);
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
      let item = {
        price,
        itemID: i.itemID.toNumber(),
        tokenID: i.tokenID.toNumber(),
        seller: i.seller,
        owner: i.owner,
        sold: i.sold,
        visible: i.visible,
        image: meta.data.image,
      }
      return item;
    }));
    setNFTs(items);
    setLoadingState('loaded');
  }

  async function changeVisibility(NFT) {
    if (NFT.sold) {
      return;
    }
    const prov = new ethers.providers.Web3Provider(providerWin);
    const signer = prov.getSigner();
    const marketContract = new ethers.Contract(NFTmarketaddress, Market.abi, signer);
    const tx = await marketContract.changeVisible(NFT.itemID);
    await tx.wait();
    loadNFTs();
  }

  function setIsShown(bool, NFT) {
    if (bool && !NFT.sold) {
      setHoverID(NFT.itemID);
      if (NFT.visible) {
        setHoverMsg("Hide NFT from market");
      } else {
        setHoverMsg("Show NFT on market");
      }
    } else {
      setHoverMsg("");
      setHoverID(0);
    }
  }

  if (loadingState === 'loaded' && !NFTs.length) return (<h1 className="py-10 px-20 text-3xl">No assets created</h1>);
  return (
    <div>
      <div className="p-4">
        <Link href="/create-item"><h2 className="rounded bg-pink-500 text-white" style={{textAlign: "center", fontSize: "28px", width: "35%"}}>Mint a new NFT</h2></Link>
        <h2 style={{marginTop: "30px", borderTop: "3px black solid", width: "65%"}} className="text-2xl py-2">Items Created</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 rounded" style={{backgroundColor: "black", border: "17px black solid"}}>
          {
            NFTs.map((NFT, i) => (
              <div style={NFT.sold ? {border: "2px red solid"}: {border: "2px white solid"}} key={i} className="border shadow rounded-xl overflow-hidden">
                {NFT.sold ? <h3 style={{textAlign: "center", backgroundColor: "red", color: "white", fontSize: "30px"}}>SOLD</h3>: null}
                {!NFT.sold && !NFT.visible ? <h3 style={{textAlign: "center", backgroundColor: "green", color: "white", fontSize: "30px"}}>HIDDEN</h3>: null}
                <div onClick={() => changeVisibility(NFT)} onMouseEnter={() => setIsShown(true, NFT)} onMouseLeave={() => setIsShown(false, NFT)} style={{position: "relative", cursor: "pointer"}}>
                  <img style={(!NFT.sold && !NFT.visible) || hoverMsg.length > 0 && hoverID === NFT.itemID ? {opacity: 0.3} : {opacity: 1}} src={NFT.image} className="rounded" />
                  {hoverMsg.length > 0 && hoverID === NFT.itemID ? <h2 className="" style={{position: "absolute", top: "48%", left: 0, width: "100%", textAlign: "center", fontSize: "28px", color: "#EC4899"}}><b>{hoverMsg}</b></h2> : null}
                </div>
                <div className="bg-black" style={{padding: "8px"}}>
                  <p className="text-2xl font-bold text-white">Price - {NFT.price} Eth</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}