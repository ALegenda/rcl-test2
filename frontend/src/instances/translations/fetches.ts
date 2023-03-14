import {
    IGetByUser,
} from './types/responses';

import Fetch from 'tools/Fetch';

import {
    INSTANCE_PATH,
} from './constants';

export function getByUser(locale: string): Promise<IGetByUser> {
    return new Fetch<IGetByUser>({
        url: `${process.env.PUBLIC_URL}${INSTANCE_PATH}/${locale}.json`,
        method: 'GET',
    })
        .on([200], (body) => {
            return {
                translation: body,
            };
        })
        .on([404], () => {
            return {
                error: `Translation for ${locale} not found`,
            };
        })
        .exec();
}
