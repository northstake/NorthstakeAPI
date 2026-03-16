import localVarRequest from 'request';
import * as jwt from 'jsonwebtoken';


export * from './abandonDashboardRequest';
export * from './acceptedQuote';
export * from './accountEntity';
export * from './addLinkedWalletRequest';
export * from './apiKey';
export * from './approveStETH';
export * from './approveWstETH';
export * from './asset';
export * from './burnShares';
export * from './burnStETH';
export * from './burnWstETH';
export * from './changeTier';
export * from './collectERC20FromVault';
export * from './consolidateValidators';
export * from './consolidateValidatorsErrorResponse';
export * from './consolidateValidatorsResponse';
export * from './createLidoStakingContractsRequest';
export * from './createVaultRequest';
export * from './dailyRewardSummaryStats';
export * from './errorResponse';
export * from './errorWithTransactionResponse';
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
export * from './fundVault';
export * from './generateApiKeyRequest';
export * from './getLazyOracleReportCallData200Response';
export * from './getLazyOracleReportCallData200ResponseDestructuredCalldata';
export * from './getLazyOracleReportData200Response';
export * from './getLazyOracleReportData200ResponseReportData';
export * from './getLidoTransactions200Response';
export * from './getOperatorGroup200Response';
export * from './getQuarantineInfo200Response';
export * from './getStETHPerWstETHRate200Response';
export * from './grantRole';
export * from './internalTransaction';
export * from './inviteMemberRequest';
export * from './lidoContracts';
export * from './lidoContractsDashboard';
export * from './lidoContractsStakingVault';
export * from './lidoStakingContracts';
export * from './lidoStakingContractsWithData';
export * from './lidoStakingContractsWithDataVaultData';
export * from './mintShares';
export * from './mintStETH';
export * from './mintWstETH';
export * from './organizationMember';
export * from './organizationNameResponse';
export * from './partialTransaction';
export * from './presignedExitKey';
export * from './presignedExitKeyMessage';
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
export * from './rebalanceVaultWithEther';
export * from './rebalanceVaultWithShares';
export * from './recoverERC20';
export * from './renameVaultRequest';
export * from './revokeRole';
export * from './settlementSteps';
export * from './stakeEthRequest';
export * from './stakeEthResponse';
export * from './stakeEthResponseDestructuredCallDataInner';
export * from './stakingRequest';
export * from './stakingRequestStatus';
export * from './supportedValidatorProvidersResponse';
export * from './transaction';
export * from './triggerValidatorWithdrawals';
export * from './unwrapWstETH';
export * from './updateLinkedWalletNameRequest';
export * from './updateMemberRoleRequest';
export * from './updateOrganizationNameRequest';
export * from './updateShareLimit';
export * from './validateConsolidationRequestsResponse';
export * from './validateConsolidationRequestsResponseConsolidationDetailsInner';
export * from './validatorDailyReward';
export * from './validatorInfo';
export * from './validatorKeyHolder';
export * from './validatorProvider';
export * from './validatorRewardRaw';
export * from './validatorRewardsDaily';
export * from './validatorRewardsDailyResponse';
export * from './validatorRewardsRaw';
export * from './validatorType';
export * from './vaultCreationStartResponse';
export * from './wallet';
export * from './webHookLookupAnswer';
export * from './webhookPayload';
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
export * from './withdrawFromVault';
export * from './withdrawalClaimable';
export * from './withdrawalRecipientSettlement';
export * from './wrapStETH';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AbandonDashboardRequest } from './abandonDashboardRequest';


import { AcceptedQuote } from './acceptedQuote';


import { AccountEntity } from './accountEntity';


import { AddLinkedWalletRequest } from './addLinkedWalletRequest';


import { ApiKey } from './apiKey';


import { ApproveStETH } from './approveStETH';


import { ApproveWstETH } from './approveWstETH';


import { Asset } from './asset';


import { BurnShares } from './burnShares';


import { BurnStETH } from './burnStETH';


import { BurnWstETH } from './burnWstETH';


import { ChangeTier } from './changeTier';


import { CollectERC20FromVault } from './collectERC20FromVault';


import { ConsolidateValidators } from './consolidateValidators';


import { ConsolidateValidatorsErrorResponse } from './consolidateValidatorsErrorResponse';


import { ConsolidateValidatorsResponse } from './consolidateValidatorsResponse';


import { CreateLidoStakingContractsRequest } from './createLidoStakingContractsRequest';


import { CreateVaultRequest } from './createVaultRequest';


import { DailyRewardSummaryStats } from './dailyRewardSummaryStats';


import { ErrorResponse } from './errorResponse';


import { ErrorWithTransactionResponse } from './errorWithTransactionResponse';


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


import { FundVault } from './fundVault';


import { GenerateApiKeyRequest } from './generateApiKeyRequest';


import { GetLazyOracleReportCallData200Response } from './getLazyOracleReportCallData200Response';


import { GetLazyOracleReportCallData200ResponseDestructuredCalldata } from './getLazyOracleReportCallData200ResponseDestructuredCalldata';


import { GetLazyOracleReportData200Response } from './getLazyOracleReportData200Response';


