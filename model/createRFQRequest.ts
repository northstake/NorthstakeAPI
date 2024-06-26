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


export class CreateRFQRequest {
   'validator_indices': Array<number>;
   'payment_wallet_id': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "validator_indices",
            "baseName": "validator_indices",
            "type": "Array<number>"
        },
        {
            "name": "payment_wallet_id",
            "baseName": "payment_wallet_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateRFQRequest.attributeTypeMap;
    }
}


