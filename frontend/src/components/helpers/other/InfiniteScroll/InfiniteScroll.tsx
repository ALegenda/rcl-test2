import {
    IProps,
} from './types';

import React, {
    FC,
} from 'react';
import ReactInfiniteScroll from 'react-infinite-scroller';

import Loading from '../Loading';

const InfiniteScroll: FC<IProps> = (props) => {
    return (
        <ReactInfiniteScroll
            className={props.className}
            pageStart={0}
            loadMore={props.loadMore}
            hasMore={props.hasMore}
            loader={<Loading key={0}/>}
        >
            {props.children}
        </ReactInfiniteScroll>
    );
};

export default InfiniteScroll;
