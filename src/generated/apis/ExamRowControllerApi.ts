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
import { BaseAPI, HttpHeaders, HttpQuery, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    ExamRowDTO,
} from '../models';

export interface DeleteExamUsingDELETE1Request {
    code: number;
}

export interface GetExamRowsByCodeAndDescriptionUsingGETRequest {
    code: number;
    description: string;
}

export interface GetExamRowsByCodeUsingGETRequest {
    code: number;
}

export interface GetExamRowsByExamCodeUsingGETRequest {
    examCode: string;
}

export interface NewExamRowUsingPOSTRequest {
    examRowDTO: ExamRowDTO;
}

/**
 * no description
 */
export class ExamRowControllerApi extends BaseAPI {

    /**
     * deleteExam
     */
    deleteExamUsingDELETE1({ code }: DeleteExamUsingDELETE1Request): Observable<boolean>
    deleteExamUsingDELETE1({ code }: DeleteExamUsingDELETE1Request, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deleteExamUsingDELETE1({ code }: DeleteExamUsingDELETE1Request, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(code, 'code', 'deleteExamUsingDELETE1');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<boolean>({
            url: '/examrows/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getExamRowsByCodeAndDescription
     */
    getExamRowsByCodeAndDescriptionUsingGET({ code, description }: GetExamRowsByCodeAndDescriptionUsingGETRequest): Observable<Array<ExamRowDTO>>
    getExamRowsByCodeAndDescriptionUsingGET({ code, description }: GetExamRowsByCodeAndDescriptionUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<ExamRowDTO>>>
    getExamRowsByCodeAndDescriptionUsingGET({ code, description }: GetExamRowsByCodeAndDescriptionUsingGETRequest, opts?: OperationOpts): Observable<Array<ExamRowDTO> | RawAjaxResponse<Array<ExamRowDTO>>> {
        throwIfNullOrUndefined(code, 'code', 'getExamRowsByCodeAndDescriptionUsingGET');
        throwIfNullOrUndefined(description, 'description', 'getExamRowsByCodeAndDescriptionUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'code': code,
            'description': description,
        };

        return this.request<Array<ExamRowDTO>>({
            url: '/examrows/search',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * getExamRowsByCode
     */
    getExamRowsByCodeUsingGET({ code }: GetExamRowsByCodeUsingGETRequest): Observable<Array<ExamRowDTO>>
    getExamRowsByCodeUsingGET({ code }: GetExamRowsByCodeUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<ExamRowDTO>>>
    getExamRowsByCodeUsingGET({ code }: GetExamRowsByCodeUsingGETRequest, opts?: OperationOpts): Observable<Array<ExamRowDTO> | RawAjaxResponse<Array<ExamRowDTO>>> {
        throwIfNullOrUndefined(code, 'code', 'getExamRowsByCodeUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<ExamRowDTO>>({
            url: '/examrows/{code}'.replace('{code}', encodeURI(code)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getExamRowsByExamCode
     */
    getExamRowsByExamCodeUsingGET({ examCode }: GetExamRowsByExamCodeUsingGETRequest): Observable<Array<ExamRowDTO>>
    getExamRowsByExamCodeUsingGET({ examCode }: GetExamRowsByExamCodeUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<ExamRowDTO>>>
    getExamRowsByExamCodeUsingGET({ examCode }: GetExamRowsByExamCodeUsingGETRequest, opts?: OperationOpts): Observable<Array<ExamRowDTO> | RawAjaxResponse<Array<ExamRowDTO>>> {
        throwIfNullOrUndefined(examCode, 'examCode', 'getExamRowsByExamCodeUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<ExamRowDTO>>({
            url: '/examrows/byExamCode/{examCode}'.replace('{examCode}', encodeURI(examCode)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getExamRows
     */
    getExamRowsUsingGET(): Observable<Array<ExamRowDTO>>
    getExamRowsUsingGET(opts?: OperationOpts): Observable<RawAjaxResponse<Array<ExamRowDTO>>>
    getExamRowsUsingGET(opts?: OperationOpts): Observable<Array<ExamRowDTO> | RawAjaxResponse<Array<ExamRowDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<ExamRowDTO>>({
            url: '/examrows',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * newExamRow
     */
    newExamRowUsingPOST({ examRowDTO }: NewExamRowUsingPOSTRequest): Observable<ExamRowDTO>
    newExamRowUsingPOST({ examRowDTO }: NewExamRowUsingPOSTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<ExamRowDTO>>
    newExamRowUsingPOST({ examRowDTO }: NewExamRowUsingPOSTRequest, opts?: OperationOpts): Observable<ExamRowDTO | RawAjaxResponse<ExamRowDTO>> {
        throwIfNullOrUndefined(examRowDTO, 'examRowDTO', 'newExamRowUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<ExamRowDTO>({
            url: '/examrows',
            method: 'POST',
            headers,
            body: examRowDTO,
        }, opts?.responseOpts);
    };

}
