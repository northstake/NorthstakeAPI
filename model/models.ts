import * as jwt from 'jsonwebtoken';
import * as querystring from 'querystring';
import * as nodePath from 'path';


export * from './abandonDashboardRequest';
export * from './acceptedQuote';
export * from './accountEntity';
export * from './activateValidatorsRequest';
export * from './activateValidatorsRequestValidatorsInner';
export * from './addLinkedWalletRequest';
export * from './allRoleMembersResponse';
export * from './allowListMutationRequest';
export * from './apiKey';
export * from './approveStETH';
export * from './approveWstETH';
export * from './asset';
export * from './burnShares';
export * from './burnStETH';
export * from './burnWstETH';
export * from './changeTier';
export * from './claimWithdrawalsRequest';
export * from './collectERC20FromVault';
export * from './consolidateValidators';
export * from './consolidateValidatorsErrorResponse';
export * from './consolidateValidatorsResponse';
export * from './convertLidoSharesToEthResponse';
export * from './createLidoStakingContractsRequest';
export * from './createSTVPoolFinishRequest';
export * from './createSTVPoolFinishRequestCommonPoolConfig';
export * from './createSTVPoolFinishRequestIntermediate';
export * from './createSTVPoolFinishRequestTimelockConfig';
export * from './createSTVPoolFinishRequestVaultConfig';
export * from './createSTVPoolRequest';
export * from './createSTVPoolRequestCommonPoolConfig';
export * from './createSTVPoolRequestTimelockConfig';
export * from './createSTVPoolRequestVaultConfig';
export * from './createVaultRequest';
export * from './createWebhookRequest';
export * from './dailyRewardSummaryStats';
export * from './depositAndMintSteth';
export * from './depositAndMintWsteth';
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
export * from './finalizeWithdrawalsRequest';
export * from './fundVault';
export * from './generateApiKeyRequest';
export * from './grantRole';
export * from './internalTransaction';
export * from './inviteMemberRequest';
export * from './lazyOracleReportCallDataResponse';
export * from './lazyOracleReportCallDataResponseDestructuredCalldata';
export * from './lazyOracleReportDataResponse';
export * from './lazyOracleReportDataResponseReportData';
export * from './lidoContracts';
export * from './lidoContractsDashboard';
export * from './lidoContractsPool';
export * from './lidoContractsStakingVault';
export * from './lidoContractsTimeLock';
export * from './lidoContractsWithdrawalQueue';
export * from './lidoStakingContracts';
export * from './lidoStakingContractsWithData';
export * from './lidoStakingContractsWithDataApr';
export * from './lidoStakingContractsWithDataAprHistoryInner';
export * from './lidoStakingContractsWithDataConfiguration';
export * from './lidoStakingContractsWithDataConfigurationRecoveryTransactionsInner';
export * from './lidoStakingContractsWithDataVaultData';
export * from './lidoStakingContractsWithDataVaultDataObligations';
export * from './lidoTransactionsResponse';
export * from './markAllNotificationsReadRequest';
export * from './markAllNotificationsReadResponse';
export * from './mintShares';
export * from './mintStETH';
export * from './mintWstETH';
export * from './notification';
export * from './notificationEventType';
export * from './notificationListResponse';
export * from './notificationUnreadCountResponse';
export * from './operatorGridChangeTier';
export * from './operatorGroupResponse';
export * from './organizationMember';
export * from './organizationNameResponse';
export * from './partialTransaction';
export * from './poolParticipantsResponse';
export * from './poolParticipantsResponseParticipantsInner';
export * from './poolParticipantsResponsePool';
export * from './poolPreviewResponse';
export * from './poolPreviewResponsePool';
export * from './poolStatsResponse';
export * from './poolStatsResponsePool';
export * from './poolStatsResponseStethPoolStats';
export * from './poolStethBurnPreviewResponse';
export * from './poolUserStatsHistoryResponse';
export * from './poolUserStatsHistoryResponseSeriesInner';
export * from './poolUserStatsHistoryResponseTotals';
export * from './poolUserStatsResponse';
export * from './poolUserStatsResponsePool';
export * from './poolUserStatsResponseStethUserStats';
export * from './predepositRequest';
export * from './predepositRequestDepositsInner';
export * from './predepositResponse';
export * from './presignedExitKey';
export * from './presignedExitKeyMessage';
export * from './quarantineInfoResponse';
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
export * from './rebalanceVaultWithEther';
export * from './rebalanceVaultWithShares';
export * from './recoverERC20';
export * from './renameVaultRequest';
export * from './requestWithdrawalRequest';
export * from './revokeRole';
export * from './roleAssignment';
export * from './sVMAutomationSettings';
export * from './setFeeRateRequest';
export * from './setFeeRecipientRequest';
export * from './settlementSteps';
export * from './simulateOnlyRequest';
export * from './stETHPerWstETHRateResponse';
export * from './stakeEthRequest';
export * from './stakeEthResponse';
export * from './stakeEthResponseDestructuredCallDataInner';
export * from './stakingRequest';
export * from './stakingRequestStatus';
export * from './supportedValidatorProvidersResponse';
export * from './timelockCancelRequest';
export * from './timelockDelayResponse';
export * from './timelockExecuteRequest';
export * from './timelockExecuteResponse';
export * from './timelockOperationItem';
export * from './timelockOperationsResponse';
export * from './timelockScheduleRequest';
export * from './timelockScheduleResponse';
export * from './transaction';
export * from './transactionResponse';
export * from './triggerValidatorWithdrawals';
export * from './unguaranteedDepositRequest';
export * from './unguaranteedDepositRequestDepositsInner';
export * from './unwrapWstETH';
export * from './updateApiKeyRequest';
export * from './updateLinkedWalletNameRequest';
export * from './updateMemberRoleRequest';
export * from './updateOrganizationNameRequest';
export * from './updateSVMAutomationSettingsRequest';
export * from './updateShareLimit';
export * from './updateWebhookRequest';
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
export * from './wallet';
export * from './webhook';
export * from './webhookDeliveryBody';
export * from './webhookEventBase';
export * from './webhookEventFundingReceived';
export * from './webhookEventFundingReceivedAllOfData';
export * from './webhookEventReportUpdateAvailable';
export * from './webhookEventReportUpdateAvailableAllOfData';
export * from './webhookEventValidatorActivated';
export * from './webhookEventValidatorActivatedAllOfData';
export * from './webhookEventValidatorExited';
export * from './webhookEventValidatorWithdrawalCompleted';
export * from './webhookEventValidatorWithdrawalCompletedAllOfData';
export * from './webhookEventWithdrawalClaimed';
export * from './webhookEventWithdrawalClaimedAllOfData';
export * from './webhookEventWithdrawalRequested';
export * from './webhookEventWithdrawalRequestedAllOfData';
export * from './webhookWithSecret';
export * from './withdrawFromVault';
export * from './withdrawalClaimable';
export * from './withdrawalQueueStatsResponse';
export * from './withdrawalQueueUserStatsResponse';
export * from './withdrawalQueueUserStatsResponseRequestsInner';
export * from './withdrawalRecipientSettlement';
export * from './withdrawalRequestsResponse';
export * from './withdrawalRequestsResponseRequestsInner';
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


