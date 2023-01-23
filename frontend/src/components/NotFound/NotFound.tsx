import React, {
    FC,
} from 'react';
import {
    Link,
} from 'react-router-dom';

import leftLogoImage from './media/left-logo.svg';
import notFoundImage from './media/not-found.svg';

import styles from './NotFound.module.scss';

const NotFound: FC = () => {
    return (
        <div className={styles.notFound}>
            <div className={styles.left}>
                <img
                    className={styles.leftLogo}
                    src={leftLogoImage}
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
