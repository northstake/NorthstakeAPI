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

import { RFQWebhookEventType } from './rFQWebhookEventType';

export class WebhookRegistration {
    /**
    * The URL to be called by the webhook.
    */
   'url': string;
   'eventType': RFQWebhookEventType;
    /**
    * A secret token that the server will use to sign webhook payloads for verification.
    */
   'secret': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "eventType",
            "baseName": "eventType",
            "type": "RFQWebhookEventType"
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WebhookRegistration.attributeTypeMap;
    }
}

export namespace WebhookRegistration {
}

