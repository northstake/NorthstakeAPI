import localVarRequest from 'request';
import * as jwt from 'jsonwebtoken';


export * from './acceptedQuote';
export * from './accountEntity';
export * from './addLinkedWalletRequest';
export * from './apiKey';
export * from './asset';
export * from './createRFQRequest';
export * from './errorResponse';
export * from './escrowPayment';
export * from './escrowReleased';
export * from './ethereumValidatorKey';
export * from './ethereumValidatorKeyKeystore';
export * from './ethereumValidatorKeyKeystoreCrypto';
export * from './ethereumValidatorKeyKeystoreCryptoChecksum';
export * from './ethereumValidatorKeyKeystoreCryptoCipher';
export * from './ethereumValidatorKeyKeystoreCryptoCipherParams';
export * from './ethereumValidatorKeyKeystoreCryptoKdf';
export * from './ethereumValidatorKeyKeystoreCryptoKdfParams';
export * from './exitEstimateBase';
export * from './exitEstimateSeller';
export * from './exitProposal';
export * from './generateApiKeyRequest';
export * from './getMarketplaceMetadata200Response';
export * from './getSmartContractMEVRewards200Response';
export * from './getSmartContractMinedBlocks200Response';
export * from './getSmartContractTransactions200Response';
export * from './getWithdrawalsResponse';
export * from './internalTransaction';
export * from './listAllRFQsForFacilitator200Response';
export * from './mEVReward';
export * from './minedBlock';
export * from './presignedExitKey';
export * from './presignedExitKeyMessage';
export * from './provideEscrowHashForRFQDocumentRequest';
export * from './quote';
export * from './rFQBidFacilitator';
export * from './rFQBids';
export * from './rFQDocumentBase';
export * from './rFQDocumentBaseUniqueEscrowVault';
export * from './rFQDocumentBuyer';
export * from './rFQDocumentBuyerAllOfValidators';
export * from './rFQDocumentBuyerStatusFilter';
export * from './rFQDocumentFacilitator';
export * from './rFQDocumentFacilitatorStatusFilter';
export * from './rFQDocumentFacilitatorValidatorsInner';
export * from './rFQDocumentSeller';
export * from './rFQDocumentSellerAllOfValidators';
export * from './rFQDocumentSellerStatusFilter';
export * from './rFQDocumentStatus';
export * from './rFQDocumentUpdate';
export * from './rFQUpdatePayload';
export * from './rFQWebhookEventType';
export * from './registerWithdrawalRecipientSettlementRequest';
export * from './settlementSteps';
export * from './smartContract';
export * from './smartContractDetailed';
export * from './smartContractDetailedStats';
export * from './smartContractDetailedWhitelistedDepositorsInner';
export * from './submittedQuote';
export * from './transaction';
export * from './validatorInfo';
export * from './validatorKeyHolder';
export * from './validatorType';
export * from './validatorWithdrawal';
export * from './wallet';
export * from './webHookLookupAnswer';
export * from './webhookPayload';
export * from './webhookPayloadData';
export * from './webhookPayloadRFQAvailable';
export * from './webhookPayloadRFQBidAccepted';
export * from './webhookPayloadRFQBidAcceptedDetails';
export * from './webhookPayloadRFQBidReceived';
export * from './webhookPayloadRFQBidReceivedDetails';
export * from './webhookPayloadRFQEscrowEvent';
export * from './webhookPayloadRFQEscrowEventDetails';
export * from './webhookPayloadRFQEscrowReleased';
export * from './webhookPayloadRFQEscrowReleasedDetails';
export * from './webhookPayloadRFQTransferProposalReceived';
export * from './webhookPayloadRFQTransferProposalReceivedDetails';
export * from './webhookPayloadRFQValidatorExited';
export * from './webhookPayloadRFQValidatorExitedDetails';
export * from './webhookPayloadRFQValidatorWithdrawalChange';
export * from './webhookPayloadRFQValidatorWithdrawalChangeDetails';
export * from './webhookPayloadRFQWithdrawalClaimable';
export * from './webhookPayloadRFQWithdrawalClaimableDetails';
export * from './webhookRegistration';
export * from './webhookRegistrationDetails';
export * from './withdrawalClaimable';
export * from './withdrawalRecipientSettlement';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AcceptedQuote } from './acceptedQuote';


