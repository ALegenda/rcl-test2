import {
    IBooleanFieldDescription,
    IBooleanFieldResult,
} from './types';

export default function parseBoolean(value: string, _: IBooleanFieldDescription): IBooleanFieldResult {
    if (!['true', 'false'].includes(value)) {
        return {
            value: undefined,
        };
    }

    const parsedValue = value === 'true';

    return {
        value: parsedValue,
    };
}
