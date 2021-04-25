const hre = require("hardhat");

async function main() {
  const Lambro = await hre.ethers.getContractFactory("Lambro");
  const lambro = await Lambro.deploy();
  await lambro.deployed();
  console.log("Lambro deployed to:", lambro.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
