import '../styles/globals.css'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Web3Modal from "web3modal"
import { ethers } from 'ethers'


const marketOwnerAddr = process.env.marketOwnerAddr;

function Marketplace({ Component, pageProps }) {
  const [connectedAddr, setConnectAddr] = useState('');
  const [currChainID, setCurrChainID] = useState('')
  useEffect(async () => {
    const web3Modal = new Web3Modal();
    const connect = await web3Modal.connect();
    connect.on('accountsChanged',function (accounts) {
      connection(accounts[0], connect);
    });
    connect.on('chainChanged',function (accounts) {
      connection(accounts[0], connect);
    });
    connection(connect.selectedAddress, connect);
  }, []);

  async function connection(selAddr, conn) {
    const provider = new ethers.providers.Web3Provider(conn)
    const chainID = (await provider._networkPromise).chainId.toString();
    setCurrChainID(chainID)
    if (selAddr?.toUpperCase() === marketOwnerAddr?.toUpperCase()) {
      setConnectAddr(selAddr);
    } else {
      setConnectAddr("");
    }
  }
  let dashboard = ``;
  if (connectedAddr?.length > 0) {
    dashboard = (<Link href="/NFT-Marketplace/owner-dashboard">
      <a className="mr-6 text-pink-500">
        Owner Dashboard
      </a>
    </Link>);
  }

  let comp = <div className="lds-ellipsis animation-white"><div></div><div></div><div></div><div></div></div>
  if (currChainID === '4') {
    comp = <Component {...pageProps} />
  } else {
    comp = (<div style={{textAlign: "center", backgroundColor: "black", paddingTop: "12px", minHeight: "90vh"}}>
    <h1 className="text-white" style={{fontSize: "33px", width: "100%"}}>Please connect your Web3 wallet to the Rinkeby Test Network</h1>
    <div className="lds-ellipsis animation-white"><div></div><div></div><div></div><div></div></div></div>)
  }

  return (
    <div>
      <head>
        <title>En Eff Tee Marketplace</title>
      </head>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">EN EFF TEE Marketplace</p>
        <div className="flex mt-4">
          <Link href="/NFT-Marketplace/">
            <a className="mr-4 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/NFT-Marketplace/create-item">
            <a className="mr-6 text-pink-500">
              Create NFT
            </a>
          </Link>
          <Link href="/NFT-Marketplace/my-assets">
            <a className="mr-6 text-pink-500">
              My Assets
            </a>
          </Link>
          <Link href="/NFT-Marketplace/creator-dashboard">
            <a className="mr-6 text-pink-500">
              Creator Dashboard
            </a>
          </Link>
          {dashboard}
        </div>
      </nav>
      {comp}
    </div>
  )
}

export default Marketplace