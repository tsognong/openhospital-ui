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

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    VaccineDTO,
} from '../models';

export interface CheckVaccineCodeRequest {
    code: string;
}

export interface DeleteVaccineRequest {
    code: string;
}

export interface GetVaccinesByVaccineTypeCodeRequest {
    vaccineTypeCode: string;
}

export interface NewVaccineRequest {
    vaccineDTO: VaccineDTO;
}

export interface UpdateVaccineRequest {
    vaccineDTO: VaccineDTO;
}

/**
 * no description
 */
export class VaccinesApi extends BaseAPI {

    /**
     */
    checkVaccineCode({ code }: CheckVaccineCodeRequest): Observable<boolean>
    checkVaccineCode({ code }: CheckVaccineCodeRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    checkVaccineCode({ code }: CheckVaccineCodeRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(code, 'code', 'checkVaccineCode');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/vaccines/check/{code}'.replace('{code}', encodeURI(code)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    deleteVaccine({ code }: DeleteVaccineRequest): Observable<boolean>
    deleteVaccine({ code }: DeleteVaccineRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deleteVaccine({ code }: DeleteVaccineRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(code, 'code', 'deleteVaccine');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/vaccines/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getVaccines(): Observable<Array<VaccineDTO>>
    getVaccines(opts?: OperationOpts): Observable<RawAjaxResponse<Array<VaccineDTO>>>
    getVaccines(opts?: OperationOpts): Observable<Array<VaccineDTO> | RawAjaxResponse<Array<VaccineDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<VaccineDTO>>({
            url: '/vaccines',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getVaccinesByVaccineTypeCode({ vaccineTypeCode }: GetVaccinesByVaccineTypeCodeRequest): Observable<Array<VaccineDTO>>
    getVaccinesByVaccineTypeCode({ vaccineTypeCode }: GetVaccinesByVaccineTypeCodeRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<VaccineDTO>>>
    getVaccinesByVaccineTypeCode({ vaccineTypeCode }: GetVaccinesByVaccineTypeCodeRequest, opts?: OperationOpts): Observable<Array<VaccineDTO> | RawAjaxResponse<Array<VaccineDTO>>> {
        throwIfNullOrUndefined(vaccineTypeCode, 'vaccineTypeCode', 'getVaccinesByVaccineTypeCode');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<VaccineDTO>>({
            url: '/vaccines/type-code/{vaccineTypeCode}'.replace('{vaccineTypeCode}', encodeURI(vaccineTypeCode)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    newVaccine({ vaccineDTO }: NewVaccineRequest): Observable<VaccineDTO>
    newVaccine({ vaccineDTO }: NewVaccineRequest, opts?: OperationOpts): Observable<RawAjaxResponse<VaccineDTO>>
    newVaccine({ vaccineDTO }: NewVaccineRequest, opts?: OperationOpts): Observable<VaccineDTO | RawAjaxResponse<VaccineDTO>> {
        throwIfNullOrUndefined(vaccineDTO, 'vaccineDTO', 'newVaccine');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<VaccineDTO>({
            url: '/vaccines',
            method: 'POST',
            headers,
            body: vaccineDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    updateVaccine({ vaccineDTO }: UpdateVaccineRequest): Observable<VaccineDTO>
    updateVaccine({ vaccineDTO }: UpdateVaccineRequest, opts?: OperationOpts): Observable<RawAjaxResponse<VaccineDTO>>
    updateVaccine({ vaccineDTO }: UpdateVaccineRequest, opts?: OperationOpts): Observable<VaccineDTO | RawAjaxResponse<VaccineDTO>> {
        throwIfNullOrUndefined(vaccineDTO, 'vaccineDTO', 'updateVaccine');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<VaccineDTO>({
            url: '/vaccines',
            method: 'PUT',
            headers,
            body: vaccineDTO,
        }, opts?.responseOpts);
    };

}
