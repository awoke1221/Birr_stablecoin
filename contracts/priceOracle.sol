// SPDX-License-Identifier: MIT
pragma solidity >= 0.7.0 <0.9.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceOracle {

    AggregatorV3Interface private priceOracle;
    uint256 public unstableCollateralPrice;
    address public dataFeed;

    function setDataFeedAddress(address contractAddress) external{
        dataFeed = contractAddress;
        priceOracle = AggregatorV3Interface(dataFeed);
        
    }

    function collateralPriceToWie() external {
        ( , uint256 price, , , ) = priceOracle.latestRoundData();
        unstableCollateralPrice = price * 1e10; 
    }

    function rowCollateralPrice() external view returns(uint256){
        ( , uint256 price, , , ) = priceOracle.latestRoundData();

        return price;
    }
    
}