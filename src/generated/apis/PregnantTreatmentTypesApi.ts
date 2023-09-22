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

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    PregnantTreatmentTypeDTO,
} from '../models';

export interface DeletePregnantTreatmentTypeRequest {
    code: string;
}

export interface NewPregnantTreatmentTypeRequest {
    pregnantTreatmentTypeDTO: PregnantTreatmentTypeDTO;
}

export interface UpdatePregnantTreatmentTypesRequest {
    code: string;
    pregnantTreatmentTypeDTO: PregnantTreatmentTypeDTO;
}

/**
 * no description
 */
export class PregnantTreatmentTypesApi extends BaseAPI {

    /**
     */
    deletePregnantTreatmentType({ code }: DeletePregnantTreatmentTypeRequest): Observable<boolean>
    deletePregnantTreatmentType({ code }: DeletePregnantTreatmentTypeRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deletePregnantTreatmentType({ code }: DeletePregnantTreatmentTypeRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(code, 'code', 'deletePregnantTreatmentType');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/pregnanttreatmenttypes/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getPregnantTreatmentTypes(): Observable<Array<PregnantTreatmentTypeDTO>>
    getPregnantTreatmentTypes(opts?: OperationOpts): Observable<RawAjaxResponse<Array<PregnantTreatmentTypeDTO>>>
    getPregnantTreatmentTypes(opts?: OperationOpts): Observable<Array<PregnantTreatmentTypeDTO> | RawAjaxResponse<Array<PregnantTreatmentTypeDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<PregnantTreatmentTypeDTO>>({
            url: '/pregnanttreatmenttypes',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    newPregnantTreatmentType({ pregnantTreatmentTypeDTO }: NewPregnantTreatmentTypeRequest): Observable<PregnantTreatmentTypeDTO>
    newPregnantTreatmentType({ pregnantTreatmentTypeDTO }: NewPregnantTreatmentTypeRequest, opts?: OperationOpts): Observable<RawAjaxResponse<PregnantTreatmentTypeDTO>>
    newPregnantTreatmentType({ pregnantTreatmentTypeDTO }: NewPregnantTreatmentTypeRequest, opts?: OperationOpts): Observable<PregnantTreatmentTypeDTO | RawAjaxResponse<PregnantTreatmentTypeDTO>> {
        throwIfNullOrUndefined(pregnantTreatmentTypeDTO, 'pregnantTreatmentTypeDTO', 'newPregnantTreatmentType');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<PregnantTreatmentTypeDTO>({
            url: '/pregnanttreatmenttypes',
            method: 'POST',
            headers,
            body: pregnantTreatmentTypeDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    updatePregnantTreatmentTypes({ code, pregnantTreatmentTypeDTO }: UpdatePregnantTreatmentTypesRequest): Observable<PregnantTreatmentTypeDTO>
    updatePregnantTreatmentTypes({ code, pregnantTreatmentTypeDTO }: UpdatePregnantTreatmentTypesRequest, opts?: OperationOpts): Observable<RawAjaxResponse<PregnantTreatmentTypeDTO>>
    updatePregnantTreatmentTypes({ code, pregnantTreatmentTypeDTO }: UpdatePregnantTreatmentTypesRequest, opts?: OperationOpts): Observable<PregnantTreatmentTypeDTO | RawAjaxResponse<PregnantTreatmentTypeDTO>> {
        throwIfNullOrUndefined(code, 'code', 'updatePregnantTreatmentTypes');
        throwIfNullOrUndefined(pregnantTreatmentTypeDTO, 'pregnantTreatmentTypeDTO', 'updatePregnantTreatmentTypes');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<PregnantTreatmentTypeDTO>({
            url: '/pregnanttreatmenttypes/{code}'.replace('{code}', encodeURI(code)),
            method: 'PUT',
            headers,
            body: pregnantTreatmentTypeDTO,
        }, opts?.responseOpts);
    };

}