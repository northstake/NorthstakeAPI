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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { ErrorResponse } from '../model/errorResponse';
import { GetWithdrawalsResponse } from '../model/getWithdrawalsResponse';
import { PresignedExitKey } from '../model/presignedExitKey';
import { ValidatorInfo } from '../model/validatorInfo';
import { ValidatorKeyHolder } from '../model/validatorKeyHolder';
import { ValidatorType } from '../model/validatorType';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth, JWTAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.northstake.dk/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ValidatorsApiApiKeys {
    ApiKeyAuth,
}


// If vendorExtensions.x-packageParams is true, use a single object to pass parameters
export interface ValidatorsApiParams {
    startDate?: Date;
    endDate?: Date;
    page?: number;
    limit?: number;
    validatorIndices?: string;
}

export class ValidatorsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new JWTAuth('your_api_key', 'your_private_key'),
        'bearerTokenAuth': new HttpBearerAuth(),
        'ApiKeyAuth': new ApiKeyAuth('header', 'x-api-key'),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: ValidatorsApiApiKeys, value: string) {
        (this.authentications as any)[ValidatorsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.bearerTokenAuth.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @summary Get presigned exit key for a validator
     * @param validatorIndex Validator index to get the presigned exit key for
     * @param epoch Epoch to get the presigned exit key for, defaults to 1
     */

   



   public async getPresignedExitKey (validatorIndex: number, epoch?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ body: PresignedExitKey, status: number }> {

        const localVarPath = this.basePath + '/validators/{validator_index}/presignedExitKey'
            .replace('{' + 'validator_index' + '}', encodeURIComponent(String(validatorIndex)));
       
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};


        // Verify required parameter 'validatorIndex' is not null or undefined
        if (validatorIndex === null || validatorIndex === undefined) {
            throw new Error('Required parameter "validatorIndex" was null or undefined when calling getPresignedExitKey.');
        }



    if (epoch !== undefined) {
        localVarQueryParameters['epoch'] = ObjectSerializer.serialize(epoch, "number");
    }




        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;



        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
                 return new Promise<{ body: PresignedExitKey, status: number }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    console.error('API call error:', error);
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "PresignedExitKey");
                        resolve({ body: body, status: response.statusCode });
                    } else {
                        console.error('API response error:', response.statusCode);
                        resolve({ body: body, status: response.statusCode });
                    }
                }
            });
        });
    } )
}
    /**
     * Retrieves a paginated list of validator withdrawals. The endpoint supports filtering by start and end date, page number, and limit. Additionally, it allows filtering by validator indices. 
     * @summary Get a list of validator withdrawals
     * @param startDate Start date for filtering withdrawal statistics
     * @param endDate End date for filtering withdrawal statistics
     * @param page Withdrawal list page number
     * @param limit Number of withdrawals to return per page
     * @param validatorIndices Comma-separated list of validator indices to filter withdrawals (e.g., \&quot;123,456,789\&quot;)
     */

   



    public async getValidatorWithdrawals(params?: ValidatorsApiParams, options: { headers: { [name: string]: string } } = { headers: {} }): Promise<{ body: GetWithdrawalsResponse, status: number }> {

        const localVarPath = this.basePath + '/validators/withdrawals';
       
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};





    if (params?.startDate !== undefined) {
        localVarQueryParameters['start_date'] = ObjectSerializer.serialize(params?.startDate, "Date");
    }
    if (params?.endDate !== undefined) {
        localVarQueryParameters['end_date'] = ObjectSerializer.serialize(params?.endDate, "Date");
    }
    if (params?.page !== undefined) {
        localVarQueryParameters['page'] = ObjectSerializer.serialize(params?.page, "number");
    }
    if (params?.limit !== undefined) {
        localVarQueryParameters['limit'] = ObjectSerializer.serialize(params?.limit, "number");
    }
    if (params?.validatorIndices !== undefined) {
        localVarQueryParameters['validator_indices'] = ObjectSerializer.serialize(params?.validatorIndices, "string");
    }




        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;



        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
                 return new Promise<{ body: GetWithdrawalsResponse, status: number }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    console.error('API call error:', error);
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "GetWithdrawalsResponse");
                        resolve({ body: body, status: response.statusCode });
                    } else {
                        console.error('API response error:', response.statusCode);
                        resolve({ body: body, status: response.statusCode });
                    }
                }
            });
        });
    } )
}
    /**
     * 
     * @summary Get a list of validators, optionally filtering by key_holder and contract_type
     * @param keyHolder Filter by key holder
     * @param contractType Filter by contract type
     */

   



   public async getValidators (keyHolder?: ValidatorKeyHolder, contractType?: ValidatorType, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ body: Array<ValidatorInfo>, status: number }> {

        const localVarPath = this.basePath + '/validators';
       
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};





    if (keyHolder !== undefined) {
        localVarQueryParameters['key_holder'] = ObjectSerializer.serialize(keyHolder, "ValidatorKeyHolder");
    }
    if (contractType !== undefined) {
        localVarQueryParameters['contract_type'] = ObjectSerializer.serialize(contractType, "ValidatorType");
    }




        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;



        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
                 return new Promise<{ body: Array<ValidatorInfo>, status: number }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    console.error('API call error:', error);
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "Array<ValidatorInfo>");
                        resolve({ body: body, status: response.statusCode });
                    } else {
                        console.error('API response error:', response.statusCode);
                        resolve({ body: body, status: response.statusCode });
                    }
                }
            });
        });
    } )
}
}