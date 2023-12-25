// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract ERC20 {
   uint256 public totalSupply;
   string public  name;
   string public symbol;

   mapping (address => uint) public balanceOf;
   
   constructor(string memory _name, string memory _symbol ) {
        name = _name;
        symbol = _symbol;
    }

   function decimals() public pure returns (uint) {
    return 18;
    
   }
}