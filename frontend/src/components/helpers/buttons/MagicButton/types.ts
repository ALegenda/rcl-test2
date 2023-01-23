import {
    PropsWithChildren,
} from 'react';

export interface IProps extends PropsWithChildren {
    className?: string;
    isDisabled?: boolean;

    onClick(): void;
}
