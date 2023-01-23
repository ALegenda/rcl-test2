import {
    IConstructorData,
    IDefaultCallback,
    IHandler,
    IResponseError,
} from './types';

import Query from 'tools/Query';

import {
    FAILED_TO_PARSE_RESPONSE_BODY,
    UNRECOGNIZED_RESPONSE_CODE,
} from './constants';

class Fetch<IResult extends {error?: IResponseError}> {
    private readonly url: IConstructorData['url'];
    private readonly method: IConstructorData['method'];
    private readonly credentials: IConstructorData['credentials'] = 'include';
    private readonly query: IConstructorData['query'];
    private readonly formData: IConstructorData['formData'];
    private readonly file: IConstructorData['file'];
    private headers: IConstructorData['headers'] = undefined;
    private body: IConstructorData['body'];

    private statuses: number[][] = [];
    private handlers: (IHandler<IResult> | null)[] = [];
    private emptyBodyCallbacks: ((() => void) | null)[] = [];
    private downloadBodyFileNames: (string | null)[] = [];
    private defaultCallback: IDefaultCallback | undefined;

    constructor(data: IConstructorData) {
        this.url = data.url;
        this.method = data.method;
        this.credentials = data.credentials || this.credentials;
        this.headers = data.headers;
        this.query = data.query || this.query;
        this.body = data.body || this.body;
        this.formData = data.formData || this.formData;
        this.file = data.file || this.file;
    }

    private static async downloadFile(response: Response, fileName: string): Promise<any> {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');

        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }

    public on(statuses: number[], handler: IHandler<IResult>): this {
        this.statuses.push(statuses);
        this.handlers.push(handler);
        this.emptyBodyCallbacks.push(null);
        this.downloadBodyFileNames.push(null);

        return this;
    }

    public onEmptyBody(statuses: number[], cb?: () => void): this {
        const defaultCb = () => {
            return;
        };

        this.statuses.push(statuses);
        this.handlers.push(null);
        this.emptyBodyCallbacks.push(cb || defaultCb);
        this.downloadBodyFileNames.push(null);

        return this;
    }

    public onDownload(statuses: number[], downloadBodyFileName: string) {
        this.statuses.push(statuses);
        this.handlers.push(null);
        this.emptyBodyCallbacks.push(null);
        this.downloadBodyFileNames.push(downloadBodyFileName);

        return this;
    }

    public onDefault(callback: IDefaultCallback): this {
        this.defaultCallback = callback;

        return this;
    }

    public async exec(): Promise<IResult> {
        if (this.formData) {
            this.headers = this.headers || [];
            this.body = this.formData;
        } else if (this.file) {
            this.headers = this.headers || [['Content-type', 'text/plain']];
            this.body = this.file;
        } else {
            this.headers = this.headers || [['Content-type', 'application/json']];
            this.body = this.body ? JSON.stringify(this.body) : undefined;
        }

        const response = await fetch(`${this.url}${Query.stringify(this.query)}`, {
            method: this.method,
            credentials: this.credentials,
            headers: this.headers,
            body: this.body,
        });
        const handlerIndex = this.statuses.findIndex((statuses) => statuses.includes(response.status));
        const handler = this.handlers[handlerIndex];
        const emptyBodyCallback = this.emptyBodyCallbacks[handlerIndex];
        const downloadBodyFileName = this.downloadBodyFileNames[handlerIndex];

        if (downloadBodyFileName) {
            await Fetch.downloadFile(response, downloadBodyFileName);

            return {
                error: null,
            } as unknown as IResult;
        }
        if (emptyBodyCallback) {
            emptyBodyCallback();

            return {
                error: null,
            } as unknown as IResult;
        }
        if (handler) {
            try {
                const body = await response.json();

                return handler(body);
            } catch (error) {
                this.defaultCallback?.();

                return {
                    error: FAILED_TO_PARSE_RESPONSE_BODY,
                } as unknown as IResult;
            }
        } else {
            this.defaultCallback?.();

            return {
                error: UNRECOGNIZED_RESPONSE_CODE,
            } as unknown as IResult;
        }
    }
}

export default Fetch;