import { AccountEntity } from './accountEntity';


import { AddLinkedWalletRequest } from './addLinkedWalletRequest';


import { ApiKey } from './apiKey';


import { Asset } from './asset';


import { CreateRFQRequest } from './createRFQRequest';


import { ErrorResponse } from './errorResponse';


import { EscrowPayment } from './escrowPayment';


import { EscrowReleased } from './escrowReleased';


import { EthereumValidatorKey } from './ethereumValidatorKey';


import { EthereumValidatorKeyKeystore } from './ethereumValidatorKeyKeystore';


import { EthereumValidatorKeyKeystoreCrypto } from './ethereumValidatorKeyKeystoreCrypto';


import { EthereumValidatorKeyKeystoreCryptoChecksum } from './ethereumValidatorKeyKeystoreCryptoChecksum';


import { EthereumValidatorKeyKeystoreCryptoCipher } from './ethereumValidatorKeyKeystoreCryptoCipher';


import { EthereumValidatorKeyKeystoreCryptoCipherParams } from './ethereumValidatorKeyKeystoreCryptoCipherParams';


import { EthereumValidatorKeyKeystoreCryptoKdf } from './ethereumValidatorKeyKeystoreCryptoKdf';


import { EthereumValidatorKeyKeystoreCryptoKdfParams } from './ethereumValidatorKeyKeystoreCryptoKdfParams';


import { ExitEstimateBase } from './exitEstimateBase';


import { ExitEstimateSeller } from './exitEstimateSeller';


import { ExitProposal } from './exitProposal';


import { GenerateApiKeyRequest } from './generateApiKeyRequest';


import { GetMarketplaceMetadata200Response } from './getMarketplaceMetadata200Response';


import { GetSmartContractMEVRewards200Response } from './getSmartContractMEVRewards200Response';


import { GetSmartContractMinedBlocks200Response } from './getSmartContractMinedBlocks200Response';


import { GetSmartContractTransactions200Response } from './getSmartContractTransactions200Response';


import { GetWithdrawalsResponse } from './getWithdrawalsResponse';


import { InternalTransaction } from './internalTransaction';


import { ListAllRFQsForFacilitator200Response } from './listAllRFQsForFacilitator200Response';


import { MEVReward } from './mEVReward';


import { MinedBlock } from './minedBlock';


import { PresignedExitKey } from './presignedExitKey';


import { PresignedExitKeyMessage } from './presignedExitKeyMessage';


import { ProvideEscrowHashForRFQDocumentRequest } from './provideEscrowHashForRFQDocumentRequest';


import { Quote } from './quote';


import { RFQBidFacilitator } from './rFQBidFacilitator';


import { RFQBids } from './rFQBids';


import { RFQDocumentBase } from './rFQDocumentBase';


import { RFQDocumentBaseUniqueEscrowVault } from './rFQDocumentBaseUniqueEscrowVault';


import { RFQDocumentBuyer } from './rFQDocumentBuyer';


import { RFQDocumentBuyerAllOfValidators } from './rFQDocumentBuyerAllOfValidators';


import { RFQDocumentBuyerStatusFilter } from './rFQDocumentBuyerStatusFilter';


import { RFQDocumentFacilitator } from './rFQDocumentFacilitator';


import { RFQDocumentFacilitatorStatusFilter } from './rFQDocumentFacilitatorStatusFilter';


import { RFQDocumentFacilitatorValidatorsInner } from './rFQDocumentFacilitatorValidatorsInner';


import { RFQDocumentSeller } from './rFQDocumentSeller';


