// tslint:disable
/**
 * Open Hospital API Documentation
 * Open Hospital API Documentation
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    PermissionDTO,
} from './';

/**
 * The user\'s group
 * @export
 * @interface UserGroupDTO
 */
export interface UserGroupDTO {
    /**
     * Name of the group (must be unique)
     * @type {string}
     * @memberof UserGroupDTO
     */
    code: string;
    /**
     * The description of the group
     * @type {string}
     * @memberof UserGroupDTO
     */
    desc?: string;
    /**
     * Whether the group has been soft deleted or not
     * @type {boolean}
     * @memberof UserGroupDTO
     */
    deleted?: boolean;
    /**
     * List of group\'s permissions
     * @type {Array<PermissionDTO>}
     * @memberof UserGroupDTO
     */
    permissions?: Array<PermissionDTO>;
}
