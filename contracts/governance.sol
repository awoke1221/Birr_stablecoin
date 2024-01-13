// SPDX-License-Identifier: MIT LICENSE
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./stablecoin.sol";

contract B2usdGovernance is Ownable, AccessControl, ReentrancyGuard {
    using SafeERC20 for IERC20;

    struct SupChange {
        string method;
        uint256 amount;
        uint256 timeStamp;
        uint256 blockNumber;
    }

    struct ReserveList {
        IERC20 collateral;
    }

    mapping(uint256 => ReserveList) public rsvList;

    event RePegAction(uint256 time, uint256 amount);
    event Withdrow(uint256 time, uint256 amount);

    address private reserveContract;
    B2USD private b2usd;
    AggregatorV3Interface private priceOracle;
    address public dataFeed;
    uint256 public supplyChangeCount;
    uint256 public b2usdSupply;
    uint256 public stableCollateralPrice = 1e18;
    uint256 public stableCollateralAmount;
    uint256 private constant COL_PRICE_TO_WEI = 1e10;
    uint256 private constant WEI_Value = 1e18;
    uint256 public unstableCollateralAmount;
    uint256 public unstableCollateralPrice;
    uint256 public reserveCount;

    mapping(uint256 => SupChange) public _suplyChanges;
    bytes32 public constant GOVERN_ROLE = keccak256("GOVERN_ROLE");

    constructor(B2USD _b2usd) Ownable(msg.sender) {
        b2usd = _b2usd;
        _setRoleAdmin(
            DEFAULT_ADMIN_ROLE,
            bytes32(uint256(uint160(msg.sender)))
        );
        _setRoleAdmin(GOVERN_ROLE, bytes32(uint256(uint160(msg.sender))));
    }

    function addCollateralToken(
        IERC20 collateralcontract
    ) external nonReentrant {
        require(hasRole(GOVERN_ROLE, msg.sender), "not allowed for you");
        rsvList[reserveCount].collateral = collateralcontract;
        reserveCount++;
    }

    function setDataFeed(address contractAddress) external nonReentrant {
        require(hasRole(GOVERN_ROLE, msg.sender), " Only GOverner can do it");
        dataFeed = contractAddress;
        priceOracle = AggregatorV3Interface(dataFeed);
    }

    function fetchCollateralPrice() external nonReentrant {
        require(hasRole(GOVERN_ROLE, msg.sender), " Only Governer can do it");
        (, uint256 price, , , ) = priceOracle.latestRoundData();
        unstableCollateralPrice = price * COL_PRICE_TO_WEI;
    }

    function setReserveContract(address reserve) external nonReentrant {
        require(hasRole(GOVERN_ROLE, msg.sender), " Only Governer can do it");
        reserveContract = reserve;
    }

    function collateralReBalancing() internal returns (bool) {
        require(hasRole(GOVERN_ROLE, msg.sender), " Only Governer can do it");
        uint256 stableBalance = rsvList[0].collateral.balanceOf(
            reserveContract
        );
        uint256 unStableBalance = rsvList[1].collateral.balanceOf(
            reserveContract
        );

        if (stableBalance != stableCollateralAmount) {
            stableCollateralAmount = stableBalance;
        }

        if (unStableBalance != unstableCollateralAmount) {
            unstableCollateralAmount = unStableBalance;
        }

        return true;
    }

    function setB2USDsupply(uint256 totallSupply) external {
        require(hasRole(GOVERN_ROLE, msg.sender), " Only Governer can do it");
        b2usdSupply = totallSupply;
    }

    function validatePeg() external nonReentrant {
        require(hasRole(GOVERN_ROLE, msg.sender), " Only Governer can do it");
        b2usdSupply = b2usd.totalSupply();
        bool result = collateralReBalancing();

        if (result == true) {
            uint256 rowCollateral = (stableCollateralAmount * WEI_Value) +
                (unstableCollateralAmount * unstableCollateralPrice);
            uint256 collateralValue = rowCollateral / WEI_Value;

            if (collateralValue < b2usdSupply) {
                uint256 supplyChange = b2usdSupply - collateralValue;
                b2usd.burnToken(supplyChange);
                _suplyChanges[supplyChangeCount].method = "Burn";
                _suplyChanges[supplyChangeCount].amount = supplyChange;
            }

            if (collateralValue > b2usdSupply) {
                uint256 supplyChange = collateralValue - b2usdSupply;
                b2usd.mintToken(supplyChange);
                _suplyChanges[supplyChangeCount].method = "Mint";
                _suplyChanges[supplyChangeCount].amount = supplyChange;
            }

            b2usdSupply = collateralValue;
            _suplyChanges[supplyChangeCount].blockNumber = block.number;
            _suplyChanges[supplyChangeCount].timeStamp = block.timestamp;
            supplyChangeCount++;
            emit RePegAction(block.timestamp, collateralValue);
        }
    }

    function withdrow(uint256 amount) external {
        require(hasRole(GOVERN_ROLE, msg.sender), " Only Governer can do it");
        b2usd.transfer(msg.sender, amount);
        emit Withdrow(block.timestamp, amount);
    }
}
