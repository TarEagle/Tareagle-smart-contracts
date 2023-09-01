import { ethers } from "hardhat";

async function main() {
    const TarFactory = await ethers.getContractFactory("Tar");
    const tar = await TarFactory.deploy();
    await tar.deployed();

    console.log("Tar deployed to:", tar.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
