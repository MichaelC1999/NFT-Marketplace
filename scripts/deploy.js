const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  const NFTMarketDeployed = await NFTMarket.deploy();
  await NFTMarketDeployed.deployed();
  console.log("NFTMarketDeployed deployed to:", NFTMarketDeployed.address);

  const NFTToken = await hre.ethers.getContractFactory("NFT");
  const NFTTokenDeployed = await NFTToken.deploy(NFTMarketDeployed.address);
  await NFTTokenDeployed.deployed();
  console.log("NFTTokenDeployed deployed to:", NFTTokenDeployed.address);

  let config = `
  export const NFTmarketaddress = "${NFTMarketDeployed.address}"
  export const NFTaddress = "${NFTTokenDeployed.address}"
  export const marketOwnerAddr = "${NFTMarketDeployed.deployTransaction.from}"
  `

  let data = JSON.stringify(config)
  fs.writeFileSync('config.js', JSON.parse(data))

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
