

# SmartDataStorage

## Overview

SmartDataStorage is a smart contract project built on the Ethereum blockchain using Solidity. It provides a simple storage system for numeric and named data. The contract allows users to store and retrieve a single numeric value and associate it with a name. Additionally, it includes functionality to manage a list of people with associated names and numbers.

## Contract Details

### Storedata Contract

The `Storedata` contract includes the following features:

- **Storage of Numeric Value:** Users can store a numeric value in the contract.
- **Mapping for Names:** A mapping is established to associate names with numeric values.
- **People Struct:** The contract defines a `People` struct with `number` and `name` attributes.
- **Array of People:** An array of `People` structs is maintained to store additional data.
- **Data Retrieval:** Users can retrieve the stored numeric value.
- **Add People Function:** Users can add entries to the array of people, associating names with numbers.

### Deployment Script

The deployment script (`deploy.js`) deploys the `Storedata` contract to the Ethereum blockchain using Hardhat. It also includes functionality to verify the contract on Etherscan.

### Testing

The project includes comprehensive tests using Hardhat and Chai. Test cases cover initial conditions, value updates, and the correct functioning of the people struct and array.

## Getting Started

Follow the steps below to get started with the SmartDataStorage project:

1. Clone the repository.
2. Install the required dependencies using `npm install`.
3. Deploy the contract to the desired Ethereum network using `npx hardhat run deploy.js`.
4. Run tests using `npx hardhat test`.

## Additional Configuration

The `hardhat.config.js` file includes configurations for different networks, gas reporting, and Etherscan verification. Make sure to set environment variables for the RPC URL, private key, Etherscan API key, and CoinMarketCap API key.

## License

This project is licensed under the UNLICENSED license. See the `LICENSE` file for details.
