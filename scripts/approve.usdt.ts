const hre = require("hardhat");

async function main() {
    const tarEagleAddress = "0x9Ad2a196f822Dd938DC772cb6D66120173C7A67e"; // Dirección del contrato TarEagle
    const usdtAddress = "0x1BD7B233B054AD4D1FBb767eEa628f28fdE314c6"; // Dirección del contrato USDC en la red que estás usando
    
    const amountToApprove = hre.ethers.utils.parseUnits("5000", 18); // Aprobando 2000 USDT, ajusta según sea necesario

    const usdt = await hre.ethers.getContractAt("IERC20", usdtAddress);

    const tx = await usdt.approve(tarEagleAddress, amountToApprove);
    await tx.wait();

    console.log("Approved TarEagle to spend USDT");
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
export {}
