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
    ExamDTO,
} from '../models';

export interface DeleteExamUsingDELETERequest {
    code: string;
}

export interface GetExamsUsingGET1Request {
    description: string;
}

export interface NewExamUsingPOSTRequest {
    newExam: ExamDTO;
}

export interface UpdateExamsUsingPUTRequest {
    code: string;
    updateExam: ExamDTO;
}

/**
 * no description
 */
export class ExamControllerApi extends BaseAPI {

    /**
     * deleteExam
     */
    deleteExamUsingDELETE({ code }: DeleteExamUsingDELETERequest): Observable<boolean>
    deleteExamUsingDELETE({ code }: DeleteExamUsingDELETERequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deleteExamUsingDELETE({ code }: DeleteExamUsingDELETERequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(code, 'code', 'deleteExamUsingDELETE');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<boolean>({
            url: '/exams/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getExams
     */
    getExamsUsingGET(): Observable<Array<ExamDTO>>
    getExamsUsingGET(opts?: OperationOpts): Observable<RawAjaxResponse<Array<ExamDTO>>>
    getExamsUsingGET(opts?: OperationOpts): Observable<Array<ExamDTO> | RawAjaxResponse<Array<ExamDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<ExamDTO>>({
            url: '/exams',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getExams
     */
    getExamsUsingGET1({ description }: GetExamsUsingGET1Request): Observable<Array<ExamDTO>>
    getExamsUsingGET1({ description }: GetExamsUsingGET1Request, opts?: OperationOpts): Observable<RawAjaxResponse<Array<ExamDTO>>>
    getExamsUsingGET1({ description }: GetExamsUsingGET1Request, opts?: OperationOpts): Observable<Array<ExamDTO> | RawAjaxResponse<Array<ExamDTO>>> {
        throwIfNullOrUndefined(description, 'description', 'getExamsUsingGET1');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<ExamDTO>>({
            url: '/exams/description/{description}'.replace('{description}', encodeURI(description)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * newExam
     */
    newExamUsingPOST({ newExam }: NewExamUsingPOSTRequest): Observable<ExamDTO>
    newExamUsingPOST({ newExam }: NewExamUsingPOSTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<ExamDTO>>
    newExamUsingPOST({ newExam }: NewExamUsingPOSTRequest, opts?: OperationOpts): Observable<ExamDTO | RawAjaxResponse<ExamDTO>> {
        throwIfNullOrUndefined(newExam, 'newExam', 'newExamUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<ExamDTO>({
            url: '/exams',
            method: 'POST',
            headers,
            body: newExam,
        }, opts?.responseOpts);
    };

    /**
     * updateExams
     */
    updateExamsUsingPUT({ code, updateExam }: UpdateExamsUsingPUTRequest): Observable<ExamDTO>
    updateExamsUsingPUT({ code, updateExam }: UpdateExamsUsingPUTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<ExamDTO>>
    updateExamsUsingPUT({ code, updateExam }: UpdateExamsUsingPUTRequest, opts?: OperationOpts): Observable<ExamDTO | RawAjaxResponse<ExamDTO>> {
        throwIfNullOrUndefined(code, 'code', 'updateExamsUsingPUT');
        throwIfNullOrUndefined(updateExam, 'updateExam', 'updateExamsUsingPUT');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<ExamDTO>({
            url: '/exams/{code}'.replace('{code}', encodeURI(code)),
            method: 'PUT',
            headers,
            body: updateExam,
        }, opts?.responseOpts);
    };

}
