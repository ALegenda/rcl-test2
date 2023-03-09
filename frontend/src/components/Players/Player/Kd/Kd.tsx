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

import styles from './Kd.module.scss';

const Kd: FC<IProps> = (props) => {
    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <span className={classNames({
            [isDarkTheme ? styles.darkPositive : styles.lightPositive]:
                (props.kd ?? 1.0) > 1.0,
            [isDarkTheme ? styles.darkNegative : styles.lightNegative]:
                (props.kd ?? 1.0) < 1.0,
        })}
        >
            {formatValue(props.kd)}
        </span>
    );
};

export default Kd;
