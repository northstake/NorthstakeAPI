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


export class WebhookPayloadRFQEscrowEventDetails {
   'transaction_hash'?: string;
   'amount'?: number;
   'timestamp'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transaction_hash",
            "baseName": "transaction_hash",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return WebhookPayloadRFQEscrowEventDetails.attributeTypeMap;
    }
}


