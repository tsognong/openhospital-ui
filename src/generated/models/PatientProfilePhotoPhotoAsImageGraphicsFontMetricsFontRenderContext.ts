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
    PatientProfilePhotoPhotoAsImageGraphicsFontTransform,
} from './';

/**
 * @export
 * @interface PatientProfilePhotoPhotoAsImageGraphicsFontMetricsFontRenderContext
 */
export interface PatientProfilePhotoPhotoAsImageGraphicsFontMetricsFontRenderContext {
    /**
     * @type {PatientProfilePhotoPhotoAsImageGraphicsFontTransform}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsFontMetricsFontRenderContext
     */
    transform?: PatientProfilePhotoPhotoAsImageGraphicsFontTransform;
    /**
     * @type {object}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsFontMetricsFontRenderContext
     */
    antiAliasingHint?: object;
    /**
     * @type {object}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsFontMetricsFontRenderContext
     */
    fractionalMetricsHint?: object;
    /**
     * @type {boolean}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsFontMetricsFontRenderContext
     */
    transformed?: boolean;
    /**
     * @type {boolean}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsFontMetricsFontRenderContext
     */
    antiAliased?: boolean;
    /**
     * @type {number}
     * @memberof PatientProfilePhotoPhotoAsImageGraphicsFontMetricsFontRenderContext
     */
    transformType?: number;
}