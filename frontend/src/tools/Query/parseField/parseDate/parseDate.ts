import {
    IDateFieldDescription,
    IDateFieldResult,
} from './types';

export default function parseDate(value: string, _: IDateFieldDescription): IDateFieldResult {
    const firstDate = new Date(value);

    if (!isNaN(firstDate.getDate())) {
        return {
            value: firstDate,
        };
    }

    const secondDate = new Date(parseInt(value));

    if (isNaN(secondDate.getDate())) {
        return {
            value: undefined,
        };
    }

    return {
        value: secondDate,
    };
}