import { RFQDocumentSellerAllOfValidators } from './rFQDocumentSellerAllOfValidators';


import { RFQDocumentSellerStatusFilter } from './rFQDocumentSellerStatusFilter';


import { RFQDocumentStatus } from './rFQDocumentStatus';


import { RFQDocumentUpdate } from './rFQDocumentUpdate';


import { RFQUpdatePayload } from './rFQUpdatePayload';


import { RFQWebhookEventType } from './rFQWebhookEventType';


import { RegisterWithdrawalRecipientSettlementRequest } from './registerWithdrawalRecipientSettlementRequest';


import { SettlementSteps } from './settlementSteps';


import { SmartContract } from './smartContract';


import { SmartContractDetailed } from './smartContractDetailed';


import { SmartContractDetailedStats } from './smartContractDetailedStats';


import { SmartContractDetailedWhitelistedDepositorsInner } from './smartContractDetailedWhitelistedDepositorsInner';


import { SubmittedQuote } from './submittedQuote';


import { Transaction } from './transaction';


import { ValidatorInfo } from './validatorInfo';


import { ValidatorKeyHolder } from './validatorKeyHolder';


import { ValidatorType } from './validatorType';


import { ValidatorWithdrawal } from './validatorWithdrawal';


import { Wallet } from './wallet';


import { WebHookLookupAnswer } from './webHookLookupAnswer';


import { WebhookPayload } from './webhookPayload';


import { WebhookPayloadData } from './webhookPayloadData';


import { WebhookPayloadRFQAvailable } from './webhookPayloadRFQAvailable';


import { WebhookPayloadRFQBidAccepted } from './webhookPayloadRFQBidAccepted';


import { WebhookPayloadRFQBidAcceptedDetails } from './webhookPayloadRFQBidAcceptedDetails';


import { WebhookPayloadRFQBidReceived } from './webhookPayloadRFQBidReceived';


import { WebhookPayloadRFQBidReceivedDetails } from './webhookPayloadRFQBidReceivedDetails';


import { WebhookPayloadRFQEscrowEvent } from './webhookPayloadRFQEscrowEvent';


import { WebhookPayloadRFQEscrowEventDetails } from './webhookPayloadRFQEscrowEventDetails';


import { WebhookPayloadRFQEscrowReleased } from './webhookPayloadRFQEscrowReleased';


import { WebhookPayloadRFQEscrowReleasedDetails } from './webhookPayloadRFQEscrowReleasedDetails';


import { WebhookPayloadRFQTransferProposalReceived } from './webhookPayloadRFQTransferProposalReceived';


import { WebhookPayloadRFQTransferProposalReceivedDetails } from './webhookPayloadRFQTransferProposalReceivedDetails';


import { WebhookPayloadRFQValidatorExited } from './webhookPayloadRFQValidatorExited';


import { WebhookPayloadRFQValidatorExitedDetails } from './webhookPayloadRFQValidatorExitedDetails';


import { WebhookPayloadRFQValidatorWithdrawalChange } from './webhookPayloadRFQValidatorWithdrawalChange';


import { WebhookPayloadRFQValidatorWithdrawalChangeDetails } from './webhookPayloadRFQValidatorWithdrawalChangeDetails';


import { WebhookPayloadRFQWithdrawalClaimable } from './webhookPayloadRFQWithdrawalClaimable';


import { WebhookPayloadRFQWithdrawalClaimableDetails } from './webhookPayloadRFQWithdrawalClaimableDetails';


import { WebhookRegistration } from './webhookRegistration';


import { WebhookRegistrationDetails } from './webhookRegistrationDetails';


import { WithdrawalClaimable } from './withdrawalClaimable';


import { WithdrawalRecipientSettlement } from './withdrawalRecipientSettlement';



