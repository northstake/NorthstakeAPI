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

import { RFQDocumentFacilitator } from './rFQDocumentFacilitator';

export class ListAllRFQsForFacilitator200Response {
   'rfqs'?: Array<RFQDocumentFacilitator>;
    /**
    * Total number of RFQs
    */
   'total'?: number;
    /**
    * Total number of pages
    */
   'pages'?: number;
    /**
    * Current page number
    */
   'currentPage'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rfqs",
            "baseName": "rfqs",
            "type": "Array<RFQDocumentFacilitator>"
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
        return ListAllRFQsForFacilitator200Response.attributeTypeMap;
    }
}


