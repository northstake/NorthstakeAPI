export * from './accountApi';
import { AccountApi } from './accountApi';
export * from './depositAddressesApi';
import { DepositAddressesApi } from './depositAddressesApi';
export * from './linkedWalletsApi';
import { LinkedWalletsApi } from './linkedWalletsApi';
export * from './managedUsersApi';
import { ManagedUsersApi } from './managedUsersApi';
export * from './managedUsersDepositAddressesApi';
import { ManagedUsersDepositAddressesApi } from './managedUsersDepositAddressesApi';
export * from './managedUsersLinkedWalletsApi';
import { ManagedUsersLinkedWalletsApi } from './managedUsersLinkedWalletsApi';
export * from './managedUsersOrdersApi';
import { ManagedUsersOrdersApi } from './managedUsersOrdersApi';
export * from './managedUsersPortfolioApi';
import { ManagedUsersPortfolioApi } from './managedUsersPortfolioApi';
export * from './managedUsersTransactionsApi';
import { ManagedUsersTransactionsApi } from './managedUsersTransactionsApi';
export * from './managedUsersValidatorsApi';
import { ManagedUsersValidatorsApi } from './managedUsersValidatorsApi';
export * from './ordersApi';
import { OrdersApi } from './ordersApi';
export * from './portfolioApi';
import { PortfolioApi } from './portfolioApi';
export * from './transactionsApi';
import { TransactionsApi } from './transactionsApi';
export * from './validatorMarketplaceBuyersApi';
import { ValidatorMarketplaceBuyersApi } from './validatorMarketplaceBuyersApi';
export * from './validatorMarketplaceFacilitatorApi';
import { ValidatorMarketplaceFacilitatorApi } from './validatorMarketplaceFacilitatorApi';
export * from './validatorMarketplaceSellersApi';
import { ValidatorMarketplaceSellersApi } from './validatorMarketplaceSellersApi';
export * from './validatorMarketplaceWebhooksApi';
import { ValidatorMarketplaceWebhooksApi } from './validatorMarketplaceWebhooksApi';
export * from './validatorsApi';
import { ValidatorsApi } from './validatorsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AccountApi, DepositAddressesApi, LinkedWalletsApi, ManagedUsersApi, ManagedUsersDepositAddressesApi, ManagedUsersLinkedWalletsApi, ManagedUsersOrdersApi, ManagedUsersPortfolioApi, ManagedUsersTransactionsApi, ManagedUsersValidatorsApi, OrdersApi, PortfolioApi, TransactionsApi, ValidatorMarketplaceBuyersApi, ValidatorMarketplaceFacilitatorApi, ValidatorMarketplaceSellersApi, ValidatorMarketplaceWebhooksApi, ValidatorsApi];
