// SPDX-License-Identifier: MIT LICENSE
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract B2USD is Ownable, ERC20, AccessControl, ERC20Burnable {
    using SafeERC20 for ERC20;

    mapping(address => uint256) private _balances;
    uint256 private _totalSupply;

    bytes32 private constant MANAGER_ROLE = keccak256("MANAGER_ROLE");

    constructor() ERC20("B2USD Birr", "B2USD") Ownable(msg.sender) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MANAGER_ROLE, msg.sender);
    }

    function mintToken(uint256 amount) external {
        require(
            hasRole(MANAGER_ROLE, msg.sender),
            " Only the manager can do this"
        );
        _totalSupply = _totalSupply + amount;
        _balances[msg.sender] = _balances[msg.sender] + amount;
        _mint(msg.sender, amount);
    }

    function burnToken(uint256 amount) public {
        require(
            hasRole(MANAGER_ROLE, msg.sender),
            " Only the manager can do this"
        );
        _totalSupply = _totalSupply - amount;
        _balances[msg.sender] = _balances[msg.sender] - amount;
        _burn(msg.sender, amount);
    }
}
