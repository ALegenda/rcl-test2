import {
    IGetByUserQuery,
    IGetDemoByUserQuery,
} from './types/requests';
import {
    IGetByUser,
    IGetDemoByUser,
    IGetOneByUser,
    IGetOneByUserStats,
} from './types/responses';

import config from 'config';

import Fetch from 'tools/Fetch';

import {
    INSTANCE_PATH,
} from './constants';

export async function getDemoByUser(query: IGetDemoByUserQuery): Promise<IGetDemoByUser> {
    return new Fetch<IGetDemoByUser>({
        url: `${config.URL}/shortresults`,
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

export async function getOneByUser(id: number): Promise<IGetOneByUser> {
    return new Fetch<IGetOneByUser>({
        url: `${config.URL}${INSTANCE_PATH}/${id}`,
        method: 'GET',
        credentials: 'omit',
    })
        .on([200], (body) => {
            return {
                team: body,
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
        url: `${config.URL}${INSTANCE_PATH}/stats/${id}`,
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
