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

export interface LoginInfo {
    user: string,
    password: string
}

export interface UserAuthRes {
    accessToken: string,
    user: User
}

export type User = {
    id: number,
    firstName: string,
    lastName: string,
    city: string,
    email: string,
    phone: string,
    notes: string,
    password?: string,
    confirmPassword?: string
}