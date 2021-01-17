import { SuccessCallback, FailCallback } from "./type";
export declare class Rest {
    serverURL: string;
    restBaseURL: string;
    constructor(serverUrl: string, restBaseURL: string);
    getBaseUrl(): string;
    createRestUrl(path: string, params?: any): string;
    createUrl(path: string, params?: any): string;
    get(path: string, params: any, cb: SuccessCallback, failCb?: FailCallback): any;
    post(path: string, params: any, cb: SuccessCallback, failCb?: FailCallback): any;
    put(path: string, params: any, cb: SuccessCallback, failCb?: FailCallback): any;
    delete(path: string, params: any, cb: SuccessCallback, failCb?: FailCallback): any;
    formSubmit(path: string, formData: any, cb: SuccessCallback): any;
    doFetch(url: string, config: any, successCallback: SuccessCallback, failCb?: FailCallback): any;
}
