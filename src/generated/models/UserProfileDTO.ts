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

/**
 * @export
 * @interface UserProfileDTO
 */
export interface UserProfileDTO {
    /**
     * @type {Array<string>}
     * @memberof UserProfileDTO
     */
    permissions?: Array<string>;
    /**
     * @type {string}
     * @memberof UserProfileDTO
     */
    userName?: string;
    /**
     * the name of the group of user
     * @type {string}
     * @memberof UserProfileDTO
     */
    userGroupName?: string;
    /**
     * full name of user
     * @type {string}
     * @memberof UserProfileDTO
     */
    userDesc?: string;
}
