export * from './accountApi';
import { AccountApi } from './accountApi';
export * from './accountApiKeysApi';
import { AccountApiKeysApi } from './accountApiKeysApi';
export * from './linkedWalletsApi';
import { LinkedWalletsApi } from './linkedWalletsApi';
export * from './smartContractsApi';
import { SmartContractsApi } from './smartContractsApi';
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

export const APIS = [AccountApi, AccountApiKeysApi, LinkedWalletsApi, SmartContractsApi, ValidatorMarketplaceBuyersApi, ValidatorMarketplaceFacilitatorApi, ValidatorMarketplaceSellersApi, ValidatorMarketplaceWebhooksApi, ValidatorsApi];
