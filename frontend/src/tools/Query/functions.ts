import {
    IStringedQuery,
} from 'tools/Query/types';

import {
    isDate,
} from '../functions';

export function parseStringedQuery<IQuery>(queryString: string): IStringedQuery<IQuery> {
    if (!queryString) {
        return {};
    }
    if (queryString[0] === '?') {
        queryString = queryString.slice(1);
    }

    const result: IStringedQuery<IQuery> = {};
    const items = queryString.split('&');

    items.forEach((item) => {
        const [key, value] = item.split('=');
        const decodedValue = decodeURIComponent(value);

        if (!key) {
            return;
        }
        if (result[key] === undefined) {
            result[key] = decodedValue;
        } else if (Array.isArray(result[key])) {
            result[key].push(decodedValue);
        } else {
            result[key] = [result[key], decodedValue];
        }
    });

    return result;
}

export function stringifyField(key: string, value: any): string {
    if (isDate(value)) {
        return `${encodeURIComponent(key)}=${encodeURIComponent(value.getTime())}`;
    }

    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
}

export function stringifyArray(key: string, value: any[]): string[] {
    return value.map((item) => stringifyField(key, item));
}
