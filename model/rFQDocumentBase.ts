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

import { RFQDocumentBaseUniqueEscrowVault } from './rFQDocumentBaseUniqueEscrowVault';
import { RFQDocumentStatus } from './rFQDocumentStatus';
import { SettlementSteps } from './settlementSteps';

export class RFQDocumentBase {
   'id': string;
   'status': RFQDocumentStatus;
   'total_balance': number;
   'payment_address': string;
   'estimated_all_validators_exited_at': Date;
   'unique_escrow_vault'?: RFQDocumentBaseUniqueEscrowVault;
   'settlement_steps'?: SettlementSteps;
   'smart_contract'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "RFQDocumentStatus"
        },
        {
            "name": "total_balance",
            "baseName": "total_balance",
            "type": "number"
        },
        {
            "name": "payment_address",
            "baseName": "payment_address",
            "type": "string"
        },
        {
            "name": "estimated_all_validators_exited_at",
            "baseName": "estimated_all_validators_exited_at",
            "type": "Date"
        },
        {
            "name": "unique_escrow_vault",
            "baseName": "unique_escrow_vault",
            "type": "RFQDocumentBaseUniqueEscrowVault"
        },
        {
            "name": "settlement_steps",
            "baseName": "settlement_steps",
            "type": "SettlementSteps"
        },
        {
            "name": "smart_contract",
            "baseName": "smart_contract",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RFQDocumentBase.attributeTypeMap;
    }
}

export namespace RFQDocumentBase {
}

