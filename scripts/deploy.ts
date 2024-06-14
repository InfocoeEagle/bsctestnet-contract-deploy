import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );
  // const TestBscToken = await ethers.deployContract("TestBscToken"); //defining our contract

  // console.log('Contract deploying by:', TestBscToken.deploymentTransaction().from);
  // console.log('Contract deploying with tx hash:', TestBscToken.deploymentTransaction().hash);
  
  const TestBscToken = await ethers.getContractFactory("TestBscToken");
  const Token = await TestBscToken.deploy("bsctest", "OCBSCT", 18);
  await Token.waitForDeployment(); // deploying our contract on network
  console.log('Contract deployed 🎉')
  console.log('Contract address: ', Token.target) // writing contract address to the console
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
