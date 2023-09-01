const hre = require("hardhat");

async function main() {
    // Asegúrate de reemplazar estas direcciones con las direcciones reales
    // de los contratos desplegados en tu red.
    const USDT_ADDRESS = "0x1BD7B233B054AD4D1FBb767eEa628f28fdE314c6"; // reemplazar con la dirección del contrato USDT
    const TAR_ADDRESS = "0x4bF960768C5ECf6118fb2FA293989Db72CbB5FDc";   // reemplazar con la dirección del contrato TAR
    const EAGLE_ADDRESS = "0xB68Fa72f14BFed69ec4eBcf57F8B488Ec18276f1"; // reemplazar con la dirección del contrato EAGLE

    const TarEagleFactory = await hre.ethers.getContractFactory("tarEagle");
    const tareagle = await TarEagleFactory.deploy(USDT_ADDRESS, TAR_ADDRESS, EAGLE_ADDRESS);
    await tareagle.deployed();

    console.log("tarEagle deployed to:", tareagle.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
export {}