import { GetLazyOracleReportData200ResponseReportData } from './getLazyOracleReportData200ResponseReportData';


import { GetLidoTransactions200Response } from './getLidoTransactions200Response';


import { GetOperatorGroup200Response } from './getOperatorGroup200Response';


import { GetQuarantineInfo200Response } from './getQuarantineInfo200Response';


import { GetStETHPerWstETHRate200Response } from './getStETHPerWstETHRate200Response';


import { GrantRole } from './grantRole';


import { InternalTransaction } from './internalTransaction';


import { InviteMemberRequest } from './inviteMemberRequest';


import { LidoContracts } from './lidoContracts';


import { LidoContractsDashboard } from './lidoContractsDashboard';


import { LidoContractsStakingVault } from './lidoContractsStakingVault';


import { LidoStakingContracts } from './lidoStakingContracts';


import { LidoStakingContractsWithData } from './lidoStakingContractsWithData';


import { LidoStakingContractsWithDataVaultData } from './lidoStakingContractsWithDataVaultData';


import { MintShares } from './mintShares';


import { MintStETH } from './mintStETH';


import { MintWstETH } from './mintWstETH';


import { OrganizationMember } from './organizationMember';


import { OrganizationNameResponse } from './organizationNameResponse';


import { PartialTransaction } from './partialTransaction';


import { PresignedExitKey } from './presignedExitKey';


import { PresignedExitKeyMessage } from './presignedExitKeyMessage';


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


import { RebalanceVaultWithEther } from './rebalanceVaultWithEther';


import { RebalanceVaultWithShares } from './rebalanceVaultWithShares';


import { RecoverERC20 } from './recoverERC20';


import { RenameVaultRequest } from './renameVaultRequest';


import { RevokeRole } from './revokeRole';


import { SettlementSteps } from './settlementSteps';


import { StakeEthRequest } from './stakeEthRequest';


import { StakeEthResponse } from './stakeEthResponse';


import { StakeEthResponseDestructuredCallDataInner } from './stakeEthResponseDestructuredCallDataInner';


import { StakingRequest } from './stakingRequest';


import { StakingRequestStatus } from './stakingRequestStatus';


import { SupportedValidatorProvidersResponse } from './supportedValidatorProvidersResponse';


import { Transaction } from './transaction';


import { TriggerValidatorWithdrawals } from './triggerValidatorWithdrawals';


import { UnwrapWstETH } from './unwrapWstETH';


import { UpdateLinkedWalletNameRequest } from './updateLinkedWalletNameRequest';


import { UpdateMemberRoleRequest } from './updateMemberRoleRequest';


import { UpdateOrganizationNameRequest } from './updateOrganizationNameRequest';


import { UpdateShareLimit } from './updateShareLimit';


import { ValidateConsolidationRequestsResponse } from './validateConsolidationRequestsResponse';


import { ValidateConsolidationRequestsResponseConsolidationDetailsInner } from './validateConsolidationRequestsResponseConsolidationDetailsInner';


import { ValidatorDailyReward } from './validatorDailyReward';


import { ValidatorInfo } from './validatorInfo';


import { ValidatorKeyHolder } from './validatorKeyHolder';


import { ValidatorProvider } from './validatorProvider';


import { ValidatorRewardRaw } from './validatorRewardRaw';


import { ValidatorRewardsDaily } from './validatorRewardsDaily';


import { ValidatorRewardsDailyResponse } from './validatorRewardsDailyResponse';


import { ValidatorRewardsRaw } from './validatorRewardsRaw';


import { ValidatorType } from './validatorType';


import { VaultCreationStartResponse } from './vaultCreationStartResponse';


import { Wallet } from './wallet';


import { WebHookLookupAnswer } from './webHookLookupAnswer';


import { WebhookPayload } from './webhookPayload';


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


import { WithdrawFromVault } from './withdrawFromVault';


import { WithdrawalClaimable } from './withdrawalClaimable';


import { WithdrawalRecipientSettlement } from './withdrawalRecipientSettlement';


