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

import { Transaction } from './transaction';

export class GetSmartContractTransactions200Response {
   'transactions': Array<Transaction>;
    /**
    * Total number of transactions
    */
   'total': number;
    /**
    * Total number of pages
    */
   'pages': number;
    /**
    * Current page number
    */
   'currentPage': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transactions",
            "baseName": "transactions",
            "type": "Array<Transaction>"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "pages",
            "baseName": "pages",
            "type": "number"
        },
        {
            "name": "currentPage",
            "baseName": "currentPage",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return GetSmartContractTransactions200Response.attributeTypeMap;
    }
}

