require("@nomiclabs/hardhat-waffle");
const { projectId, privateKey } = require('./secrets.json');

module.exports = {
  networks: {
    mumbai: {
      //url: `https://rpc-mumbai.matic.today`,
      url : "https://rpc-mumbai.maticvigil.com/",
      chainId: 80001,
      accounts: [privateKey],
    }
  },
  solidity: "0.8.4",
  plugins: [
    "hardhat-waffle",
  ],
};
