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
import { WebhookPayloadRFQWithdrawalClaimableDetails } from './webhookPayloadRFQWithdrawalClaimableDetails';

export class WebhookPayloadRFQWithdrawalClaimable {
   'document_id'?: string;
   'event'?: RFQWebhookEventType;
   'details'?: WebhookPayloadRFQWithdrawalClaimableDetails;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "document_id",
            "baseName": "document_id",
            "type": "string"
        },
        {
            "name": "event",
            "baseName": "event",
            "type": "RFQWebhookEventType"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "WebhookPayloadRFQWithdrawalClaimableDetails"
        }    ];

    static getAttributeTypeMap() {
        return WebhookPayloadRFQWithdrawalClaimable.attributeTypeMap;
    }
}

export namespace WebhookPayloadRFQWithdrawalClaimable {
}
