import { ethers } from "hardhat";

export async function awardXP(user: string, amount: number) {
  const xpTrackerAddress = "0xYourDeployedContractAddress"; // Deploy sonrası burayı güncelle
  const XPTracker = await ethers.getContractAt("XPTracker", xpTrackerAddress);
  const tx = await XPTracker.awardXP(user, amount);
  await tx.wait();
  console.log(`Awarded ${amount} XP to ${user}`);
}
