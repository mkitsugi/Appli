const { ethers } = require('hardhat');
const deployer_address = "0xD8ea243955298c6C7FdC6D8bA1B2A3aA3bCB956a";

async function deployNonTransferableNFT() {
  //const [deployer] = await ethers.getSigners();

  console.log('Deploying contract with the account:', deployer_address);

  const NonTransferableNFT = await ethers.getContractFactory('NonTransferableNFT');
  const gasLimit = 8000000; // ガス制限を増やす
  const nonTransferableNFT = await NonTransferableNFT.deploy('MyNFT', 'MNFT', { gasLimit });

  console.log('Contract address:', nonTransferableNFT.address);

  const tokenId = 1; // トークンIDを1に設定
  await nonTransferableNFT.mint(deployer_address, tokenId, { gasLimit }); // gasLimitを追加
}

deployNonTransferableNFT()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
