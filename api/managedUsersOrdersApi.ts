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
import { Order } from '../model/order';
import { OrderDocument } from '../model/orderDocument';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth, JWTAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.northstake.dk/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ManagedUsersOrdersApiApiKeys {
    ApiKeyAuth,
}



export class ManagedUsersOrdersApi {
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

    public setApiKey(key: ManagedUsersOrdersApiApiKeys, value: string) {
        (this.authentications as any)[ManagedUsersOrdersApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.bearerTokenAuth.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @summary Cancel a submitted order by ID for a particular managed user
     * @param userId 
     * @param orderId 
     */

   



   public async cancelOrderForUser (userId: string, orderId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ body: any, status: number }> {

        const localVarPath = this.basePath + '/managedUsers/{userId}/orders/{orderId}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'orderId' + '}', encodeURIComponent(String(orderId)));
       
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};


        // Verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter "userId" was null or undefined when calling cancelOrderForUser.');
        }
        // Verify required parameter 'orderId' is not null or undefined
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter "orderId" was null or undefined when calling cancelOrderForUser.');
        }







        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;



        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
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
                 return new Promise<{ body: any, status: number }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    console.error('API call error:', error);
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
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
     * This endpoint allows the client to create a staking, unstaking, or withdrawal order on behalf of a managed user. One key feature of this endpoint is the ability to include an optional `validatorKey` field when creating a staking order.  ### Including a Validator Key (Ethereum only) By including a `validatorKey` in the staking order, the client specifies a pre-generated and signed Ethereum validator key that should be used for the staking transaction. This key must meet all required security and operational standards, as it will be directly used for staking on the Ethereum blockchain.  The `validatorKey` object includes cryptographic details such as the keystore information, public key, and the cryptographic path. Including this key is beneficial for users who prefer to maintain a level of control over their staking operations and ensure that their specific validators are utilized.  ### Without a Validator Key If no `validatorKey` is provided, Northstake handles the staking operation internally. This process requires that the managed user\'s account must have sufficient balance in their deposit account to cover the staking transaction and any associated fees. In this case, Northstake will generate the necessary validator keys, handle the cryptographic operations, and ensure the validator is registered correctly on the blockchain.  ### Usage Scenarios - **With Validator Key**: Ensures that a specific, pre-approved validator key is used, providing transparency and control to the user. - **Without Validator Key**: Ideal for users who prefer a hands-off approach, allowing Northstake to manage the technical and operational complexities of staking on their behalf.  Clients are advised to ensure that all provided validator keys are secure and generated according to best security practices. Improper handling or exposure of validator keys can lead to significant security risks, including loss of staked assets. 
     * @summary Create an order on behalf of a managed user
     * @param userId 
     * @param order 
     */

   



   public async createOrderForUser (userId: string, order: Order, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ body: OrderDocument, status: number }> {

        const localVarPath = this.basePath + '/managedUsers/{userId}/orders'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
       
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};


        // Verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter "userId" was null or undefined when calling createOrderForUser.');
        }
        // Verify required parameter 'order' is not null or undefined
        if (order === null || order === undefined) {
            throw new Error('Required parameter "order" was null or undefined when calling createOrderForUser.');
        }







        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;



        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(order, "Order")
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
                 return new Promise<{ body: OrderDocument, status: number }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    console.error('API call error:', error);
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "OrderDocument");
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
     * @summary Get all orders for a particular managed user
     * @param userId 
     */

   



   public async getAllOrdersForUser (userId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ body: Array<OrderDocument>, status: number }> {

        const localVarPath = this.basePath + '/managedUsers/{userId}/orders'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
       
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};


        // Verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter "userId" was null or undefined when calling getAllOrdersForUser.');
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
                 return new Promise<{ body: Array<OrderDocument>, status: number }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    console.error('API call error:', error);
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "Array<OrderDocument>");
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
     * @summary Get details of an order by ID for a particular managed user
     * @param userId 
     * @param orderId 
     */

   



   public async getOrderDetailsForUser (userId: string, orderId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ body: OrderDocument, status: number }> {

        const localVarPath = this.basePath + '/managedUsers/{userId}/orders/{orderId}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'orderId' + '}', encodeURIComponent(String(orderId)));
       
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};


        // Verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter "userId" was null or undefined when calling getOrderDetailsForUser.');
        }
        // Verify required parameter 'orderId' is not null or undefined
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter "orderId" was null or undefined when calling getOrderDetailsForUser.');
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
                 return new Promise<{ body: OrderDocument, status: number }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    console.error('API call error:', error);
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        body = ObjectSerializer.deserialize(body, "OrderDocument");
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
