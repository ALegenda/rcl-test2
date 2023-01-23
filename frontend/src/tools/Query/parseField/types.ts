import {
    IBooleanFieldDescription,
    IBooleanFieldResult,
    IBooleanFieldResultSucceed,
} from './parseBoolean/types';
import {
    IDateFieldDescription,
    IDateFieldResult,
    IDateFieldResultSucceed,
} from './parseDate/types';
import {
    INumberFieldDescription,
    INumberFieldResult,
    INumberFieldResultSucceed,
} from './parseNumber/types';
import {
    IStringFieldDescription,
    IStringFieldResult,
    IStringFieldResultSucceed,
} from './parseString/types';

export type IFieldType =
    'boolean' |
    'date' |
    'number' |
    'string';

export type IFieldDescription<IType extends IFieldType> =
    IType extends 'boolean' ? IBooleanFieldDescription :
        IType extends 'date' ? IDateFieldDescription :
            IType extends 'number' ? INumberFieldDescription :
                IType extends 'string' ? IStringFieldDescription :
                    never;

export type IFieldDescriptionByValue<IValue> =
    IValue extends boolean ? IBooleanFieldDescription :
        IValue extends number ? INumberFieldDescription :
            IValue extends string ? IStringFieldDescription :
                IValue extends Date ? IDateFieldDescription :
                    never;

export type IFieldResultSucceed<IType extends IFieldType> =
    IType extends 'boolean' ? IBooleanFieldResultSucceed :
        IType extends 'date' ? IDateFieldResultSucceed :
            IType extends 'number' ? INumberFieldResultSucceed :
                IType extends 'string' ? IStringFieldResultSucceed :
                    never;

export type IFieldResultSucceedValue<IType extends IFieldType> =
    IFieldResultSucceed<IType>['value'];

export type IFieldResult<IType extends IFieldType> =
    IType extends 'boolean' ? IBooleanFieldResult :
        IType extends 'date' ? IDateFieldResult :
            IType extends 'number' ? INumberFieldResult :
                IType extends 'string' ? IStringFieldResult :
                    never;
