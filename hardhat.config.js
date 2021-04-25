require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: {
    version: "0.5.16",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    mainnet: {
      url: "https://bsc-dataseed.binance.org",
      chainId: 56,
      accounts: [`0x${process.env.BSC_MAINNET_PRIVATE_KEY}`],
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      accounts: [`0x${process.env.BSC_TESTNET_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY,
  },
};
