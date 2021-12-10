// SPDX-License-IDentifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFTMarket is ReentrancyGuard {
  using Counters for Counters.Counter;
  Counters.Counter private _itemIDs;
  Counters.Counter private _itemsSold;

  address payable owner;
  uint256 listingPrice = 0.005 ether;
  uint256 transactionVolume = 0.000 ether;

  constructor() {
    owner = payable(msg.sender);
  }

  struct MarketItem {
    uint itemID;
    address NFTContract;
    uint256 tokenID;
    address payable seller;
    address payable owner;
    uint256 price;
    bool visible;
    bool sold;
  }

  mapping(uint256 => MarketItem) private marketItemByID;

  event MarketItemCreated (
    uint indexed itemID,
    address indexed NFTContract,
    uint256 indexed tokenID,
    address seller,
    address owner,
    uint256 price,
    bool visible,
    bool sold
  );

  function changeVisible(uint256 itemID) public nonReentrant {
    if (!marketItemByID[itemID].sold && marketItemByID[itemID].seller == msg.sender) {
      marketItemByID[itemID].visible = !marketItemByID[itemID].visible;
    } else {
      require(true, "You must be in possession of the token to change its visibility.");
    }
  }

  function transactionVolumeCount() public view returns (uint256) {
    return transactionVolume;
  }

  function itemsSoldCount() public view returns (uint256) {
    return _itemsSold.current();
  }

  function itemsCreatedCount() public view returns (uint256) {
    return _itemIDs.current();
  }

  function getListingPrice() public view returns (uint256) {
    return listingPrice;
  }

  function getOwnerAddress() public view returns (address) {
    return owner;
  }

  function getContractBalance() public view returns (uint256) {
    return address(this).balance;
  }
  
  function createMarketItem(
    address NFTContract,
    uint256 tokenID,
    uint256 price
  ) public payable nonReentrant {
    require(price > 0, "Price must be at least 1 wei");
    require(msg.value == listingPrice, "Price must be equal to listing price");

    _itemIDs.increment();
    uint256 itemID = _itemIDs.current();
  
    marketItemByID[itemID] =  MarketItem(
      itemID,
      NFTContract,
      tokenID,
      payable(msg.sender),
      payable(address(0)),
      price,
      true,
      false
    );

    IERC721(NFTContract).transferFrom(msg.sender, address(this), tokenID);

    emit MarketItemCreated(
      itemID,
      NFTContract,
      tokenID,
      msg.sender,
      address(0),
      price,
      true,
      false
    );
  }

  function withdrawMarketEarnings() public nonReentrant {
    require(msg.sender == owner, "Only the market owner may request to withdraw funds.");
    owner.transfer(address(this).balance);
  }

  function createMarketSale(
    address NFTContract,
    uint256 itemID
    ) public payable nonReentrant {
    uint price = marketItemByID[itemID].price;
    uint tokenID = marketItemByID[itemID].tokenID;
    require(msg.value == price, "Please submit the asking price in order to complete the purchase");

    marketItemByID[itemID].seller.transfer(msg.value);
    IERC721(NFTContract).transferFrom(address(this), msg.sender, tokenID);
    marketItemByID[itemID].owner = payable(msg.sender);
    marketItemByID[itemID].sold = true;
    _itemsSold.increment();
    transactionVolume += msg.value;
  }

  function fetchMarketItems() public view returns (MarketItem[] memory) {
    uint itemCount = _itemIDs.current();
    uint unsoldItemCount = _itemIDs.current() - _itemsSold.current();
    uint currentIndex = 0;

    MarketItem[] memory items = new MarketItem[](unsoldItemCount);
    for (uint i = 0; i < itemCount; i++) {
      if (marketItemByID[i + 1].owner == address(0)) {
        items[currentIndex] = marketItemByID[i + 1];
        currentIndex += 1;
      }
    }
    return items;
  }

  function fetchMyOwnedNFTs() public view returns (MarketItem[] memory) {
    uint totalItemCount = _itemIDs.current();
    uint itemCount = 0;
    uint currentIndex = 0;

    for (uint i = 0; i < totalItemCount; i++) {
      if (marketItemByID[i + 1].owner == msg.sender) {
        itemCount += 1;
      }
    }

    MarketItem[] memory items = new MarketItem[](itemCount);
    for (uint i = 0; i < totalItemCount; i++) {
      if (marketItemByID[i + 1].owner == msg.sender) {
        items[currentIndex] = marketItemByID[i + 1];
        currentIndex += 1;
      }
    }
    return items;
  }

  function fetchMyCreatedNFTs() public view returns (MarketItem[] memory) {
    uint totalItemCount = _itemIDs.current();
    uint itemCount = 0;
    uint currentIndex = 0;

    for (uint i = 0; i < totalItemCount; i++) {
      if (marketItemByID[i + 1].seller == msg.sender) {
        itemCount += 1;
      }
    }

    MarketItem[] memory items = new MarketItem[](itemCount);
    for (uint i = 0; i < totalItemCount; i++) {
      if (marketItemByID[i + 1].seller == msg.sender) {
        items[currentIndex] = marketItemByID[i + 1];
        currentIndex += 1;
      }
    }
    return items;
  }
}