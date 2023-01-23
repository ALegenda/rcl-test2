import {
    IFieldDescription,
    IFieldResult,
    IFieldType,
} from './types';

import parseBoolean from './parseBoolean';
import parseDate from './parseDate';
import parseNumber from './parseNumber';
import parseString from './parseString';

export default function parseField<IType extends IFieldType>(value: string, description: IFieldDescription<IType>): IFieldResult<IFieldType> {
    switch (description.type) {
        case 'boolean': {
            return parseBoolean(value, description);
        }
        case 'date': {
            return parseDate(value, description);
        }
        case 'number': {
            return parseNumber(value, description);
        }
        case 'string': {
            return parseString(value, description);
        }
    }
}
