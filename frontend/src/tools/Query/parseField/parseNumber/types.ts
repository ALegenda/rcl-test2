export interface INumberFieldDescription {
    type: 'number';
    enum?: number[];
}

export interface INumberFieldResultSucceed {
    value: number;
}

export interface INumberFieldResultFailed {
    value: undefined;
}

export type INumberFieldResult =
    INumberFieldResultSucceed |
    INumberFieldResultFailed;
