const hre = require("hardhat");

async function main() {
    // Direcciones de los contratos
    const tarEagleAddress = "0x9Ad2a196f822Dd938DC772cb6D66120173C7A67e"; // Dirección del contrato tarEagle

    // Conectarse al contrato tarEagle
    const tarEagle = await hre.ethers.getContractAt("tarEagle", tarEagleAddress);

    // Cantidad de USDT que deseas gastar para comprar TAR
    const amountToSpend = hre.ethers.utils.parseUnits("10", 18); // Esto comprará 100 TAR y te dará 1 EAGLE adicional (1% de 100).

    // Comprar TAR
    const tx = await tarEagle.buyTAR(amountToSpend);
    await tx.wait();

    console.log(`Comprados ${amountToSpend.toString()} tokens TAR con ${amountToSpend.toString()} USDT`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
export {}