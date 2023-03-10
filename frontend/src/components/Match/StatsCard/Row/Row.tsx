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

import styles from './Row.module.scss';

const Row: FC<IProps> = (props) => {
    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <div className={
            classNames(
                isDarkTheme && styles.darkRow,
                styles.row,
                props.className
            )
        }
        >
            {
                props.items.map(
                    (item, i) =>
                        <div
                            key={i}
                            className={styles.item}
                        >
                            {item}
                        </div>
                )
            }
        </div>
    );
};

export default Row;
