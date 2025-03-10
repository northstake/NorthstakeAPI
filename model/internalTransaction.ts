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


export class InternalTransaction {
   'blockNumber': number;
   'timeStamp': Date;
   'hash': string;
   'fromAddress': string;
   'toAddress': string;
    /**
    * Transaction value in ETH
    */
   'value': string;
    /**
    * Transaction value in USD
    */
   'valueInUSD'?: string;
   'isError'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "blockNumber",
            "baseName": "blockNumber",
            "type": "number"
        },
        {
            "name": "timeStamp",
            "baseName": "timeStamp",
            "type": "Date"
        },
        {
            "name": "hash",
            "baseName": "hash",
            "type": "string"
        },
        {
            "name": "fromAddress",
            "baseName": "fromAddress",
            "type": "string"
        },
        {
            "name": "toAddress",
            "baseName": "toAddress",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "valueInUSD",
            "baseName": "valueInUSD",
            "type": "string"
        },
        {
            "name": "isError",
            "baseName": "isError",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return InternalTransaction.attributeTypeMap;
    }
}