import { WrapStETH } from './wrapStETH';



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
    "AccountEntity.accountType": AccountEntity,
    "ApiKey.roles": ApiKey,
    "GenerateApiKeyRequest.keyRights": GenerateApiKeyRequest,
    "InviteMemberRequest.role": InviteMemberRequest,
    "LidoStakingContractsWithDataVaultData.vaultHubConnectionStatus": LidoStakingContractsWithDataVaultData,
    "OrganizationMember.role": OrganizationMember,
    "RFQDocumentFacilitator.status": RFQDocumentFacilitator,
    "UpdateMemberRoleRequest.role": UpdateMemberRoleRequest,
    "ValidatorInfo.asset": ValidatorInfo,
    "ValidatorInfo.status": ValidatorInfo,
    "ValidatorRewardRaw.rewardType": ValidatorRewardRaw,
    "ValidatorRewardsDaily.rewardType": ValidatorRewardsDaily,
};
let typeMap: {[index: string]: any} = {
    "AbandonDashboardRequest": AbandonDashboardRequest,
    "AcceptedQuote": AcceptedQuote,
    "AccountEntity": AccountEntity,
    "AddLinkedWalletRequest": AddLinkedWalletRequest,
    "ApiKey": ApiKey,
    "ApproveStETH": ApproveStETH,
    "ApproveWstETH": ApproveWstETH,
    "BurnShares": BurnShares,
    "BurnStETH": BurnStETH,
    "BurnWstETH": BurnWstETH,
    "ChangeTier": ChangeTier,
    "CollectERC20FromVault": CollectERC20FromVault,
    "ConsolidateValidators": ConsolidateValidators,
    "ConsolidateValidatorsErrorResponse": ConsolidateValidatorsErrorResponse,
    "ConsolidateValidatorsResponse": ConsolidateValidatorsResponse,
    "CreateLidoStakingContractsRequest": CreateLidoStakingContractsRequest,
    "CreateVaultRequest": CreateVaultRequest,
    "DailyRewardSummaryStats": DailyRewardSummaryStats,
    "ErrorResponse": ErrorResponse,
    "ErrorWithTransactionResponse": ErrorWithTransactionResponse,
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
    "FundVault": FundVault,
    "GenerateApiKeyRequest": GenerateApiKeyRequest,
    "GetLazyOracleReportCallData200Response": GetLazyOracleReportCallData200Response,
    "GetLazyOracleReportCallData200ResponseDestructuredCalldata": GetLazyOracleReportCallData200ResponseDestructuredCalldata,
    "GetLazyOracleReportData200Response": GetLazyOracleReportData200Response,
    "GetLazyOracleReportData200ResponseReportData": GetLazyOracleReportData200ResponseReportData,
    "GetLidoTransactions200Response": GetLidoTransactions200Response,
    "GetOperatorGroup200Response": GetOperatorGroup200Response,
    "GetQuarantineInfo200Response": GetQuarantineInfo200Response,
    "GetStETHPerWstETHRate200Response": GetStETHPerWstETHRate200Response,
    "GrantRole": GrantRole,
    "InternalTransaction": InternalTransaction,
    "InviteMemberRequest": InviteMemberRequest,
    "LidoContracts": LidoContracts,
    "LidoContractsDashboard": LidoContractsDashboard,
    "LidoContractsStakingVault": LidoContractsStakingVault,
    "LidoStakingContracts": LidoStakingContracts,
    "LidoStakingContractsWithData": LidoStakingContractsWithData,
    "LidoStakingContractsWithDataVaultData": LidoStakingContractsWithDataVaultData,
    "MintShares": MintShares,
    "MintStETH": MintStETH,
    "MintWstETH": MintWstETH,
    "OrganizationMember": OrganizationMember,
    "OrganizationNameResponse": OrganizationNameResponse,
    "PartialTransaction": PartialTransaction,
    "PresignedExitKey": PresignedExitKey,
    "PresignedExitKeyMessage": PresignedExitKeyMessage,
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
    "RebalanceVaultWithEther": RebalanceVaultWithEther,
    "RebalanceVaultWithShares": RebalanceVaultWithShares,
    "RecoverERC20": RecoverERC20,
    "RenameVaultRequest": RenameVaultRequest,
    "RevokeRole": RevokeRole,
    "SettlementSteps": SettlementSteps,
    "StakeEthRequest": StakeEthRequest,
    "StakeEthResponse": StakeEthResponse,
    "StakeEthResponseDestructuredCallDataInner": StakeEthResponseDestructuredCallDataInner,
    "StakingRequest": StakingRequest,
    "SupportedValidatorProvidersResponse": SupportedValidatorProvidersResponse,
    "Transaction": Transaction,
    "TriggerValidatorWithdrawals": TriggerValidatorWithdrawals,
    "UnwrapWstETH": UnwrapWstETH,
    "UpdateLinkedWalletNameRequest": UpdateLinkedWalletNameRequest,
    "UpdateMemberRoleRequest": UpdateMemberRoleRequest,
    "UpdateOrganizationNameRequest": UpdateOrganizationNameRequest,
    "UpdateShareLimit": UpdateShareLimit,
    "ValidateConsolidationRequestsResponse": ValidateConsolidationRequestsResponse,
    "ValidateConsolidationRequestsResponseConsolidationDetailsInner": ValidateConsolidationRequestsResponseConsolidationDetailsInner,
    "ValidatorDailyReward": ValidatorDailyReward,
    "ValidatorInfo": ValidatorInfo,
    "ValidatorRewardRaw": ValidatorRewardRaw,
    "ValidatorRewardsDaily": ValidatorRewardsDaily,
    "ValidatorRewardsDailyResponse": ValidatorRewardsDailyResponse,
    "ValidatorRewardsRaw": ValidatorRewardsRaw,
    "VaultCreationStartResponse": VaultCreationStartResponse,
    "Wallet": Wallet,
    "WebHookLookupAnswer": WebHookLookupAnswer,
    "WebhookPayload": WebhookPayload,
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
    "WithdrawFromVault": WithdrawFromVault,
    "WithdrawalClaimable": WithdrawalClaimable,
    "WithdrawalRecipientSettlement": WithdrawalRecipientSettlement,
    "WrapStETH": WrapStETH,
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
