// tslint:disable
/**
 * OH 2.0 Api Documentation
 * OH 2.0 Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    OperationTypeDTO,
} from './';

/**
 * @export
 * @interface OperationDTO
 */
export interface OperationDTO {
    /**
     * @type {string}
     * @memberof OperationDTO
     */
    code?: string;
    /**
     * the operation description
     * @type {string}
     * @memberof OperationDTO
     */
    description: string;
    /**
     * @type {OperationTypeDTO}
     * @memberof OperationDTO
     */
    type: OperationTypeDTO;
    /**
     * the operation major
     * @type {number}
     * @memberof OperationDTO
     */
    major: number;
    /**
     * lock
     * @type {number}
     * @memberof OperationDTO
     */
    lock?: number;
}
