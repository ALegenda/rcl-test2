export interface IMockFetchParams<IBody> {
    code: number;
    headers?: string[][];
    body?: IBody;
    text?: string;
    file?: Buffer;
    formData?: FormData;
}

export type IFunction<IArgs extends any[], IRes> = (...args: IArgs) => IRes;

export type IEventType =
    'click';

export interface IDispatchEventParams {
    type: IEventType;
}
