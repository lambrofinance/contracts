const hre = require("hardhat");

async function main() {
  const JustATest = await hre.ethers.getContractFactory("JustATest");
  const justATest = await JustATest.deploy();
  await justATest.deployed();
  console.log("JustATest deployed to:", justATest.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
