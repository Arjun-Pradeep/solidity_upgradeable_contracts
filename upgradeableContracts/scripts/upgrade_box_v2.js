const { toUtf8CodePoints } = require("ethers/lib/utils");
const { ethers, upgrades } = require("hardhat");

const PROXY = "0xf36132C58304374042320dEDD36eb7aa8534226E";

async function main() {

    const BoxV2 = await ethers.getContractFactory("BoxV2");

    await upgrades.upgradeProxy(PROXY, BoxV2);

    console.log("Box Upgraded");

}

main();