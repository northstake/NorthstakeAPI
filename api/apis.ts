export * from './accountApi';
import { AccountApi } from './accountApi';
export * from './accountApiKeysApi';
import { AccountApiKeysApi } from './accountApiKeysApi';
export * from './lidoReadApi';
import { LidoReadApi } from './lidoReadApi';
export * from './lidoRewardsApi';
import { LidoRewardsApi } from './lidoRewardsApi';
export * from './lidoStakingVaultsApi';
import { LidoStakingVaultsApi } from './lidoStakingVaultsApi';
export * from './lidoWriteApi';
import { LidoWriteApi } from './lidoWriteApi';
export * from './linkedWalletsApi';
import { LinkedWalletsApi } from './linkedWalletsApi';
export * from './organizationApi';
import { OrganizationApi } from './organizationApi';
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

export const APIS = [AccountApi, AccountApiKeysApi, LidoReadApi, LidoRewardsApi, LidoStakingVaultsApi, LidoWriteApi, LinkedWalletsApi, OrganizationApi, ValidatorsApi];
