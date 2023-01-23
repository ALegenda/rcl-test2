import {
    IArrayDescriptionByValue,
} from './parseArray/types';
import {
    IFieldDescriptionByValue,
} from './parseField/types';

export interface IObject {
    [key: string]: any;
}

export type IStringedQuery<IQuery extends IObject> = Partial<{
    [key in keyof IQuery]: IQuery[key] extends Array<any> ?
        string[] :
        string;
}>;

export type IQueryDescription<IQuery extends IObject> = Partial<{
    [key in keyof IQuery]: IQuery[key] extends Array<any> ?
        IArrayDescriptionByValue<IQuery[key]> :
        IFieldDescriptionByValue<IQuery[key]>;
}>;

export type IQueryGenerator<IQuery extends IObject> = () => IQuery;
