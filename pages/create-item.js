import { useState } from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

const NFTaddress = process.env.NFTaddress
const NFTmarketaddress = process.env.NFTmarketaddress

import NFT from '../abi/NFT.json'
import Market from '../abi/Market.json'

export default function CreateItem() {
  const [fileUrl, setFileUrl] = useState(null)
  const [mintedIMG, setMintedIMG] = useState(false)
  const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
  const [mintTokenTx, setMintTokenTx] = useState("")
  const [addToMarketTx, setAddToMarketTx] = useState("")
  const [transactionInProgress, setTransactionInProgress] = useState(false)

  const router = useRouter()

  function resetForm() {
    // setFileUrl(null)
    // setMintedIMG(false)
    // updateFormInput({ price: '', name: '', description: '' })
    // setMintTokenTx("")
    // setAddToMarketTx("")
    // setTransactionInProgress(false)
    router.reload(window.location.pathname)

  }

  async function onChange(e) {
    const file = e.target.files[0]
    setFileUrl("pending")
    try {
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }
  async function createMarket() {
    const { name, description, price } = formInput
    if (!name || !description || !price || !fileUrl || fileUrl === "pending") return
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name, description, image: fileUrl
    })
    try {
      const added = await client.add(data)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
      createSale(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }

  async function createSale(url) {
    setTransactionInProgress(true);
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    /* next, create the item */
    let contract = new ethers.Contract(NFTaddress, NFT.abi, signer);
    let transaction = await contract.createToken(url);
    let tx = await transaction.wait();
    await setMintTokenTx(transaction.hash);
    let event = tx.events[0];
    let value = event.args[2];
    let tokenID = value.toNumber();
    const price = ethers.utils.parseUnits(formInput.price, 'ether');
  
    /* then list the item for sale on the marketplace */
    contract = new ethers.Contract(NFTmarketaddress, Market.abi, signer);
    let listingPrice = await contract.getListingPrice();
    listingPrice = listingPrice.toString();

    transaction = await contract.createMarketItem(NFTaddress, tokenID, price, { value: listingPrice });
    tx = await transaction.wait();

    await setAddToMarketTx(transaction.hash);
    setMintedIMG(true);
    window.scrollTo(0, 0);
    // setTimeout(() => router.push('/'), 6000)
  }

  if (transactionInProgress || mintedIMG) {
    return (
      <div style={{textAlign: "center", backgroundColor: "black", paddingTop: "12px", minHeight: "90vh"}}>
        <h1 className="text-white" style={{fontSize: "33px", width: "100%"}}>This transaction will use the RINKEBY TEST NETWORK on Ethereum</h1>
        <h2 className="text-white" style={{fontSize: "25px", width: "100%"}}>{mintTokenTx ? "Token has been minted! Transaction hash: ": "The Ethereum network will start minting and processing your NFT."}</h2>
        {mintTokenTx ? <h2 className="text-white" style={{fontSize: "15px", width: "100%"}}><a href={"https://rinkeby.etherscan.io/tx/" + mintTokenTx}><u>{mintTokenTx}</u></a></h2> : null}
        {mintTokenTx ? <h2 className="text-white" style={{fontSize: "25px", width: "100%"}}>{addToMarketTx ? "Token is available for sale on the market! Transaction Hash: ": "The Ethereum network will start making your NFT available for purchase."}</h2> : "DO NOT LEAVE THIS PAGE YET"}
        {addToMarketTx ? <h2 className="text-white" style={{fontSize: "15px", width: "100%"}}><a href={"https://rinkeby.etherscan.io/tx/" + addToMarketTx}><u>{addToMarketTx}</u></a></h2>: null}
        {mintedIMG ? <h2 className="bg-pink-500 text-white rounded" style={{fontSize: "23px", padding: "6px", margin: "15px 33%", cursor: "pointer"}} onClick={() => resetForm()}>Mint another NFT</h2>: null}

        <div className="flex justify-center">
          <div className="w-1/2 flex flex-col pb-12 nftMinting">
            {mintedIMG ? <img style={{border: "3px #EC4899 solid"}} src={fileUrl}/> : <div className="lds-ellipsis animation-white"><div></div><div></div><div></div><div></div></div>}
          </div>
        </div>
      </div>
    )
  } else {
    let imgPrev = null;
    if (fileUrl === 'pending') {
      imgPrev = ( <div className="nftMinting"><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>)
    } else if (fileUrl) {
      imgPrev = (<img className="rounded mt-4" width="350" src={fileUrl} />);
    }
    return (
      <div className="flex justify-center">
        <div className="w-1/2 flex flex-col pb-12">
          <input 
            placeholder="Asset Name"
            className="mt-8 border rounded p-4"
            onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
          />
          <textarea
            placeholder="Asset Description"
            className="mt-2 border rounded p-4"
            onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
          />
          <input
            placeholder="Asset Price in Eth"
            type="number"
            className="mt-2 border rounded p-4"
            onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
          />
          <input
            type="file"
            name="Asset"
            className="my-4"
            onChange={onChange}
          />
          {imgPrev}
          <button onClick={createMarket} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
            Create Digital Asset
          </button>
        </div>
      </div>
    );
  } 
}