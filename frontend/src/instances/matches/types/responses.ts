import {
    IResponseError,
    IWithResponseError,
} from 'tools/Fetch';

import {
    IMatchDemoUser,
    IMatchFinishedDemoUser,
    IMatchMapUser,
    IMatchUser,
} from '.';

export interface IGetByUser extends IWithResponseError {
    matches?: IMatchFinishedDemoUser[];
    total?: number;
}

export interface IGetPendingByUser extends IWithResponseError {
    matches?: IMatchDemoUser[];
}

export interface IGetOneByUser extends IWithResponseError {
    match?: IMatchUser;
    notFoundError?: IResponseError;
}

export interface IGetOneMapByUser extends IWithResponseError {
    matchMap?: IMatchMapUser;
}
