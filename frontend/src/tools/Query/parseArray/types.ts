export interface IBooleanArrayDescription {
    type: 'boolean[]';
}

export interface IDateArrayDescription {
    type: 'date[]';
}

export interface INumberArrayDescription {
    type: 'number[]';
    enum?: number[];
}

export interface IStringArrayDescription {
    type: 'string[]';
    enum?: string[];
}

export type IArrayType =
    'boolean[]' |
    'date[]' |
    'number[]' |
    'string[]';

export type IArrayDescription<IType extends IArrayType> =
    IType extends 'boolean[]' ? IBooleanArrayDescription :
        IType extends 'date[]' ? IDateArrayDescription :
            IType extends 'number[]' ? INumberArrayDescription :
                IType extends 'string[]' ? IStringArrayDescription :
                    never;

export type IArrayDescriptionByValue<IValue> =
    IValue extends Array<infer IItemValue> ?
        IItemValue extends boolean ? IBooleanArrayDescription :
            IItemValue extends number ? INumberArrayDescription :
                IItemValue extends string ? IStringArrayDescription :
                    IItemValue extends Date ? IDateArrayDescription :
                        never : never;

export interface IBooleanArrayResult {
    value: boolean[] | undefined;
}

export interface IDateArrayResult {
    value: Date[] | undefined;
}

export interface INumberArrayResult {
    value: number[] | undefined;
}

export interface IStringArrayResult {
    value: string[] | undefined;
}

export type IArrayResult =
    IBooleanArrayResult |
    IDateArrayResult |
    INumberArrayResult |
    IStringArrayResult;
