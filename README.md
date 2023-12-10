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





Required .env variables:


NEXT_PUBLIC_PICKET_PUBLISHABLE_KEY="pk_d9960d04426c1e9f3941bec7e39c8854"
PICKET_PROJECT_SECRET_KEY="sk_e1f767d29fa6e533f2e5c62342fb9e24"

NEXT_PUBLIC_SUPABASE_URL='https://amtqlzbytgfajisewqaw.supabase.co'
NEXT_PUBLIC_SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtdHFsemJ5dGdmYWppc2V3cWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExNTYxMjcsImV4cCI6MjAxNjczMjEyN30.1XUMeBdfcGblja85sAqBX0usF4EHvCHPFh9ytiiMPnM'

SUPABASE_JWT_SECRET=""

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET=""

NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=""
NEXT_PUBLIC_PRIVATE_KEY=""


# QuickNode rpc provider
NEXT_PUBLIC_POLYGON_MUMBAI_RPC_URL=""

# Infura rpc provider
NEXT_PUBLIC_AVALANCHE_FUJI_RPC_URL=""