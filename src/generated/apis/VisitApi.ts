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
    VisitDTO,
} from '../models';

export interface DeleteVisitsRelatedToPatientRequest {
    patID: number;
}

export interface GetVisitRequest {
    patID: number;
}

export interface NewVisitRequest {
    visitDTO: VisitDTO;
}

export interface NewVisitsRequest {
    visitDTO: Array<VisitDTO>;
}

export interface UpdateVisitRequest {
    visitID: number;
    visitDTO: VisitDTO;
}

/**
 * no description
 */
export class VisitApi extends BaseAPI {

    /**
     */
    deleteVisitsRelatedToPatient({ patID }: DeleteVisitsRelatedToPatientRequest): Observable<boolean>
    deleteVisitsRelatedToPatient({ patID }: DeleteVisitsRelatedToPatientRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deleteVisitsRelatedToPatient({ patID }: DeleteVisitsRelatedToPatientRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(patID, 'patID', 'deleteVisitsRelatedToPatient');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/visits/delete/{patID}'.replace('{patID}', encodeURI(patID)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getVisit({ patID }: GetVisitRequest): Observable<Array<VisitDTO>>
    getVisit({ patID }: GetVisitRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<VisitDTO>>>
    getVisit({ patID }: GetVisitRequest, opts?: OperationOpts): Observable<Array<VisitDTO> | RawAjaxResponse<Array<VisitDTO>>> {
        throwIfNullOrUndefined(patID, 'patID', 'getVisit');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<VisitDTO>>({
            url: '/visits/patient/{patID}'.replace('{patID}', encodeURI(patID)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    newVisit({ visitDTO }: NewVisitRequest): Observable<VisitDTO>
    newVisit({ visitDTO }: NewVisitRequest, opts?: OperationOpts): Observable<RawAjaxResponse<VisitDTO>>
    newVisit({ visitDTO }: NewVisitRequest, opts?: OperationOpts): Observable<VisitDTO | RawAjaxResponse<VisitDTO>> {
        throwIfNullOrUndefined(visitDTO, 'visitDTO', 'newVisit');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<VisitDTO>({
            url: '/visits',
            method: 'POST',
            headers,
            body: visitDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    newVisits({ visitDTO }: NewVisitsRequest): Observable<boolean>
    newVisits({ visitDTO }: NewVisitsRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    newVisits({ visitDTO }: NewVisitsRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(visitDTO, 'visitDTO', 'newVisits');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/visits/insertList',
            method: 'POST',
            headers,
            body: visitDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    updateVisit({ visitID, visitDTO }: UpdateVisitRequest): Observable<VisitDTO>
    updateVisit({ visitID, visitDTO }: UpdateVisitRequest, opts?: OperationOpts): Observable<RawAjaxResponse<VisitDTO>>
    updateVisit({ visitID, visitDTO }: UpdateVisitRequest, opts?: OperationOpts): Observable<VisitDTO | RawAjaxResponse<VisitDTO>> {
        throwIfNullOrUndefined(visitID, 'visitID', 'updateVisit');
        throwIfNullOrUndefined(visitDTO, 'visitDTO', 'updateVisit');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<VisitDTO>({
            url: '/visits/{visitID}'.replace('{visitID}', encodeURI(visitID)),
            method: 'PUT',
            headers,
            body: visitDTO,
        }, opts?.responseOpts);
    };

}
