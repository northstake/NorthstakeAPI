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

import { EthereumValidatorKeyKeystoreCrypto } from './ethereumValidatorKeyKeystoreCrypto';

export class EthereumValidatorKeyKeystore {
   'crypto': EthereumValidatorKeyKeystoreCrypto;
   'description': string;
   'pubkey': string;
   'path': string;
   'uuid': string;
   'version': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "crypto",
            "baseName": "crypto",
            "type": "EthereumValidatorKeyKeystoreCrypto"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "pubkey",
            "baseName": "pubkey",
            "type": "string"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return EthereumValidatorKeyKeystore.attributeTypeMap;
    }
}


