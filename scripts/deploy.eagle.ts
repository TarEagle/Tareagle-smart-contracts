const hre = require("hardhat");

async function main() {
    const EagleFactory = await hre.ethers.getContractFactory("Eagle");
    const eagle = await EagleFactory.deploy();
    await eagle.deployed();

    console.log("Eagle deployed to:", eagle.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
export {} 
