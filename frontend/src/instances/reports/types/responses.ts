import {
    IResponseError,
    IWithResponseError,
} from 'tools/Fetch';

import {
    IReportDemoUser,
    IReportFullUser,
} from '.';

export interface IGetByUser extends IWithResponseError {
    reports?: IReportDemoUser[];
    total?: number;
}

export interface IGetOneByUser extends IWithResponseError {
    report?: IReportFullUser;
    notFoundError?: IResponseError;
}