import { ActivateValidatorsRequest } from './activateValidatorsRequest';


import { ActivateValidatorsRequestValidatorsInner } from './activateValidatorsRequestValidatorsInner';


import { AddLinkedWalletRequest } from './addLinkedWalletRequest';


import { AllRoleMembersResponse } from './allRoleMembersResponse';


import { AllowListMutationRequest } from './allowListMutationRequest';


import { ApiKey } from './apiKey';


import { ApproveStETH } from './approveStETH';


import { ApproveWstETH } from './approveWstETH';


import { Asset } from './asset';


import { BurnShares } from './burnShares';


import { BurnStETH } from './burnStETH';


import { BurnWstETH } from './burnWstETH';


import { ChangeTier } from './changeTier';


import { ClaimWithdrawalsRequest } from './claimWithdrawalsRequest';


import { CollectERC20FromVault } from './collectERC20FromVault';


import { ConsolidateValidators } from './consolidateValidators';


import { ConsolidateValidatorsErrorResponse } from './consolidateValidatorsErrorResponse';


import { ConsolidateValidatorsResponse } from './consolidateValidatorsResponse';


import { ConvertLidoSharesToEthResponse } from './convertLidoSharesToEthResponse';


import { CreateLidoStakingContractsRequest } from './createLidoStakingContractsRequest';


import { CreateSTVPoolFinishRequest } from './createSTVPoolFinishRequest';


import { CreateSTVPoolFinishRequestCommonPoolConfig } from './createSTVPoolFinishRequestCommonPoolConfig';


import { CreateSTVPoolFinishRequestIntermediate } from './createSTVPoolFinishRequestIntermediate';


import { CreateSTVPoolFinishRequestTimelockConfig } from './createSTVPoolFinishRequestTimelockConfig';


import { CreateSTVPoolFinishRequestVaultConfig } from './createSTVPoolFinishRequestVaultConfig';


import { CreateSTVPoolRequest } from './createSTVPoolRequest';


import { CreateSTVPoolRequestCommonPoolConfig } from './createSTVPoolRequestCommonPoolConfig';


import { CreateSTVPoolRequestTimelockConfig } from './createSTVPoolRequestTimelockConfig';


import { CreateSTVPoolRequestVaultConfig } from './createSTVPoolRequestVaultConfig';


import { CreateVaultRequest } from './createVaultRequest';


import { CreateWebhookRequest } from './createWebhookRequest';


import { DailyRewardSummaryStats } from './dailyRewardSummaryStats';


import { DepositAndMintSteth } from './depositAndMintSteth';


import { DepositAndMintWsteth } from './depositAndMintWsteth';


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


import { FinalizeWithdrawalsRequest } from './finalizeWithdrawalsRequest';


import { FundVault } from './fundVault';


import { GenerateApiKeyRequest } from './generateApiKeyRequest';


import { GrantRole } from './grantRole';


import { InternalTransaction } from './internalTransaction';


import { InviteMemberRequest } from './inviteMemberRequest';


import { LazyOracleReportCallDataResponse } from './lazyOracleReportCallDataResponse';


import { LazyOracleReportCallDataResponseDestructuredCalldata } from './lazyOracleReportCallDataResponseDestructuredCalldata';


import { LazyOracleReportDataResponse } from './lazyOracleReportDataResponse';


import { LazyOracleReportDataResponseReportData } from './lazyOracleReportDataResponseReportData';


import { LidoContracts } from './lidoContracts';


import { LidoContractsDashboard } from './lidoContractsDashboard';


import { LidoContractsPool } from './lidoContractsPool';


import { LidoContractsStakingVault } from './lidoContractsStakingVault';


import { LidoContractsTimeLock } from './lidoContractsTimeLock';


