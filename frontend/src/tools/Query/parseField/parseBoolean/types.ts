export interface IBooleanFieldDescription {
    type: 'boolean';
}

export interface IBooleanFieldResultSucceed {
    value: boolean;
}

export interface IBooleanFieldResultFailed {
    value: undefined;
}

export type IBooleanFieldResult =
    IBooleanFieldResultSucceed |
    IBooleanFieldResultFailed;
