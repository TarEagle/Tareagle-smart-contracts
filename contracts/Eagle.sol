// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Eagle is ERC20, Ownable {
    mapping(address => bool) public minters;

    constructor() ERC20("Eagle Token", "EAGLE") {}

    function setMinter(address _minter, bool _canMint) external onlyOwner {
        minters[_minter] = _canMint;
    }

    function mint(address account, uint256 amount) external {
        require(minters[msg.sender], "Not authorized to mint");
        _mint(account, amount);
    }
}
