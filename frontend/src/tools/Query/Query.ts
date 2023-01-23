import {
    IObject,
    IQueryDescription,
    IQueryGenerator,
} from './types';
import {
    IArrayDescription,
    IArrayType,
} from 'tools/Query/parseArray/types';
import {
    IFieldDescription,
    IFieldType,
} from 'tools/Query/parseField/types';

import {
    parseStringedQuery,
    stringifyArray,
    stringifyField,
} from 'tools/Query/functions';
import parseArray from 'tools/Query/parseArray';
import parseField from 'tools/Query/parseField';

class Query {
    public static stringify<IQuery extends IObject>(query: IQuery | null | undefined): string {
        if (!query) {
            return '';
        }

        const res: string[] = [];
        const emptyValues = [undefined, null, ''];

        Object
            .entries(query)
            .forEach(([key, value]) => {
                if (emptyValues.includes(value)) {
                    return;
                }
                if (Array.isArray(value)) {
                    const stringValue = stringifyArray(key, value);

                    res.push(...stringValue);
                } else {
                    const stringValue = stringifyField(key, value);

                    res.push(stringValue);
                }
            });

        return `?${res.join('&')}`;
    }

    public static parse<IQuery extends IObject>(queryGenerator: IQueryGenerator<IQuery>, queryString: string, description: IQueryDescription<IQuery>): IQuery {
        const stringedQuery = parseStringedQuery<IQuery>(queryString);
        const res = queryGenerator();

        Object
            .entries(description)
            .forEach(([key, propertyDescription]) => {
                if (Array.isArray(res[key])) {
                    const field = parseArray(stringedQuery[key] as string[], propertyDescription as unknown as IArrayDescription<IArrayType>);

                    if (field.value === undefined) {
                        return;
                    }

                    res[key as keyof IQuery] = field.value as any;
                } else {
                    const field = parseField(stringedQuery[key] as string, propertyDescription as unknown as IFieldDescription<IFieldType>);

                    if (field.value === undefined) {
                        return;
                    }

                    res[key as keyof IQuery] = field.value as any;
                }
            });

        return res;
    }

    public static merge<IQuery extends IObject>(queryString: string, query: IQuery): string {
        const stringedQuery = parseStringedQuery<IObject>(queryString);

        return Query.stringify({
            ...stringedQuery,
            ...query,
        });
    }

    public static differ<IQuery extends IObject>(queryString: string, query: IQuery): string {
        const stringedQuery = parseStringedQuery<IObject>(queryString);
        const queryKeys = Object.keys(query);

        Object
            .keys(stringedQuery)
            .forEach((key) => {
                if (!queryKeys.includes(key)) {
                    return;
                }

                stringedQuery[key] = undefined;
            });

        return Query.stringify(stringedQuery);
    }
}

export default Query;
