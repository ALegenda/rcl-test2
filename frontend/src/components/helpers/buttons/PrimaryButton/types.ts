import {
    PropsWithChildren,
} from 'react';

export interface IProps extends PropsWithChildren {
    className?: string;
    to?: string;

    onClick?(): void;
}
