import {
    IGetByUserQuery,
} from './types/requests';
import {
    IGetByUser,
    IGetLineupByUser,
    IGetOneByUserBaseInfo,
    IGetOneByUserStats,
} from './types/responses';

import config from 'config';

import Fetch from 'tools/Fetch';

import {
    INSTANCE_PATH,
} from './constants';

export async function getByUser(query: IGetByUserQuery): Promise<IGetByUser> {
    return new Fetch<IGetByUser>({
        url: `${config.URL}${INSTANCE_PATH}`,
        method: 'GET',
        credentials: 'omit',
        query,
    })
        .on([200], (body) => {
            return body;
        })
        .on([500], (body) => {
            return {
                error: body,
            };
        })
        .exec();
}

export async function getLineupByUser(teamId: number): Promise<IGetLineupByUser> {
    return new Fetch<IGetLineupByUser>({
        url: `${config.URL}/teams/lineup/${teamId}`,
        method: 'GET',
        credentials: 'omit',
    })
        .on([200], (body) => {
            return {
                players: body,
            };
        })
        .on([404], (body) => {
            return {
                notFoundError: body,
            };
        })
        .on([500], (body) => {
            return {
                error: body,
            };
        })
        .exec();
}

export async function getOneByUserBaseInfo(id: number): Promise<IGetOneByUserBaseInfo> {
    return new Fetch<IGetOneByUserBaseInfo>({
        url: `${config.URL}/players/${id}`,
        method: 'GET',
        credentials: 'omit',
    })
        .on([200], (body) => {
            return {
                baseInfo: body,
            };
        })
        .on([404], (body) => {
            return {
                notFoundError: body,
            };
        })
        .on([500], (body) => {
            return {
                error: body,
            };
        })
        .exec();
}

export async function getOneByUserStats(id: number): Promise<IGetOneByUserStats> {
    return new Fetch<IGetOneByUserStats>({
        url: `${config.URL}/players/stats/${id}`,
        method: 'GET',
        credentials: 'omit',
    })
        .on([200], (body) => {
            return {
                stats: body,
            };
        })
        .on([404], (body) => {
            return {
                notFoundError: body,
            };
        })
        .on([500], (body) => {
            return {
                error: body,
            };
        })
        .exec();
}
