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
    AdmissionDTO,
} from './';

/**
 * @export
 * @interface MalnutritionDTO
 */
export interface MalnutritionDTO {
    /**
     * The code malnutrition control
     * @type {number}
     * @memberof MalnutritionDTO
     */
    code?: number;
    /**
     * The date of this malnutrition control
     * @type {string}
     * @memberof MalnutritionDTO
     */
    dateSupp: string;
    /**
     * The date of the next malnutrition control
     * @type {string}
     * @memberof MalnutritionDTO
     */
    dateConf?: string;
    /**
     * @type {AdmissionDTO}
     * @memberof MalnutritionDTO
     */
    admission: AdmissionDTO;
    /**
     * The height of the patient
     * @type {number}
     * @memberof MalnutritionDTO
     */
    height: number;
    /**
     * The weight of the patient
     * @type {number}
     * @memberof MalnutritionDTO
     */
    weight: number;
    /**
     * lock
     * @type {number}
     * @memberof MalnutritionDTO
     */
    lock?: number;
}