import { LidoContractsWithdrawalQueue } from './lidoContractsWithdrawalQueue';


import { LidoStakingContracts } from './lidoStakingContracts';


import { LidoStakingContractsWithData } from './lidoStakingContractsWithData';


import { LidoStakingContractsWithDataApr } from './lidoStakingContractsWithDataApr';


import { LidoStakingContractsWithDataAprHistoryInner } from './lidoStakingContractsWithDataAprHistoryInner';


import { LidoStakingContractsWithDataConfiguration } from './lidoStakingContractsWithDataConfiguration';


import { LidoStakingContractsWithDataConfigurationRecoveryTransactionsInner } from './lidoStakingContractsWithDataConfigurationRecoveryTransactionsInner';


import { LidoStakingContractsWithDataVaultData } from './lidoStakingContractsWithDataVaultData';


import { LidoStakingContractsWithDataVaultDataObligations } from './lidoStakingContractsWithDataVaultDataObligations';


import { LidoTransactionsResponse } from './lidoTransactionsResponse';


import { MarkAllNotificationsReadRequest } from './markAllNotificationsReadRequest';


import { MarkAllNotificationsReadResponse } from './markAllNotificationsReadResponse';


import { MintShares } from './mintShares';


import { MintStETH } from './mintStETH';


import { MintWstETH } from './mintWstETH';


import { Notification } from './notification';


import { NotificationEventType } from './notificationEventType';


import { NotificationListResponse } from './notificationListResponse';


import { NotificationUnreadCountResponse } from './notificationUnreadCountResponse';


import { OperatorGridChangeTier } from './operatorGridChangeTier';


import { OperatorGroupResponse } from './operatorGroupResponse';


import { OrganizationMember } from './organizationMember';


import { OrganizationNameResponse } from './organizationNameResponse';


import { PartialTransaction } from './partialTransaction';


import { PoolParticipantsResponse } from './poolParticipantsResponse';


import { PoolParticipantsResponseParticipantsInner } from './poolParticipantsResponseParticipantsInner';


import { PoolParticipantsResponsePool } from './poolParticipantsResponsePool';


import { PoolPreviewResponse } from './poolPreviewResponse';


import { PoolPreviewResponsePool } from './poolPreviewResponsePool';


import { PoolStatsResponse } from './poolStatsResponse';


import { PoolStatsResponsePool } from './poolStatsResponsePool';


import { PoolStatsResponseStethPoolStats } from './poolStatsResponseStethPoolStats';


import { PoolStethBurnPreviewResponse } from './poolStethBurnPreviewResponse';


import { PoolUserStatsHistoryResponse } from './poolUserStatsHistoryResponse';


import { PoolUserStatsHistoryResponseSeriesInner } from './poolUserStatsHistoryResponseSeriesInner';


import { PoolUserStatsHistoryResponseTotals } from './poolUserStatsHistoryResponseTotals';


import { PoolUserStatsResponse } from './poolUserStatsResponse';


import { PoolUserStatsResponsePool } from './poolUserStatsResponsePool';


import { PoolUserStatsResponseStethUserStats } from './poolUserStatsResponseStethUserStats';


import { PredepositRequest } from './predepositRequest';


import { PredepositRequestDepositsInner } from './predepositRequestDepositsInner';


import { PredepositResponse } from './predepositResponse';


import { PresignedExitKey } from './presignedExitKey';


import { PresignedExitKeyMessage } from './presignedExitKeyMessage';


import { QuarantineInfoResponse } from './quarantineInfoResponse';


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


import { RebalanceVaultWithEther } from './rebalanceVaultWithEther';


import { RebalanceVaultWithShares } from './rebalanceVaultWithShares';


import { RecoverERC20 } from './recoverERC20';


import { RenameVaultRequest } from './renameVaultRequest';


import { RequestWithdrawalRequest } from './requestWithdrawalRequest';


import { RevokeRole } from './revokeRole';


import { RoleAssignment } from './roleAssignment';


import { SVMAutomationSettings } from './sVMAutomationSettings';


import { SetFeeRateRequest } from './setFeeRateRequest';


import { SetFeeRecipientRequest } from './setFeeRecipientRequest';


import { SettlementSteps } from './settlementSteps';


import { SimulateOnlyRequest } from './simulateOnlyRequest';


import { StETHPerWstETHRateResponse } from './stETHPerWstETHRateResponse';


import { StakeEthRequest } from './stakeEthRequest';


import { StakeEthResponse } from './stakeEthResponse';


import { StakeEthResponseDestructuredCallDataInner } from './stakeEthResponseDestructuredCallDataInner';


import { StakingRequest } from './stakingRequest';


import { StakingRequestStatus } from './stakingRequestStatus';


import { SupportedValidatorProvidersResponse } from './supportedValidatorProvidersResponse';


import { TimelockCancelRequest } from './timelockCancelRequest';


import { TimelockDelayResponse } from './timelockDelayResponse';


import { TimelockExecuteRequest } from './timelockExecuteRequest';


import { TimelockExecuteResponse } from './timelockExecuteResponse';


import { TimelockOperationItem } from './timelockOperationItem';


import { TimelockOperationsResponse } from './timelockOperationsResponse';


import { TimelockScheduleRequest } from './timelockScheduleRequest';


import { TimelockScheduleResponse } from './timelockScheduleResponse';


import { Transaction } from './transaction';


import { TransactionResponse } from './transactionResponse';


import { TriggerValidatorWithdrawals } from './triggerValidatorWithdrawals';


