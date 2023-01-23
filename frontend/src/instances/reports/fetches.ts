import {
    IGetByUserQuery,
} from './types/requests';
import {
    IGetByUser,
    IGetOneByUser,
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
                reports: body.news,
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

export async function getOneByUser(id: number): Promise<IGetOneByUser> {
    return new Fetch<IGetOneByUser>({
        url: `${config.URL}${INSTANCE_PATH}/${id}`,
        method: 'GET',
        credentials: 'omit',
    })
        .on([200], (body) => {
            return {
                report: body,
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
