# Bsc Test Smart Contract

# deployed contract address
0x8fe785dC49b4fF4F2b1E1Dfeba2914D776378e7e

# deploy
npx hardhat run --network testnet scripts/deploy.ts

# verify
npx hardhat verify --contract contracts/TestBscToken.sol:TestBscToken --network testnet 0x8fe785dC49b4fF4F2b1E1Dfeba2914D776378e7e "bsctest" "OCBSCT" 18 
