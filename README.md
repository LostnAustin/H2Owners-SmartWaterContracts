Welcome to H2Owners - Smart Water Contracts!
The goal of this project is to streamline the complex and time consuming process for applying for water rights, water permits, and transfers in the State of Texas. Efficiency and monitoring can both be improved with the application of web3, blockchain, and Chainlink technologies.


1. clone the repo
2. To deploy smart contracts, in root run npm install. Then run npx hardhat deploy. Listed below is my deployment information between Fuji and Mumbai for CCIP


CCIP Deploy Info: MyNFT Transaction hash: 0x903dc3aee69bada6b6ecd05754fee02ece3b731e846e3c8d5f9ffdf0fc6cf1da

DestinationMinter contract deployed at address 0x3eFE7525d8E7a4b0E40fd826D7F07e0DB4df9C42 on the polygonMumbai blockchain

SourceMinter contract deployed at address 0x96AA444Fa1eaA77258FAFd12E7e8092AAfc98227



3. Automation:
LINK automation contract for WROwner NFT

Automation registry address (Mumbai): 0xf97C091179A4A4d666da7a2764dDeD4F932FC14A
WrNFT LINK upkeep address: 0x28b89ed3d44440cc17c673e402706f5aa130731d

Deployed WRPERMITNFT address: 0x4237765e6b151626930A77E330a7163fc0a5B1CB
VRF consumer contract: 0x96aa444fa1eaa77258fafd12e7e8092aafc98227



4. Deploying the UI
    npm run dev, navigate to localhost:3000





npx hardhat cross-chain-mint --source-minter SOURCE_MINTER_ADDRESS --source-blockchain avalancheFuji --destination-minter DESTINATION_MINTER_ADDRESS --destination-blockchain polygonMumbai --pay-fees-in Native


npx hardhat cross-chain-mint --source-minter 0x96AA444Fa1eaA77258FAFd12E7e8092AAfc98227 --source-blockchain avalancheFuji --destination-minter 0x3eFE7525d8E7a4b0E40fd826D7F07e0DB4df9C4S --destination-blockchain polygonMumbai (0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889)--pay-fees-in Native

npx hardhat cross-chain-mint --source-minter 0x96AA444Fa1eaA77258FAFd12E7e8092AAfc98227 --source-blockchain avalancheFuji --destination-blockchain polygonMumbai --destination-minter 0x3eFE7525d8E7a4b0E40fd826D7F07e0DB4df9C4S --pay-fees-in Native



npx hardhat cross-chain-mint --source-minter 0x96AA444Fa1eaA77258FAFd12E7e8092AAfc98227 --source-blockchain avalancheFuji --destination-blockchain polygonMumbai --destination-minter 0x3eFE7525d8E7a4b0E40fd826D7F07e0DB4df9C4S --pay-fees-in Native