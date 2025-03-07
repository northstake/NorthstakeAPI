/**
 * Northstake
 * Northstake api
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Asset } from './asset';
import { SmartContractDetailedStats } from './smartContractDetailedStats';
import { SmartContractDetailedWhitelistedDepositorsInner } from './smartContractDetailedWhitelistedDepositorsInner';

/**
* Details about a smart contract including name, asset, address and type, whitelistedDepositors and validator providers.
*/
export class SmartContractDetailed {
   'name': string;
   'asset': Asset;
   'address': string;
   'type'?: string;
   'deployedAt': Date;
   'deployedBy'?: string;
    /**
    * List of validator providers for this smart contract
    */
   'validatorProviders': Array<string>;
    /**
    * List of whitelisted depositors with their details
    */
   'whitelistedDepositors': Array<SmartContractDetailedWhitelistedDepositorsInner>;
   'stats': SmartContractDetailedStats;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "asset",
            "baseName": "asset",
            "type": "Asset"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "deployedAt",
            "baseName": "deployedAt",
            "type": "Date"
        },
        {
            "name": "deployedBy",
            "baseName": "deployedBy",
            "type": "string"
        },
        {
            "name": "validatorProviders",
            "baseName": "validatorProviders",
            "type": "Array<string>"
        },
        {
            "name": "whitelistedDepositors",
            "baseName": "whitelistedDepositors",
            "type": "Array<SmartContractDetailedWhitelistedDepositorsInner>"
        },
        {
            "name": "stats",
            "baseName": "stats",
            "type": "SmartContractDetailedStats"
        }    ];

    static getAttributeTypeMap() {
        return SmartContractDetailed.attributeTypeMap;
    }
}

export namespace SmartContractDetailed {
}

