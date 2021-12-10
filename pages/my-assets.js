import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"

const NFTaddress = process.env.NFTaddress
const NFTmarketaddress = process.env.NFTmarketaddress

import Market from '../abi/Market.json'
import NFT from '../abi/NFT.json'

export default function MyAssets() {
  const [NFTs, setNFTs] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNFTs()
  }, [])
  async function loadNFTs() {
    const web3Modal = new Web3Modal({
      network: "rinkeby",
      cacheProvider: true
    })
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
      
    const marketContract = new ethers.Contract(NFTmarketaddress, Market.abi, signer)
    const tokenContract = new ethers.Contract(NFTaddress, NFT.abi, provider)
    const data = await marketContract.fetchMyOwnedNFTs()
    
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenID)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenID: i.tokenID.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
      }
      return item
    }))
    setNFTs(items)
    setLoadingState('loaded') 
  }
  if (loadingState === 'loaded' && !NFTs.length) return (<h1 className="py-10 px-20 text-3xl">No assets owned</h1>)
  return (
    <div className="flex justify-center">
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
            NFTs.map((NFT, i) => (
              <div key={i} className="border shadow rounded-xl overflow-hidden">
                <img src={NFT.image} className="rounded" />
                <div className="p-4 bg-black">
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