/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];
let enumsMap: {[index: string]: any} = {
    "ApiKey.roles": ApiKey,
    "GenerateApiKeyRequest.keyRights": GenerateApiKeyRequest,
    "RFQDocumentFacilitator.status": RFQDocumentFacilitator,
    "ValidatorInfo.asset": ValidatorInfo,
    "ValidatorInfo.status": ValidatorInfo,
    "ValidatorWithdrawal.asset": ValidatorWithdrawal,
    "ValidatorWithdrawal.withdrawalType": ValidatorWithdrawal,
};
let typeMap: {[index: string]: any} = {
    "AcceptedQuote": AcceptedQuote,
    "AccountEntity": AccountEntity,
    "AddLinkedWalletRequest": AddLinkedWalletRequest,
    "ApiKey": ApiKey,
    "CreateRFQRequest": CreateRFQRequest,
    "ErrorResponse": ErrorResponse,
    "EscrowPayment": EscrowPayment,
    "EscrowReleased": EscrowReleased,
    "EthereumValidatorKey": EthereumValidatorKey,
    "EthereumValidatorKeyKeystore": EthereumValidatorKeyKeystore,
    "EthereumValidatorKeyKeystoreCrypto": EthereumValidatorKeyKeystoreCrypto,
    "EthereumValidatorKeyKeystoreCryptoChecksum": EthereumValidatorKeyKeystoreCryptoChecksum,
    "EthereumValidatorKeyKeystoreCryptoCipher": EthereumValidatorKeyKeystoreCryptoCipher,
    "EthereumValidatorKeyKeystoreCryptoCipherParams": EthereumValidatorKeyKeystoreCryptoCipherParams,
    "EthereumValidatorKeyKeystoreCryptoKdf": EthereumValidatorKeyKeystoreCryptoKdf,
    "EthereumValidatorKeyKeystoreCryptoKdfParams": EthereumValidatorKeyKeystoreCryptoKdfParams,
    "ExitEstimateBase": ExitEstimateBase,
    "ExitEstimateSeller": ExitEstimateSeller,
    "ExitProposal": ExitProposal,
    "GenerateApiKeyRequest": GenerateApiKeyRequest,
    "GetMarketplaceMetadata200Response": GetMarketplaceMetadata200Response,
    "GetSmartContractMEVRewards200Response": GetSmartContractMEVRewards200Response,
    "GetSmartContractMinedBlocks200Response": GetSmartContractMinedBlocks200Response,
    "GetSmartContractTransactions200Response": GetSmartContractTransactions200Response,
    "GetWithdrawalsResponse": GetWithdrawalsResponse,
    "InternalTransaction": InternalTransaction,
    "ListAllRFQsForFacilitator200Response": ListAllRFQsForFacilitator200Response,
    "MEVReward": MEVReward,
    "MinedBlock": MinedBlock,
    "PresignedExitKey": PresignedExitKey,
    "PresignedExitKeyMessage": PresignedExitKeyMessage,
    "ProvideEscrowHashForRFQDocumentRequest": ProvideEscrowHashForRFQDocumentRequest,
    "Quote": Quote,
    "RFQBidFacilitator": RFQBidFacilitator,
    "RFQBids": RFQBids,
    "RFQDocumentBase": RFQDocumentBase,
    "RFQDocumentBaseUniqueEscrowVault": RFQDocumentBaseUniqueEscrowVault,
    "RFQDocumentBuyer": RFQDocumentBuyer,
    "RFQDocumentBuyerAllOfValidators": RFQDocumentBuyerAllOfValidators,
    "RFQDocumentFacilitator": RFQDocumentFacilitator,
    "RFQDocumentFacilitatorValidatorsInner": RFQDocumentFacilitatorValidatorsInner,
    "RFQDocumentSeller": RFQDocumentSeller,
    "RFQDocumentSellerAllOfValidators": RFQDocumentSellerAllOfValidators,
    "RFQDocumentUpdate": RFQDocumentUpdate,
    "RFQUpdatePayload": RFQUpdatePayload,
    "RegisterWithdrawalRecipientSettlementRequest": RegisterWithdrawalRecipientSettlementRequest,
    "SettlementSteps": SettlementSteps,
    "SmartContract": SmartContract,
    "SmartContractDetailed": SmartContractDetailed,
    "SmartContractDetailedStats": SmartContractDetailedStats,
    "SmartContractDetailedWhitelistedDepositorsInner": SmartContractDetailedWhitelistedDepositorsInner,
    "SubmittedQuote": SubmittedQuote,
    "Transaction": Transaction,
    "ValidatorInfo": ValidatorInfo,
    "ValidatorWithdrawal": ValidatorWithdrawal,
    "Wallet": Wallet,
    "WebHookLookupAnswer": WebHookLookupAnswer,
    "WebhookPayload": WebhookPayload,
    "WebhookPayloadData": WebhookPayloadData,
    "WebhookPayloadRFQAvailable": WebhookPayloadRFQAvailable,
    "WebhookPayloadRFQBidAccepted": WebhookPayloadRFQBidAccepted,
    "WebhookPayloadRFQBidAcceptedDetails": WebhookPayloadRFQBidAcceptedDetails,
    "WebhookPayloadRFQBidReceived": WebhookPayloadRFQBidReceived,
    "WebhookPayloadRFQBidReceivedDetails": WebhookPayloadRFQBidReceivedDetails,
    "WebhookPayloadRFQEscrowEvent": WebhookPayloadRFQEscrowEvent,
    "WebhookPayloadRFQEscrowEventDetails": WebhookPayloadRFQEscrowEventDetails,
    "WebhookPayloadRFQEscrowReleased": WebhookPayloadRFQEscrowReleased,
    "WebhookPayloadRFQEscrowReleasedDetails": WebhookPayloadRFQEscrowReleasedDetails,
    "WebhookPayloadRFQTransferProposalReceived": WebhookPayloadRFQTransferProposalReceived,
    "WebhookPayloadRFQTransferProposalReceivedDetails": WebhookPayloadRFQTransferProposalReceivedDetails,
    "WebhookPayloadRFQValidatorExited": WebhookPayloadRFQValidatorExited,
    "WebhookPayloadRFQValidatorExitedDetails": WebhookPayloadRFQValidatorExitedDetails,
    "WebhookPayloadRFQValidatorWithdrawalChange": WebhookPayloadRFQValidatorWithdrawalChange,
    "WebhookPayloadRFQValidatorWithdrawalChangeDetails": WebhookPayloadRFQValidatorWithdrawalChangeDetails,
    "WebhookPayloadRFQWithdrawalClaimable": WebhookPayloadRFQWithdrawalClaimable,
    "WebhookPayloadRFQWithdrawalClaimableDetails": WebhookPayloadRFQWithdrawalClaimableDetails,
    "WebhookRegistration": WebhookRegistration,
    "WebhookRegistrationDetails": WebhookRegistrationDetails,
    "WithdrawalClaimable": WithdrawalClaimable,
    "WithdrawalRecipientSettlement": WithdrawalRecipientSettlement,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class JWTAuth implements Authentication {
    private apiKey: string;
    private privateKey: string;

    constructor(apiKey: string, privateKey: string) {
        this.apiKey = apiKey;
        this.privateKey = privateKey;
    }

    public applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const url = new URL((requestOptions as any).uri).pathname
            const token = this.generateJwtToken(url, requestOptions.body || '');
            requestOptions.headers["Authorization"] = "Bearer " + token;
            requestOptions.headers["x-api-key"] = this.apiKey;
        }
    }

    private generateJwtToken(url: string, body: string): string {
        const iat = Math.floor(Date.now() / 1000);
        const exp = iat + 30; // Token expires in 30 seconds
        const payload = {
            iat: iat,
            exp: exp,
            url: url,
            body: Buffer.from(JSON.stringify(body)).toString('base64'),
            nonce: Math.floor(Math.random() * 99999999) + 1
        };
        return jwt.sign(payload, this.privateKey, { algorithm: 'RS256' });
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
