const hre = require("hardhat");

async function main() {
    // Direcciones de los contratos
    const tarAddress = "0x4bF960768C5ECf6118fb2FA293989Db72CbB5FDc"; // Reemplaza con la dirección del contrato TAR desplegado
    const tarEagleAddress = "0x9Ad2a196f822Dd938DC772cb6D66120173C7A67e"; // Reemplaza con la dirección del contrato tarEagle desplegado
    
    // Conectarse al contrato TAR
    const TAR = await hre.ethers.getContractAt("Tar", tarAddress);

    // Cantidad de tokens a transferir
    const amountToSend = hre.ethers.utils.parseUnits("500000", 18); // 500,000 con 18 decimales

    // Transferir tokens
    const tx = await TAR.transfer(tarEagleAddress, amountToSend);
    await tx.wait();
    
    console.log(`Transferidos ${amountToSend.toString()} tokens TAR a ${tarEagleAddress}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
