import {
    IStringFieldDescription,
    IStringFieldResult,
} from './types';

export default function parseString(value: string, description: IStringFieldDescription): IStringFieldResult {
    if (value === undefined || value === null) {
        return {
            value: undefined,
        };
    }
    if (description.enum) {
        if (!description.enum.includes(value)) {
            return {
                value: undefined,
            };
        }

        return {
            value,
        };
    }

    return {
        value,
    };
}
