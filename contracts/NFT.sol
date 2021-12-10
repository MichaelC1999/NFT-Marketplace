// SPDX-License-IDentifier: MIT OR Apache-2.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIDs;
    address contractAddress;

    constructor(address marketplaceAddress) ERC721("EN EFF TEE", "METT") {
        contractAddress = marketplaceAddress;
    }

    function createToken(string memory tokenURI) public returns (uint) {
        _tokenIDs.increment();
        uint256 newItemID = _tokenIDs.current();

        _mint(msg.sender, newItemID);
        _setTokenURI(newItemID, tokenURI);
        setApprovalForAll(contractAddress, true);
        return newItemID;
    }
}