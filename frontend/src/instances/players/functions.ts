import {
    IGetByUserQuery,
} from './types/requests';

export function getDefaultQueryUser(): IGetByUserQuery {
    return {
        skip: 0,
        take: 20,
    };
}
