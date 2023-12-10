// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract WrNFT is ERC721URIStorage, Ownable {
     string constant TOKEN_URI =
          "https://peach-formal-cricket-122.mypinata.cloud/ipfs/QmNxLv2y4YPUd1ft3943ybFprwWfmNTnYWQjwyAkqV5FAN/approved.json";
    uint256 internal tokenId;


// NFT metadata stored on IPFS with Pinata
    // string[] IpfsUri = [
//         string[] TOKEN_URI = [
//  "https://peach-formal-cricket-122.mypinata.cloud/ipfs/QmNxLv2y4YPUd1ft3943ybFprwWfmNTnYWQjwyAkqV5FAN/startingAndPending.json",
//     "https://peach-formal-cricket-122.mypinata.cloud/ipfs/QmNxLv2y4YPUd1ft3943ybFprwWfmNTnYWQjwyAkqV5FAN/approved.json"
// ];

    uint interval;
    uint lastTimeStamp;


    constructor(uint _interval) ERC721("WrNFT", "WNFT") {
        interval = _interval;
        lastTimeStamp = block.timestamp;
    }


    // Keeper functions
    function checkUpkeep(bytes calldata) external view returns (bool upkeepNeeded, bytes memory){
upkeepNeeded = (block.timestamp - lastTimeStamp) > interval;
}
    
    function performUpkeep(bytes calldata) external {
        if ((block.timestamp - lastTimeStamp) > interval ) {
            lastTimeStamp = block.timestamp;
            updateToApproved(0);
        }
    }





    function mint(address to) public onlyOwner {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, TOKEN_URI);
        unchecked {
            tokenId++;
        }
    }

    function updateToApproved(uint256 _tokenId) public {
       // get current NFT state
        if (nftStage(_tokenId) >=2){return;}
        uint256 newVal = nftStage(_tokenId) + 1;
        // store new URI for NFT
        string memory newUri = TOKEN_URI[newVal];
        // update NFT URI
        _setTokenURI(_tokenId, newUri);

    }

    //Helper Functions

    function nftStage(uint256 _tokenId) public view returns (uint256) {
        string memory _uri = tokenURI(_tokenId);
        return _uri
    }

}




