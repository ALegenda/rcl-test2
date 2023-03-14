import {
    IResponseError,
    IWithResponseError,
} from 'tools/Fetch';

import {
    IMatch,
    IStats,
    ITeamDemoUser,
    ITeamUser,
} from '.';

export interface IGetDemoByUser extends IWithResponseError {
    teams?: ITeamDemoUser[];
    total?: number;
}

export interface IGetByUser extends IWithResponseError {
    teams?: ITeamUser[];
    total?: number;
}

export interface IGetOneByUser extends IWithResponseError {
    team?: ITeamUser;
    notFoundError?: IResponseError;
}

export interface IGetOneByUserStats extends IWithResponseError {
    stats?: IStats;
    notFoundError?: IResponseError;
}

export interface IGetOneByUserMatches extends IWithResponseError {
    matches?: IMatch[];
}
