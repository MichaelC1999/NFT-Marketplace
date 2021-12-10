import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'


import axios from 'axios'
import Web3Modal from "web3modal"

const NFTmarketaddress = process.env.NFTmarketaddress
const marketOwnerAddr = process.env.marketOwnerAddr

import Market from '../abi/Market.json'
import NFT from '../abi/NFT.json'

export default function CreatorDashboard() {
  const [contractBalance, setContractBalance] = useState();
  const [marketData, setMarketData] = useState({transactionVolume: "", itemsCreated: 0, itemsSold: 0});
  useEffect(async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    verifyAccount(connection.selectedAddress);
    getContractBalance();
    pullMarketData();
    connection.on('accountsChanged', function (accounts) {
      verifyAccount(accounts[0]);
    })
  }, [])

  function verifyAccount(selectedAddress) {
    console.log(selectedAddress?.toUpperCase() !== marketOwnerAddr?.toUpperCase(), selectedAddress)
    if (selectedAddress?.toUpperCase() !== marketOwnerAddr?.toUpperCase()) {
      Router.push('/NFT-Marketplace/');
    }
  }

  async function withdrawToOwnerAddr() {
    const web3Modal = new Web3Modal({
      network: "rinkeby",
      cacheProvider: true,
    });
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const marketContract = new ethers.Contract(NFTmarketaddress, Market.abi,signer);
    const withdrawal = await marketContract.withdrawMarketEarnings();
    const tx = await withdrawal.wait();
    getContractBalance();
  }

  async function pullMarketData() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(NFTmarketaddress, Market.abi, signer);
    const itemsCreated = (await contract.itemsCreatedCount()).toNumber();
    const itemsSold = (await contract.itemsSoldCount()).toNumber();
    const transactionVolume = ethers.utils.formatEther((await contract.transactionVolumeCount()).toString());
    setMarketData({itemsCreated, itemsSold, transactionVolume});
  }

  async function getContractBalance() {
    const web3Modal = new Web3Modal({
      network: "rinkeby",
      cacheProvider: true,
    })
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const marketContract = new ethers.Contract(NFTmarketaddress, Market.abi,signer);
    let res = await marketContract.getContractBalance();
    res = (ethers.utils.formatUnits(res.toString(), 'ether'));
    setContractBalance(res);
  }
  return (
    <div>
      <div className="p-4">
        <div style={{marginBottom: "20px"}}>
          <h2 className="marketDataElement">Current Contract Balance: {contractBalance} ETH</h2>
          <h2 className="marketDataElement">Market Address: {NFTmarketaddress}</h2>
          <h2 className="marketDataElement">Total items created: {marketData.itemsCreated}</h2>
          <h2 className="marketDataElement">Total items sold: {marketData.itemsSold}</h2>
          <h2 className="marketDataElement">Total transaction volume: {marketData.transactionVolume} ETH</h2>
        </div>
        <span className="rounded bg-pink-500 text-white" style={{cursor: "pointer", fontSize: "26px", padding: "6px", width: "50%"}} onClick={() => withdrawToOwnerAddr()}>Withdraw funds to owner address</span>
      </div>
    </div>
  );
}