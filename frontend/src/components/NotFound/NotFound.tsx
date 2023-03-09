import classNames from 'classnames';
import React, {
    FC,
} from 'react';
import {
    Link,
} from 'react-router-dom';

import {
    useDarkTheme,
} from 'helpers/hooks';

import leftDarkLogoImage from './media/left-dark-logo.svg';
import leftLightLogoImage from './media/left-light-logo.svg';
import notFoundImage from './media/not-found.svg';

import styles from './NotFound.module.scss';

const NotFound: FC = () => {
    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <div className={
            classNames(
                isDarkTheme && styles.darkNotFound,
                styles.notFound
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
                    Вернуться на главную
                </Link>
            </div>
            <div className={styles.right}>
                <span className={styles.rightText}>
                    Страница не найдена
                </span>
            </div>
        </div>
    );
};

export default NotFound;
