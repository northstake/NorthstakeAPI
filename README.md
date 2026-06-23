# Welcome to the Northstake API SDK

The Northstake API SDK is designed to provide developers with easy access to the Northstake platform's API, enabling seamless integrations and management of digital assets. This SDK is built with TypeScript, offering strong type definitions and compatibility with modern JavaScript development workflows.

## Features

- **Comprehensive Coverage**: The SDK covers all available endpoints of the Northstake API, ensuring you can manage assets, transactions, and more.
- **TypeScript Support**: Full TypeScript support provides autocomplete features and type safety.
- **Asynchronous API**: All network requests are asynchronous and return promises for efficient performance.

## Getting Started

To get started with the Northstake API SDK, you need to install the package and set up your environment:

### Installation

Install the SDK using npm:

```bash
npm install @northstake/northstakeapi
```

Or using yarn:

```bash
yarn add @northstake/northstakeapi
```

### Usage example
Here’s how you can start using the SDK in your project:


```typescript
import { NorthstakeApi } from '@northstake/northstakeapi';

const api = new NorthstakeApi('apiKey', 'privateKey')


async function getAccountInfo() {
    try {
        const result = await api.account.getAccountInformation()
        console.log(result);
    } catch (error) {
        console.error('Error fetching account details:', error);
    }
}

getAccountInfo();
```

### Documentation
For detailed documentation and usage instructions, visit our documentation portal:
[Northstake API Documentation](https://northstake.readme.io/docs/northstake-sdk)

### Support
If you encounter any issues or require further assistance, please open an issue on our GitHub repository:
[Northstake API SDK GitHub Repository](https://github.com/northstake/NorthstakeAPI) 

### Contributing
We welcome contributions from the community! If you would like to contribute to the Northstake API SDK, please fork the repository and submit a pull request with your changes.

## License
This SDK is released under the MIT License.

