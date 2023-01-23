import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import spinnerImage from './media/spinner.svg';

import styles from './Loading.module.scss';

const Loading: FC<IProps> = (props) => {
    return (
        <div className={classNames(styles.loading, props.className)}>
            <img
                src={spinnerImage}
                alt={''}
                width={props.size}
                height={props.size}
            />
        </div>
    );
};

export default Loading;
