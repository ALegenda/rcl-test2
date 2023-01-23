import {
    IGetByUserQuery,
} from './types/requests';
import {
    IGetByUser,
    IGetOneByUser,
    IGetOneMapByUser,
    IGetPendingByUser,
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
            return {
                matches: body.games,
                total: body.total,
            };
        })
        .on([500], (body) => {
            return {
                error: body,
            };
        })
        .exec();
}

export async function getPendingByUser(): Promise<IGetPendingByUser> {
    return new Fetch<IGetPendingByUser>({
        url: `${config.URL}/pending`,
        method: 'GET',
        credentials: 'omit',
    })
        .on([200], (body) => {
            return {
                matches: body,
            };
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
                match: body,
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

export async function getOneMapByUser(id: number): Promise<IGetOneMapByUser> {
    return new Fetch<IGetOneMapByUser>({
        url: `${config.URL}/maps/${id}`,
        method: 'GET',
        credentials: 'omit',
    })
        .on([200], (body) => {
            return {
                matchMap: body,
            };
        })
        .on([404, 500], (body) => {
            return {
                error: body,
            };
        })
        .exec();
}
