import {
    IGetByUserQuery,
} from './types/requests';

import {
    WINDOW_WIDTH,
} from 'tools';

export function getDefaultQueryUser(windowWidth?: number): IGetByUserQuery {
    return {
        skip: 0,
        take: windowWidth === undefined || windowWidth >= WINDOW_WIDTH.W1280 ? 8 : 3,
    };
}
