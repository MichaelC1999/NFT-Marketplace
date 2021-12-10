require("@nomiclabs/hardhat-waffle");
const projectID = process.env.hardhatProjectID;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
      },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${projectID}`,
      accounts: [process.env.rinkebyAcct]
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectID}`,
      accounts: []
    }
  },
  solidity: "0.8.4",
};