import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import styles from './Loading.module.scss';

const Loading: FC<IProps> = (props) => {
    return (
        <div className={classNames(styles.loading, props.className)}>
            Loading
        </div>
    );
};

export default Loading;
