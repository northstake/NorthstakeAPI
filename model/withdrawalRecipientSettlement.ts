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


export class WithdrawalRecipientSettlement {
   'timestamp': string;
   'transaction_hash': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string"
        },
        {
            "name": "transaction_hash",
            "baseName": "transaction_hash",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WithdrawalRecipientSettlement.attributeTypeMap;
    }
}