import { UnguaranteedDepositRequest } from './unguaranteedDepositRequest';


import { UnguaranteedDepositRequestDepositsInner } from './unguaranteedDepositRequestDepositsInner';


import { UnwrapWstETH } from './unwrapWstETH';


import { UpdateApiKeyRequest } from './updateApiKeyRequest';


import { UpdateLinkedWalletNameRequest } from './updateLinkedWalletNameRequest';


import { UpdateMemberRoleRequest } from './updateMemberRoleRequest';


import { UpdateOrganizationNameRequest } from './updateOrganizationNameRequest';


import { UpdateSVMAutomationSettingsRequest } from './updateSVMAutomationSettingsRequest';


import { UpdateShareLimit } from './updateShareLimit';


import { UpdateWebhookRequest } from './updateWebhookRequest';


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


import { Wallet } from './wallet';


import { Webhook } from './webhook';


import { WebhookDeliveryBody } from './webhookDeliveryBody';


import { WebhookEventBase } from './webhookEventBase';


import { WebhookEventFundingReceived } from './webhookEventFundingReceived';


import { WebhookEventFundingReceivedAllOfData } from './webhookEventFundingReceivedAllOfData';


import { WebhookEventReportUpdateAvailable } from './webhookEventReportUpdateAvailable';


import { WebhookEventReportUpdateAvailableAllOfData } from './webhookEventReportUpdateAvailableAllOfData';


import { WebhookEventValidatorActivated } from './webhookEventValidatorActivated';


import { WebhookEventValidatorActivatedAllOfData } from './webhookEventValidatorActivatedAllOfData';


import { WebhookEventValidatorExited } from './webhookEventValidatorExited';


import { WebhookEventValidatorWithdrawalCompleted } from './webhookEventValidatorWithdrawalCompleted';


import { WebhookEventValidatorWithdrawalCompletedAllOfData } from './webhookEventValidatorWithdrawalCompletedAllOfData';


import { WebhookEventWithdrawalClaimed } from './webhookEventWithdrawalClaimed';


import { WebhookEventWithdrawalClaimedAllOfData } from './webhookEventWithdrawalClaimedAllOfData';


import { WebhookEventWithdrawalRequested } from './webhookEventWithdrawalRequested';


import { WebhookEventWithdrawalRequestedAllOfData } from './webhookEventWithdrawalRequestedAllOfData';


import { WebhookWithSecret } from './webhookWithSecret';


import { WithdrawFromVault } from './withdrawFromVault';


import { WithdrawalClaimable } from './withdrawalClaimable';


import { WithdrawalQueueStatsResponse } from './withdrawalQueueStatsResponse';


import { WithdrawalQueueUserStatsResponse } from './withdrawalQueueUserStatsResponse';


import { WithdrawalQueueUserStatsResponseRequestsInner } from './withdrawalQueueUserStatsResponseRequestsInner';


import { WithdrawalRecipientSettlement } from './withdrawalRecipientSettlement';


import { WithdrawalRequestsResponse } from './withdrawalRequestsResponse';


