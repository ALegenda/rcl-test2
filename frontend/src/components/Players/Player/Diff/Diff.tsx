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

import styles from './Diff.module.scss';

const Diff: FC<IProps> = (props) => {
    return (
        <span className={classNames({
            [styles.green]: (props.diff ?? 0) > 0,
            [styles.red]: (props.diff ?? 0) < 0,
        })}
        >
            {formatValue(props.diff)}
        </span>
    );
};

export default Diff;
