require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@openzeppelin/hardhat-upgrades");
require('dotenv').config();

module.exports = {
  solidity: "0.8.10",
  networks: {
    ropsten: {
      url: process.env.PROVIDER_URL,
      accounts:[`0x${process.env.PRI_KEY}`]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
