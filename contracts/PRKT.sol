// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NonTransferableNFT is ERC721, Ownable {
    address private immutable _creator;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
        _creator = msg.sender;
    }

    function mint(address to, uint256 tokenId) public onlyOwner {
        require(ownerOf(tokenId) == address(0), "Token already minted");
        _safeMint(to, tokenId);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 data) internal virtual override {
        require(from == address(0) || to == _creator, "Token transfer not allowed");
        super._beforeTokenTransfer(from, to, tokenId, data);
    }
}
