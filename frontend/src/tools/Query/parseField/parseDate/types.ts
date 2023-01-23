export interface IDateFieldDescription {
    type: 'date';
}

export interface IDateFieldResultSucceed {
    value: Date;
}

export interface IDateFieldResultFailed {
    value: undefined;
}

export type IDateFieldResult =
    IDateFieldResultSucceed |
    IDateFieldResultFailed;
