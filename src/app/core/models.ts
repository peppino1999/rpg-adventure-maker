import { HttpHeaders, HttpParams } from "@angular/common/http";

export type ApiCallMethods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'


export interface ApiCallParams {
    type: ApiCallMethods,
    url: string,
    options?:{
        body?:any,
        params?: HttpParams,
        headers?: HttpHeaders
    }
}