import {
    IArrayDescription,
    IArrayResult,
    IArrayType,
} from './types';
import {
    IFieldDescription,
    IFieldResultSucceedValue,
    IFieldType,
} from '../parseField/types';

import parseField from '../parseField';

export default function parseArray<IType extends IArrayType>(value: string[], description: IArrayDescription<IType>): IArrayResult {
    function mapArray<IType extends IFieldType>(value: string[], description: IFieldDescription<IType>): IFieldResultSucceedValue<IType>[] {
        return value
            .map((item) => parseField(item, description))
            .filter((item) => item !== undefined)
            .map((item) => item.value) as IFieldResultSucceedValue<IType>[];
    }

    switch (description.type) {
        case 'boolean[]': {
            return {
                value: mapArray<'boolean'>(value, {
                    type: 'boolean',
                }),
            };
        }
        case 'date[]': {
            return {
                value: mapArray<'date'>(value, {
                    type: 'date',
                }),
            };
        }
        case 'number[]': {
            return {
                value: mapArray<'number'>(value, {
                    type: 'number',
                    enum: description.enum,
                }),
            };
        }
        case 'string[]': {
            return {
                value: mapArray<'string'>(value, {
                    type: 'string',
                    enum: description.enum,
                }),
            };
        }
    }
}
