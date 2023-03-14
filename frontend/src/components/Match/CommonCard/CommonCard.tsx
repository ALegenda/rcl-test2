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
    formatDate,
    formatTime,
} from 'instances/matches/functions';

import {
    Image,
} from 'components/helpers/other';

import darkVsImage from './media/vs-dark.svg';
import lightVsImage from './media/vs-light.svg';

import styles from './CommonCard.module.scss';

const CommonCard: FC<IProps> = (props) => {
    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <div
            className={
                classNames(
                    styles.commonCard,
                    props.className,
                    {
                        [styles.isDark]: isDarkTheme,
                    }
                )
            }
            onClick={props.onClick}
        >
            <div className={styles.date}>
                {formatDate(props.startedAt)}
            </div>
            <div className={styles.content}>
                <Image
                    className={styles.teamImage}
                    src={props.team1.logo}
                    mode={'contain'}
                />
                <div className={styles.result}>
                    <div className={styles.value}>
                        {props.team1Score}
                    </div>
                    <div className={styles.value}>
                        {props.team2Score}
                    </div>
                    <img
                        className={styles.vsImage}
                        src={isDarkTheme ? darkVsImage : lightVsImage}
                        alt={''}
                    />
                </div>
                <Image
                    className={styles.teamImage}
                    src={props.team2.logo}
                    mode={'contain'}
                />
            </div>
            <div className={styles.time}>
                {formatTime(props.startedAt)}
            </div>
        </div>
    );
};

export default CommonCard;
