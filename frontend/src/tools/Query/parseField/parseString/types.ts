export interface IStringFieldDescription {
    type: 'string';
    enum?: string[];
}

export interface IStringFieldResultSucceed {
    value: string;
}

export interface IStringFieldResultFailed {
    value: undefined;
}

export type IStringFieldResult =
    IStringFieldResultSucceed |
    IStringFieldResultFailed;
