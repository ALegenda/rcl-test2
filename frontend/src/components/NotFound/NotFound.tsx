import classNames from 'classnames';
import React, {
    FC,
} from 'react';
import {
    Link,
} from 'react-router-dom';

import {
    useDarkTheme,
    useIntl,
} from 'helpers/hooks';

import {
    INTL_DATA,
} from './intl';

import leftDarkLogoImage from './media/left-dark-logo.svg';
import leftLightLogoImage from './media/left-light-logo.svg';
import notFoundImage from './media/not-found.svg';

import styles from './NotFound.module.scss';

const NotFound: FC = () => {
    const intl = useIntl();

    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <div className={
            classNames(
                styles.notFound,
                {
                    [styles.isDark]: isDarkTheme,
                }
            )
        }
        >
            <div className={styles.left}>
                <img
                    className={styles.leftLogo}
                    src={isDarkTheme ? leftDarkLogoImage : leftLightLogoImage}
                    alt={''}
                />
            </div>
            <div className={styles.main}>
                <img
                    className={styles.notFoundImage}
                    src={notFoundImage}
                    alt={''}
                />
                <Link
                    className={styles.mainButton}
                    to={'/'}
                >
                    {intl(INTL_DATA.BUTTON_TXT)}
                </Link>
            </div>
            <div className={styles.right}>
                <span className={styles.rightText}>
                    {intl(INTL_DATA.TEXT)}
                </span>
            </div>
        </div>
    );
};

export default NotFound;
