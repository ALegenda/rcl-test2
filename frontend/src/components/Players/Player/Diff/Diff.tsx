import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import {
    useDarkTheme,
} from 'helpers/hooks';

import {
    formatValue,
} from './functions';

import styles from './Diff.module.scss';

const Diff: FC<IProps> = (props) => {
    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <span className={classNames({
            [isDarkTheme ? styles.darkPositive : styles.lightPositive]:
                (props.diff ?? 0) > 0,
            [isDarkTheme ? styles.darkNegative : styles.lightNegative]:
                (props.diff ?? 0) < 0,
        })}
        >
            {formatValue(props.diff)}
        </span>
    );
};

export default Diff;
