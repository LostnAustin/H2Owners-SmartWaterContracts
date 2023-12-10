// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract MyNFT is ERC721URIStorage, Ownable {
    string constant TOKEN_URI =
        "NFT_METADATA_URL";
    uint256 internal tokenId;

    constructor() ERC721("MyNFT", "MNFT") {}

    function mint(address to) public onlyOwner {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, TOKEN_URI);
        unchecked {
            tokenId++;
        }
    }
}






// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@openzeppelin/contracts@5.0.0/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@5.0.0/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@5.0.0/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts@5.0.0/access/Ownable.sol";
import "@openzeppelin/contracts@4.4.2/utils/Counters.sol";



contract WRPermitNFTv3 is ERC721, ERC721URIStorage, ERC721Burnable {

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;


    // NFT metadata stored on IPFS with Pinata
    string[] IpfsUri = [
    "https://ipfs.io/ipfs/QmNxLv2y4YPUd1ft3943ybFprwWfmNTnYWQjwyAkqV5FAN/approved.json",
    "https://ipfs.io/ipfs/QmNxLv2y4YPUd1ft3943ybFprwWfmNTnYWQjwyAkqV5FAN/startingAndPending.json"
];

    uint interval;
    uint lastTimeStamp;
    
    
    
    constructor(uint _interval)
        ERC721("WRPermitNFT", "MTK")
        // Ownable(initialOwner)

    {   interval = _interval; 
        lastTimeStamp = block.timestamp ;
        }

    function safeMint(address to, uint256 tokenId, string memory uri)
        public
        // onlyOwner
    {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

          // Keeper functions
    function checkUpkeep(bytes calldata) external view returns (bool upkeepNeeded, bytes memory){
    upkeepNeeded = false;
    upkeepNeeded = (block.timestamp - lastTimeStamp) > interval;
     return (upkeepNeeded, bytes(""));
}
    
    function performUpkeep(bytes calldata) external {
        if ((block.timestamp - lastTimeStamp) > interval ) {
            lastTimeStamp = block.timestamp;
            updateToApproved(0);
        }
    }



    function parseUInt(string memory _value) internal pure returns (uint256) {
    bytes memory valueBytes = bytes(_value);
    uint256 result = 0;
    for (uint256 i = 0; i < valueBytes.length; i++) {
        uint256 digit = uint256(uint8(valueBytes[i])) - 48;
        if (digit >= 0 && digit <= 9) {
            result = result * 10 + digit;
        }
    }
    return result;
    }

    function updateToApproved(uint256 _tokenId) public {
    if (parseUInt(nftStage(_tokenId)) >= 1) {
        return;
    }
    uint256 newVal = parseUInt(nftStage(_tokenId)) + 1;
    string memory newUri = IpfsUri[newVal];
    _setTokenURI(_tokenId, newUri);
    }

    //Helper Functions

    function nftStage(uint256 _tokenId) public view returns (string memory) {
        string memory _uri = tokenURI(_tokenId);
        return _uri;
    }

}