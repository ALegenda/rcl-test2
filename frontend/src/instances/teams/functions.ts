import {
    IGetByUserQuery,
    IGetDemoByUserQuery,
} from './types/requests';

export function getDefaultDemoQueryUser(): IGetDemoByUserQuery {
    return {
        skip: 0,
        take: 20,
    };
}

export function getDefaultQueryUser(): IGetByUserQuery {
    return {
        skip: 0,
        take: 20,
    };
}
