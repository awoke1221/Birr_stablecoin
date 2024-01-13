// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 < 0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";


contract Birr2USDresrves is Ownable, ReentrancyGuard, AccessControl{
    using SafeERC20 for IERC20;

    uint256 public currentReserveId;

    struct ReserveVoult {
        IERC20 collateral;
        uint256 amount;
        
    }

    mapping (uint256 => ReserveVoult) public _rsVoult;

    event ColateralDepeosited (uint256 indexed voultId, uint256 amount);
    event ColateralWithdrow (uint256 indexed voultId, uint256 amount);
    
    bytes32 public constant MANAGER_ROLE = keccak256("MANAGER_ROLE");

    constructor() Ownable(msg.sender){
        _setRoleAdmin(DEFAULT_ADMIN_ROLE, bytes32(uint256(uint160(msg.sender))));
        _setRoleAdmin(MANAGER_ROLE, bytes32(uint256(uint160(msg.sender))));
    }

    function _cheackReserveContract(IERC20 _collateral) internal view{
        for (uint256 i; i < currentReserveId; i++) {
            require(_rsVoult[i].collateral != _collateral, " Collateral alredy Exist");
            
        }
    }

    function addReserveVoult(IERC20 _collateral) external {
        _cheackReserveContract(_collateral);
        require(hasRole(MANAGER_ROLE, msg.sender), "Only the Manager can do this");
        _rsVoult[currentReserveId].collateral = _collateral;
        currentReserveId ++;
    }

    function depositCollateral(uint256 voultId, uint256 amount) public {
        require(hasRole(MANAGER_ROLE, msg.sender), "Only the Manager can do this");
        IERC20 reserves = _rsVoult[voultId].collateral;
        reserves.safeTransferFrom(msg.sender, address(this),amount);
        uint256 currentVoultBalance = _rsVoult[voultId].amount;
        _rsVoult[voultId].amount = currentVoultBalance + amount;

        emit ColateralDepeosited(voultId, amount);
    }

    function withdrowCollaretal(uint256 voultId, uint256 amount) public {
        require(hasRole(MANAGER_ROLE, msg.sender), " only the manager can do this");
        IERC20 reserves = _rsVoult[voultId].collateral;
        uint256 currentReserveBalance = _rsVoult[voultId].amount;

        if(currentReserveBalance >= amount){
            reserves.safeTransfer(msg.sender, amount);
            _rsVoult[voultId].amount = currentReserveBalance - amount;
            emit ColateralWithdrow(voultId, amount);
        }
    }

}

