import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const XPTracker = await ethers.getContractFactory("XPTracker");
  const xp = await XPTracker.deploy();
  await xp.waitForDeployment();

  const address = await xp.getAddress();
  console.log("XPTracker deployed to:", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
