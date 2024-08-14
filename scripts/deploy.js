const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Soultest = await hre.ethers.getContractFactory("Soultest");
  const soultest = await Soultest.deploy(deployer.address);

  console.log("Soultest address:", await soultest.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });