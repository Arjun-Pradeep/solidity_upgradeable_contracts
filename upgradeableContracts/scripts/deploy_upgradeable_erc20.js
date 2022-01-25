const { ethers, upgrades } = require("hardhat");

async function main() {

    const Token = await ethers.getContractFactory("MyTokenUpgradeable");

    const token = await Token.deploy();

}

main();