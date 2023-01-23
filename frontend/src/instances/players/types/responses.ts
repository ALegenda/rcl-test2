import {
    IResponseError,
    IWithResponseError,
} from 'tools/Fetch';

import {
    IBaseInfoUser,
    IPlayerLineupUser,
    IPlayerUser,
    IStatsUser,
} from '.';

export interface IGetByUser extends IWithResponseError {
    players?: IPlayerUser[];
    total?: number;
}

export interface IGetLineupByUser extends IWithResponseError {
    players?: IPlayerLineupUser[];
    notFoundError?: IResponseError;
}

export interface IGetOneByUserBaseInfo extends IWithResponseError {
    baseInfo?: IBaseInfoUser;
    notFoundError?: IResponseError;
}

export interface IGetOneByUserStats extends IWithResponseError {
    stats?: IStatsUser;
    notFoundError?: IResponseError;
}
