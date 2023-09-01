const hre = require("hardhat");

async function main() {
    const eagleAddress = "0xB68Fa72f14BFed69ec4eBcf57F8B488Ec18276f1"; // Coloca aquí la dirección del contrato Eagle
    const tarEagleAddress = "0x9Ad2a196f822Dd938DC772cb6D66120173C7A67e"; // Coloca aquí la dirección del contrato tarEagle

    const Eagle = await hre.ethers.getContractAt("Eagle", eagleAddress);
    
    // Establece tarEagle como minter
    const tx = await Eagle.setMinter(tarEagleAddress, true);
    await tx.wait();
    console.log(`tarEagle set as minter for Eagle: ${tx.hash}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
export {}