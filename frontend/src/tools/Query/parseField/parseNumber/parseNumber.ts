import {
    INumberFieldDescription,
    INumberFieldResult,
} from './types';

export default function parseNumber(value: string, description: INumberFieldDescription): INumberFieldResult {
    const parsedValue = parseInt(value);

    if (isNaN(parsedValue)) {
        return {
            value: undefined,
        };
    }
    if (description.enum) {
        if (description.enum.includes(parsedValue)) {
            return {
                value: undefined,
            };
        }

        return {
            value: parsedValue,
        };
    }

    return {
        value: parsedValue,
    };
}
