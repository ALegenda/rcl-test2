export interface IConstructorData {
    url: string;
    method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

    credentials?: 'omit' | 'same-origin' | 'include';
    headers?: string[][];
    query?: any;
    body?: any;
    formData?: FormData;
    file?: File;
}

export type IHandler<IResult> = (body: any) => IResult;
export type IDefaultCallback = () => void;

export type IResponseError = any;

export interface IWithResponseError {
    error?: IResponseError;
}
