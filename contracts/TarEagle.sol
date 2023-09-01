
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./Tar.sol";
import "./Eagle.sol";

contract tarEagle {
    IERC20 public usdt;
    Tar public tar;
    Eagle public eagle;

    constructor(address _usdt, address _tar, address _eagle) {
        usdt = IERC20(_usdt);
        tar = Tar(_tar);
        eagle = Eagle(_eagle);
    }

    function buyTAR(uint256 amount) public {
        // Transfer USDT from buyer to this contract
        require(usdt.transferFrom(msg.sender, address(this), amount), "USDT transfer failed");
        
        // Transfer TAR to buyer
        require(tar.transfer(msg.sender, amount), "TAR transfer failed");
        
        // Mint and transfer 1% of TAR amount in EAGLE to the buyer
        uint256 eagleAmount = amount / 100;
        eagle.mint(msg.sender, eagleAmount);
    }

    function mintTAR(uint256 amount) public {
        tar.mint(msg.sender, amount);
    }

    function mintEagle(uint256 amount) public {
        eagle.mint(msg.sender, amount);
    }
}