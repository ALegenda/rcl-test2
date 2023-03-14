import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import {
    useDarkTheme,
    useIntl,
} from 'helpers/hooks';

import {
    INTL_DATA,
} from './intl';

import styles from './Top.module.scss';

const Top: FC<IProps> = (props) => {
    const intl = useIntl();

    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <div className={
            classNames(
                styles.top,
                props.className,
                {
                    [styles.isDark]: isDarkTheme,
                }
            )
        }
        >
            <div className={styles.item}>
                {intl(INTL_DATA.PLACE)}
            </div>
            <div className={styles.item}>
                {intl(INTL_DATA.TEAM)}
            </div>
            <div className={styles.item}>
                {intl(INTL_DATA.SCORE)}
            </div>
            <div className={styles.item}>
                {intl(INTL_DATA.WINS)}
            </div>
            <div className={styles.item}>
                {intl(INTL_DATA.DRAWS)}
            </div>
            <div className={styles.item}>
                {intl(INTL_DATA.LOSSED)}
            </div>
            <div className={classNames(styles.item, styles.endItem)}>
                {intl(INTL_DATA.GAMES)}
            </div>
        </div>
    );
};

export default Top;
