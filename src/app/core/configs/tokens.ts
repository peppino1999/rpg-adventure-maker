import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('API_URL');
export const SECURE_URL_CODE = new InjectionToken<string>('SECURE_URL_CODE');
export const LOGGEDIN_ROOT = new InjectionToken<string>('LOGGEDIN_ROOT');
export const LOGGEDOUT_ROOT = new InjectionToken<string>('LOGGEDOUT_ROOT');