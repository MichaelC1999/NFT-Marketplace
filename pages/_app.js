import '../styles/globals.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const marketOwnerAddr = process.env.marketOwnerAddr


function Marketplace({ Component, pageProps }) {

  const [connectedAddr, setConnectAddr] = useState('')
  useEffect(() => {
    window.ethereum.on('accountsChanged', function (accounts) {
      connection(accounts[0]);
    })
    connection(window.ethereum.selectedAddress);
  }, []);

  async function connection(selAddr) {
    if (selAddr?.toUpperCase() === marketOwnerAddr?.toUpperCase()) {
      setConnectAddr(selAddr)
    } else {
      setConnectAddr("")
    }
  }
  let dashboard = ``;
  if (connectedAddr && connectedAddr.length > 0) {
    dashboard = (<Link href="/owner-dashboard">
      <a className="mr-6 text-pink-500">
        Owner Dashboard
      </a>
    </Link>);
  }

  return (
    <div>
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
      <Component {...pageProps} />
    </div>
  )
}

export default Marketplace