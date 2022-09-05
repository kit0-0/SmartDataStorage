
const { ethers, run, network } = require("hardhat");
require("dotenv").config()

async function main() {
  const StorageFactory = await ethers.getContractFactory("Storedata")
  console.log("Deploying contract...")
  const storage = await StorageFactory.deploy()
  await storage.deployed()
  console.log(`Deployed contract to: ${storage.address}`)

  if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for block confirmations...")
    await storage.deployTransaction.wait(6)
    await verify(storage.address, [])
  }
  const currentValue = await storage.retrieve()
  console.log(`Current Value is: ${currentValue}`)

  // Update the current value
  const transactionResponse = await storage.store(7)
  await transactionResponse.wait(1)
  const updatedValue = await storage.retrieve()
  console.log(`Updated Value is: ${updatedValue}`)
}


const verify = async (contractAddress, args) => {
  console.log("Verifying contract...")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!")
    } else {
      console.log(e)
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })