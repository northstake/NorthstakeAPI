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


export class PresignedExitKeyMessage {
   'epoch': string;
   'validator_index': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "epoch",
            "baseName": "epoch",
            "type": "string"
        },
        {
            "name": "validator_index",
            "baseName": "validator_index",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PresignedExitKeyMessage.attributeTypeMap;
    }
}

