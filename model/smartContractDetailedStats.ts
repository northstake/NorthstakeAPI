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


export class SmartContractDetailedStats {
    /**
    * Number of pending deposits in ETH
    */
   'pendingDeposits': string;
    /**
    * Number of claimable withdrawals in ETH
    */
   'claimableWithdrawals': string;
    /**
    * Number of claimable rewards in ETH
    */
   'claimableRewards': string;
    /**
    * Total number of deposits in ETH
    */
   'totalDeposits': string;
    /**
    * Count of queued validators in ETH
    */
   'queuedValidatorCount': string;
    /**
    * Amount of ETH queued for validators in ETH
    */
   'queuedValidatorAmount': string;
    /**
    * Number of claimed withdrawals in ETH
    */
   'claimedWithdrawals': string;
    /**
    * Number of claimed rewards in ETH
    */
   'claimedRewards': string;
    /**
    * Total number of withdrawals in ETH
    */
   'totalWithdrawals': string;
    /**
    * Total number of rewards in ETH
    */
   'totalRewards': string;
    /**
    * Balance of the smart contract in ETH
    */
   'balance': string;
    /**
    * Number of signed exit proposals
    */
   'signedExitProposalCount': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pendingDeposits",
            "baseName": "pendingDeposits",
            "type": "string"
        },
        {
            "name": "claimableWithdrawals",
            "baseName": "claimableWithdrawals",
            "type": "string"
        },
        {
            "name": "claimableRewards",
            "baseName": "claimableRewards",
            "type": "string"
        },
        {
            "name": "totalDeposits",
            "baseName": "totalDeposits",
            "type": "string"
        },
        {
            "name": "queuedValidatorCount",
            "baseName": "queuedValidatorCount",
            "type": "string"
        },
        {
            "name": "queuedValidatorAmount",
            "baseName": "queuedValidatorAmount",
            "type": "string"
        },
        {
            "name": "claimedWithdrawals",
            "baseName": "claimedWithdrawals",
            "type": "string"
        },
        {
            "name": "claimedRewards",
            "baseName": "claimedRewards",
            "type": "string"
        },
        {
            "name": "totalWithdrawals",
            "baseName": "totalWithdrawals",
            "type": "string"
        },
        {
            "name": "totalRewards",
            "baseName": "totalRewards",
            "type": "string"
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "string"
        },
        {
            "name": "signedExitProposalCount",
            "baseName": "signedExitProposalCount",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SmartContractDetailedStats.attributeTypeMap;
    }
}

