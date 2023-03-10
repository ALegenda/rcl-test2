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

import styles from './Top.module.scss';

const Top: FC<IProps> = (props) => {
    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <div className={
            classNames(
                isDarkTheme && styles.darkTop,
                styles.top,
                props.className
            )
        }
        >
            <div className={styles.item}>
                Место
            </div>
            <div className={styles.item}>
                Команда
            </div>
            <div className={styles.item}>
                Очки
            </div>
            <div className={styles.item}>
                Победы
            </div>
            <div className={styles.item}>
                Ничьи
            </div>
            <div className={styles.item}>
                Поражения
            </div>
        </div>
    );
};

export default Top;
