import {
    IProps,
} from './types';

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

import {
    Image,
} from 'components/helpers/other';

import arrowImage from './media/arrow.svg';

import styles from './Report.module.scss';

const Report: FC<IProps> = (props) => {
    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <div className={
            classNames(
                styles.report,
                props.className,
                {
                    [styles.isDark]: isDarkTheme,
                }
            )
        }
        >
            <Image
                className={styles.image}
                src={props.report.imageUrl}
                mode={'cover'}
            />
            <div className={styles.content}>
                <div className={styles.title}>
                    {props.report.title}
                </div>
                <Link
                    to={`/news/${props.report.id}`}
                    className={styles.moreLink}
                >
                    Подробнее
                    <img
                        className={styles.arrowImage}
                        src={arrowImage}
                        alt={''}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Report;