import { WithdrawalRequestsResponseRequestsInner } from './withdrawalRequestsResponseRequestsInner';


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
    "CreateSTVPoolFinishRequest.poolType": CreateSTVPoolFinishRequest,
    "CreateSTVPoolRequest.poolType": CreateSTVPoolRequest,
    "GenerateApiKeyRequest.keyRights": GenerateApiKeyRequest,
    "InviteMemberRequest.role": InviteMemberRequest,
    "LidoContracts.vaultType": LidoContracts,
    "LidoContractsPool.type": LidoContractsPool,
    "LidoStakingContractsWithDataConfiguration.status": LidoStakingContractsWithDataConfiguration,
    "LidoStakingContractsWithDataVaultData.vaultHubConnectionStatus": LidoStakingContractsWithDataVaultData,
    "Notification.severity": Notification,
    "OrganizationMember.role": OrganizationMember,
    "RFQDocumentFacilitator.status": RFQDocumentFacilitator,
    "RoleAssignment.role": RoleAssignment,
    "RoleAssignment.target": RoleAssignment,
    "TimelockExecuteRequest.operation": TimelockExecuteRequest,
    "TimelockOperationItem.status": TimelockOperationItem,
    "TimelockScheduleRequest.operation": TimelockScheduleRequest,
    "UpdateApiKeyRequest.keyRights": UpdateApiKeyRequest,
    "UpdateMemberRoleRequest.role": UpdateMemberRoleRequest,
    "ValidatorInfo.asset": ValidatorInfo,
    "ValidatorInfo.status": ValidatorInfo,
    "ValidatorInfo.pdgState": ValidatorInfo,
    "ValidatorRewardRaw.rewardType": ValidatorRewardRaw,
    "ValidatorRewardsDaily.rewardType": ValidatorRewardsDaily,
    "WithdrawalRequestsResponseRequestsInner.status": WithdrawalRequestsResponseRequestsInner,
};
let typeMap: {[index: string]: any} = {
    "AbandonDashboardRequest": AbandonDashboardRequest,
    "AcceptedQuote": AcceptedQuote,
    "AccountEntity": AccountEntity,
    "ActivateValidatorsRequest": ActivateValidatorsRequest,
    "ActivateValidatorsRequestValidatorsInner": ActivateValidatorsRequestValidatorsInner,
    "AddLinkedWalletRequest": AddLinkedWalletRequest,
    "AllRoleMembersResponse": AllRoleMembersResponse,
    "AllowListMutationRequest": AllowListMutationRequest,
    "ApiKey": ApiKey,
    "ApproveStETH": ApproveStETH,
    "ApproveWstETH": ApproveWstETH,
    "BurnShares": BurnShares,
    "BurnStETH": BurnStETH,
    "BurnWstETH": BurnWstETH,
    "ChangeTier": ChangeTier,
    "ClaimWithdrawalsRequest": ClaimWithdrawalsRequest,
    "CollectERC20FromVault": CollectERC20FromVault,
    "ConsolidateValidators": ConsolidateValidators,
    "ConsolidateValidatorsErrorResponse": ConsolidateValidatorsErrorResponse,
    "ConsolidateValidatorsResponse": ConsolidateValidatorsResponse,
    "ConvertLidoSharesToEthResponse": ConvertLidoSharesToEthResponse,
    "CreateLidoStakingContractsRequest": CreateLidoStakingContractsRequest,
    "CreateSTVPoolFinishRequest": CreateSTVPoolFinishRequest,
    "CreateSTVPoolFinishRequestCommonPoolConfig": CreateSTVPoolFinishRequestCommonPoolConfig,
    "CreateSTVPoolFinishRequestIntermediate": CreateSTVPoolFinishRequestIntermediate,
    "CreateSTVPoolFinishRequestTimelockConfig": CreateSTVPoolFinishRequestTimelockConfig,
    "CreateSTVPoolFinishRequestVaultConfig": CreateSTVPoolFinishRequestVaultConfig,
    "CreateSTVPoolRequest": CreateSTVPoolRequest,
    "CreateSTVPoolRequestCommonPoolConfig": CreateSTVPoolRequestCommonPoolConfig,
    "CreateSTVPoolRequestTimelockConfig": CreateSTVPoolRequestTimelockConfig,
    "CreateSTVPoolRequestVaultConfig": CreateSTVPoolRequestVaultConfig,
    "CreateVaultRequest": CreateVaultRequest,
    "CreateWebhookRequest": CreateWebhookRequest,
    "DailyRewardSummaryStats": DailyRewardSummaryStats,
    "DepositAndMintSteth": DepositAndMintSteth,
    "DepositAndMintWsteth": DepositAndMintWsteth,
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
    "FinalizeWithdrawalsRequest": FinalizeWithdrawalsRequest,
    "FundVault": FundVault,
    "GenerateApiKeyRequest": GenerateApiKeyRequest,
    "GrantRole": GrantRole,
    "InternalTransaction": InternalTransaction,
    "InviteMemberRequest": InviteMemberRequest,
    "LazyOracleReportCallDataResponse": LazyOracleReportCallDataResponse,
    "LazyOracleReportCallDataResponseDestructuredCalldata": LazyOracleReportCallDataResponseDestructuredCalldata,
    "LazyOracleReportDataResponse": LazyOracleReportDataResponse,
    "LazyOracleReportDataResponseReportData": LazyOracleReportDataResponseReportData,
    "LidoContracts": LidoContracts,
    "LidoContractsDashboard": LidoContractsDashboard,
    "LidoContractsPool": LidoContractsPool,
    "LidoContractsStakingVault": LidoContractsStakingVault,
    "LidoContractsTimeLock": LidoContractsTimeLock,
    "LidoContractsWithdrawalQueue": LidoContractsWithdrawalQueue,
    "LidoStakingContracts": LidoStakingContracts,
    "LidoStakingContractsWithData": LidoStakingContractsWithData,
    "LidoStakingContractsWithDataApr": LidoStakingContractsWithDataApr,
    "LidoStakingContractsWithDataAprHistoryInner": LidoStakingContractsWithDataAprHistoryInner,
    "LidoStakingContractsWithDataConfiguration": LidoStakingContractsWithDataConfiguration,
    "LidoStakingContractsWithDataConfigurationRecoveryTransactionsInner": LidoStakingContractsWithDataConfigurationRecoveryTransactionsInner,
    "LidoStakingContractsWithDataVaultData": LidoStakingContractsWithDataVaultData,
    "LidoStakingContractsWithDataVaultDataObligations": LidoStakingContractsWithDataVaultDataObligations,
    "LidoTransactionsResponse": LidoTransactionsResponse,
    "MarkAllNotificationsReadRequest": MarkAllNotificationsReadRequest,
    "MarkAllNotificationsReadResponse": MarkAllNotificationsReadResponse,
    "MintShares": MintShares,
    "MintStETH": MintStETH,
    "MintWstETH": MintWstETH,
    "Notification": Notification,
    "NotificationListResponse": NotificationListResponse,
    "NotificationUnreadCountResponse": NotificationUnreadCountResponse,
    "OperatorGridChangeTier": OperatorGridChangeTier,
    "OperatorGroupResponse": OperatorGroupResponse,
    "OrganizationMember": OrganizationMember,
    "OrganizationNameResponse": OrganizationNameResponse,
    "PartialTransaction": PartialTransaction,
    "PoolParticipantsResponse": PoolParticipantsResponse,
    "PoolParticipantsResponseParticipantsInner": PoolParticipantsResponseParticipantsInner,
    "PoolParticipantsResponsePool": PoolParticipantsResponsePool,
    "PoolPreviewResponse": PoolPreviewResponse,
    "PoolPreviewResponsePool": PoolPreviewResponsePool,
    "PoolStatsResponse": PoolStatsResponse,
    "PoolStatsResponsePool": PoolStatsResponsePool,
    "PoolStatsResponseStethPoolStats": PoolStatsResponseStethPoolStats,
    "PoolStethBurnPreviewResponse": PoolStethBurnPreviewResponse,
    "PoolUserStatsHistoryResponse": PoolUserStatsHistoryResponse,
    "PoolUserStatsHistoryResponseSeriesInner": PoolUserStatsHistoryResponseSeriesInner,
    "PoolUserStatsHistoryResponseTotals": PoolUserStatsHistoryResponseTotals,
    "PoolUserStatsResponse": PoolUserStatsResponse,
    "PoolUserStatsResponsePool": PoolUserStatsResponsePool,
    "PoolUserStatsResponseStethUserStats": PoolUserStatsResponseStethUserStats,
    "PredepositRequest": PredepositRequest,
    "PredepositRequestDepositsInner": PredepositRequestDepositsInner,
    "PredepositResponse": PredepositResponse,
    "PresignedExitKey": PresignedExitKey,
    "PresignedExitKeyMessage": PresignedExitKeyMessage,
    "QuarantineInfoResponse": QuarantineInfoResponse,
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
    "RequestWithdrawalRequest": RequestWithdrawalRequest,
    "RevokeRole": RevokeRole,
    "RoleAssignment": RoleAssignment,
    "SVMAutomationSettings": SVMAutomationSettings,
    "SetFeeRateRequest": SetFeeRateRequest,
    "SetFeeRecipientRequest": SetFeeRecipientRequest,
    "SettlementSteps": SettlementSteps,
    "SimulateOnlyRequest": SimulateOnlyRequest,
    "StETHPerWstETHRateResponse": StETHPerWstETHRateResponse,
    "StakeEthRequest": StakeEthRequest,
    "StakeEthResponse": StakeEthResponse,
    "StakeEthResponseDestructuredCallDataInner": StakeEthResponseDestructuredCallDataInner,
    "StakingRequest": StakingRequest,
    "SupportedValidatorProvidersResponse": SupportedValidatorProvidersResponse,
    "TimelockCancelRequest": TimelockCancelRequest,
    "TimelockDelayResponse": TimelockDelayResponse,
    "TimelockExecuteRequest": TimelockExecuteRequest,
    "TimelockExecuteResponse": TimelockExecuteResponse,
    "TimelockOperationItem": TimelockOperationItem,
    "TimelockOperationsResponse": TimelockOperationsResponse,
    "TimelockScheduleRequest": TimelockScheduleRequest,
    "TimelockScheduleResponse": TimelockScheduleResponse,
    "Transaction": Transaction,
    "TransactionResponse": TransactionResponse,
    "TriggerValidatorWithdrawals": TriggerValidatorWithdrawals,
    "UnguaranteedDepositRequest": UnguaranteedDepositRequest,
    "UnguaranteedDepositRequestDepositsInner": UnguaranteedDepositRequestDepositsInner,
    "UnwrapWstETH": UnwrapWstETH,
    "UpdateApiKeyRequest": UpdateApiKeyRequest,
    "UpdateLinkedWalletNameRequest": UpdateLinkedWalletNameRequest,
    "UpdateMemberRoleRequest": UpdateMemberRoleRequest,
    "UpdateOrganizationNameRequest": UpdateOrganizationNameRequest,
    "UpdateSVMAutomationSettingsRequest": UpdateSVMAutomationSettingsRequest,
    "UpdateShareLimit": UpdateShareLimit,
    "UpdateWebhookRequest": UpdateWebhookRequest,
    "ValidateConsolidationRequestsResponse": ValidateConsolidationRequestsResponse,
    "ValidateConsolidationRequestsResponseConsolidationDetailsInner": ValidateConsolidationRequestsResponseConsolidationDetailsInner,
    "ValidatorDailyReward": ValidatorDailyReward,
    "ValidatorInfo": ValidatorInfo,
    "ValidatorRewardRaw": ValidatorRewardRaw,
    "ValidatorRewardsDaily": ValidatorRewardsDaily,
    "ValidatorRewardsDailyResponse": ValidatorRewardsDailyResponse,
    "ValidatorRewardsRaw": ValidatorRewardsRaw,
    "Wallet": Wallet,
    "Webhook": Webhook,
    "WebhookDeliveryBody": WebhookDeliveryBody,
    "WebhookEventBase": WebhookEventBase,
    "WebhookEventFundingReceived": WebhookEventFundingReceived,
    "WebhookEventFundingReceivedAllOfData": WebhookEventFundingReceivedAllOfData,
    "WebhookEventReportUpdateAvailable": WebhookEventReportUpdateAvailable,
    "WebhookEventReportUpdateAvailableAllOfData": WebhookEventReportUpdateAvailableAllOfData,
    "WebhookEventValidatorActivated": WebhookEventValidatorActivated,
    "WebhookEventValidatorActivatedAllOfData": WebhookEventValidatorActivatedAllOfData,
    "WebhookEventValidatorExited": WebhookEventValidatorExited,
    "WebhookEventValidatorWithdrawalCompleted": WebhookEventValidatorWithdrawalCompleted,
    "WebhookEventValidatorWithdrawalCompletedAllOfData": WebhookEventValidatorWithdrawalCompletedAllOfData,
    "WebhookEventWithdrawalClaimed": WebhookEventWithdrawalClaimed,
    "WebhookEventWithdrawalClaimedAllOfData": WebhookEventWithdrawalClaimedAllOfData,
    "WebhookEventWithdrawalRequested": WebhookEventWithdrawalRequested,
    "WebhookEventWithdrawalRequestedAllOfData": WebhookEventWithdrawalRequestedAllOfData,
    "WebhookWithSecret": WebhookWithSecret,
    "WithdrawFromVault": WithdrawFromVault,
    "WithdrawalClaimable": WithdrawalClaimable,
    "WithdrawalQueueStatsResponse": WithdrawalQueueStatsResponse,
    "WithdrawalQueueUserStatsResponse": WithdrawalQueueUserStatsResponse,
    "WithdrawalQueueUserStatsResponseRequestsInner": WithdrawalQueueUserStatsResponseRequestsInner,
    "WithdrawalRecipientSettlement": WithdrawalRecipientSettlement,
    "WithdrawalRequestsResponse": WithdrawalRequestsResponse,
    "WithdrawalRequestsResponseRequestsInner": WithdrawalRequestsResponseRequestsInner,
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

// ===============================================
// HTTP layer (built on Node's global fetch, Node >= 18).
// Replaces the deprecated `request` library. RequestOptions keeps the
// field names of request.Options that this SDK, its auth classes and
// interceptors use, so existing interceptors keep working.
// ===============================================

export interface RequestOptions {
    method?: string;
    /** Absolute URL without query string; query parameters go in `qs`. */
    uri: string;
    /** Query parameters. Serialized like `request` did (qs-style `a[0]=x` arrays, or `a=x&a=y` when useQuerystring is true). */
    qs: { [key: string]: any };
    headers: { [name: string]: any };
    useQuerystring?: boolean;
    /** When true the body is JSON-encoded and the response is parsed as JSON (falls back to text). */
    json?: boolean;
    /** `null` returns the response body as a Buffer. */
    encoding?: string | null;
    body?: any;
    /** application/x-www-form-urlencoded body. */
    form?: { [key: string]: any } | string;
    /** multipart/form-data body. Values may be strings, Buffers, fs.ReadStreams or RequestDetailedFile objects. */
    formData?: { [key: string]: any };
    auth?: { username?: string; password?: string; user?: string; pass?: string; bearer?: string | (() => string) };
    /** Request timeout in milliseconds. */
    timeout?: number;
    /** Optional AbortSignal (not available in `request`). */
    signal?: AbortSignal;
    [key: string]: any;
}

/**
 * Minimal stand-in for http.IncomingMessage. `headers` is a plain object with
 * lower-cased keys (set-cookie is an array, other repeated headers are joined with ', ').
 */
export interface ResponseLike {
    statusCode: number;
    statusMessage: string;
    headers: { [name: string]: string | string[] };
    url: string;
}

function encodeRfc3986(str: string): string {
    return encodeURIComponent(str).replace(/[!'()*]/g, (c) => '%' + c.charCodeAt(0).toString(16).toUpperCase());
}

// Same output as the `qs` package's default stringify (as used by `request`).
function stringifyQs(value: any, prefix: string, out: string[]): void {
    if (value === undefined) {
        return;
    }
    if (value === null) {
        out.push(encodeRfc3986(prefix) + '=');
    } else if (value instanceof Date) {
        out.push(encodeRfc3986(prefix) + '=' + encodeRfc3986(value.toISOString()));
    } else if (Array.isArray(value)) {
        value.forEach((v, i) => stringifyQs(v, prefix + '[' + i + ']', out));
    } else if (typeof value === 'object' && !Buffer.isBuffer(value)) {
        Object.keys(value).forEach((k) => stringifyQs(value[k], prefix + '[' + k + ']', out));
    } else {
        out.push(encodeRfc3986(prefix) + '=' + encodeRfc3986(String(value)));
    }
}

export function buildQueryString(params: { [key: string]: any } | undefined, useQuerystring?: boolean): string {
    if (!params) {
        return '';
    }
    if (useQuerystring) {
        const defined: { [key: string]: any } = {};
        Object.keys(params).forEach((k) => {
            if (params[k] !== undefined) {
                defined[k] = params[k];
            }
        });
        return querystring.stringify(defined).replace(/[!'()*]/g, (c) => '%' + c.charCodeAt(0).toString(16).toUpperCase());
    }
    const out: string[] = [];
    Object.keys(params).forEach((k) => stringifyQs(params[k], k, out));
    return out.join('&');
}

function setHeader(headers: { [name: string]: string }, name: string, value: string): void {
    const lower = name.toLowerCase();
    Object.keys(headers).forEach((k) => {
        if (k.toLowerCase() === lower) {
            delete headers[k];
        }
    });
    headers[name] = value;
}

function hasHeader(headers: { [name: string]: string }, name: string): boolean {
    const lower = name.toLowerCase();
    return Object.keys(headers).some((k) => k.toLowerCase() === lower);
}

async function readStream(stream: NodeJS.ReadableStream): Promise<Buffer> {
    const chunks: Buffer[] = [];
    for await (const chunk of stream as any) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }
    return Buffer.concat(chunks);
}

async function toFormData(params: { [key: string]: any }): Promise<any> {
    const formData = new FormData();
    for (const key of Object.keys(params)) {
        const values = Array.isArray(params[key]) ? params[key] : [params[key]];
        for (const item of values) {
            if (item === undefined || item === null) {
                continue;
            }
            if (Buffer.isBuffer(item)) {
                formData.append(key, new Blob([new Uint8Array(item)]), key);
            } else if (item instanceof fs.ReadStream) {
                formData.append(key, new Blob([new Uint8Array(await readStream(item))]), nodePath.basename(String(item.path)));
            } else if (typeof item === 'object' && item.value !== undefined) {
                const detailed = item as RequestDetailedFile;
                const blob = new Blob([new Uint8Array(detailed.value)], { type: detailed.options?.contentType || '' });
                formData.append(key, blob, detailed.options?.filename || key);
            } else {
                formData.append(key, String(item));
            }
        }
    }
    return formData;
}

/**
 * Performs the HTTP call described by `options` using the global fetch.
 * Resolves for every HTTP status (status handling is up to the caller) and
 * rejects only on network errors / timeouts. For network errors the underlying
 * system error (e.g. ECONNREFUSED) is surfaced instead of fetch's generic TypeError.
 */
export async function sendRequest(options: RequestOptions): Promise<{ response: ResponseLike; body: any }> {
    let url = options.uri || (options as any).url;
    const query = buildQueryString(options.qs, options.useQuerystring);
    if (query) {
        url += (url.indexOf('?') >= 0 ? '&' : '?') + query;
    }

    const headers: { [name: string]: string } = {};
    Object.keys(options.headers || {}).forEach((k) => {
        const v = options.headers[k];
        if (v !== undefined && v !== null) {
            headers[k] = Array.isArray(v) ? v.join(', ') : String(v);
        }
    });

    if (options.auth) {
        const a = options.auth;
        if (a.bearer !== undefined) {
            setHeader(headers, 'Authorization', 'Bearer ' + (typeof a.bearer === 'function' ? a.bearer() : a.bearer));
        } else {
            const user = a.user !== undefined ? a.user : a.username;
            const pass = a.pass !== undefined ? a.pass : a.password;
            setHeader(headers, 'Authorization', 'Basic ' + Buffer.from((user || '') + ':' + (pass || '')).toString('base64'));
        }
    }

    if (options.json && !hasHeader(headers, 'accept')) {
        headers['accept'] = 'application/json';
    }

    let body: any = undefined;
    if (options.formData && Object.keys(options.formData).length) {
        body = await toFormData(options.formData);
        // fetch sets multipart/form-data with the boundary itself
        Object.keys(headers).forEach((k) => {
            if (k.toLowerCase() === 'content-type') {
                delete headers[k];
            }
        });
    } else if (options.form !== undefined) {
        body = typeof options.form === 'string' ? options.form : buildQueryString(options.form);
        if (!hasHeader(headers, 'content-type')) {
            headers['content-type'] = 'application/x-www-form-urlencoded';
        }
    } else if (options.body !== undefined) {
        const contentType = Object.keys(headers).filter((k) => k.toLowerCase() === 'content-type').map((k) => headers[k])[0] || '';
        if (options.json) {
            body = /^application\/x-www-form-urlencoded\b/.test(contentType) ? buildQueryString(options.body) : JSON.stringify(options.body);
            if (!contentType) {
                headers['content-type'] = 'application/json';
            }
        } else {
            body = options.body;
        }
    }

    let signal: AbortSignal | undefined = options.signal;
    if (options.timeout && options.timeout > 0) {
        const timeoutSignal = AbortSignal.timeout(options.timeout);
        signal = signal && (AbortSignal as any).any ? (AbortSignal as any).any([signal, timeoutSignal]) : timeoutSignal;
    }

    let res: any;
    try {
        res = await fetch(url, {
            method: (options.method || 'GET').toUpperCase(),
            headers: headers,
            body: body,
            signal: signal,
        } as any);
    } catch (err: any) {
        if (err && err.name === 'TimeoutError') {
            // mirror `request`'s timeout error shape (code ETIMEDOUT)
            const timeoutError: any = new Error('ETIMEDOUT');
            timeoutError.code = 'ETIMEDOUT';
            timeoutError.cause = err;
            throw timeoutError;
        }
        // fetch wraps socket errors in TypeError('fetch failed'); surface the original error like `request` did
        throw err && err.name === 'TypeError' && err.cause instanceof Error ? err.cause : err;
    }

    const responseHeaders: { [name: string]: string | string[] } = {};
    res.headers.forEach((value: string, name: string) => {
        responseHeaders[name.toLowerCase()] = value;
    });
    if (typeof res.headers.getSetCookie === 'function') {
        const cookies: string[] = res.headers.getSetCookie();
        if (cookies.length) {
            responseHeaders['set-cookie'] = cookies;
        }
    }
    const response: ResponseLike = {
        statusCode: res.status,
        statusMessage: res.statusText,
        headers: responseHeaders,
        url: res.url,
    };

    let responseBody: any;
    if (options.encoding === null) {
        responseBody = Buffer.from(await res.arrayBuffer());
    } else {
        let text: string = await res.text();
        if (text.charCodeAt(0) === 0xfeff) {
            text = text.substring(1);
        }
        responseBody = text;
        if (options.json) {
            if (text === '') {
                responseBody = undefined;
            } else {
                try {
                    responseBody = JSON.parse(text);
                } catch (e) {
                    // not JSON: keep the text, as `request` did
                }
            }
        }
    }
    return { response: response, body: responseBody };
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: RequestOptions): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: RequestOptions): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: RequestOptions): void {
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

    applyToRequest(requestOptions: RequestOptions): void {
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

    applyToRequest(requestOptions: RequestOptions): void {
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

    public applyToRequest(requestOptions: RequestOptions): void {
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

    applyToRequest(_: RequestOptions): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: RequestOptions) => (Promise<void> | void);
