import {
    PropsWithChildren,
} from 'react';

export interface IProps extends PropsWithChildren {
    hasMore: boolean;

    className?: string;

    loadMore(): void;
}
