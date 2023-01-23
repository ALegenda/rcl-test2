import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import {
    formatValue,
} from './functions';

import styles from './Kd.module.scss';

const Kd: FC<IProps> = (props) => {
    return (
        <span className={classNames({
            [styles.green]: (props.kd ?? 1.0) > 1.0,
            [styles.red]: (props.kd ?? 1.0) < 1.0,
        })}
        >
            {formatValue(props.kd)}
        </span>
    );
};

export default Kd;
