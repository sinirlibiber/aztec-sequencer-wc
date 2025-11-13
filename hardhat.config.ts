import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    aztec_testnet: {
      url: "https://rpc.testnet.aztec.network",
      accounts: [process.env.PRIVATE_KEY!]
    }
  }
};

export default config;
