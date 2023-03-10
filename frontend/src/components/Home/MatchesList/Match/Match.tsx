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
    formatDate,
    formatTime,
} from 'instances/matches/functions';

import {
    Image,
} from 'components/helpers/other';

import darkVsImage from './media/vs-dark.svg';
import lightVsImage from './media/vs-light.svg';

import styles from './Match.module.scss';

const Match: FC<IProps> = (props) => {
    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <div className={
            classNames(
                isDarkTheme && styles.darkMatch,
                styles.match,
                props.className
            )
        }
        >
            <Link
                className={styles.date}
                to={`/games/${props.match.id}`}
            >
                {formatDate(props.match.startedAt)}
            </Link>
            <div className={styles.vs}>
                <Image
                    className={styles.teamImage}
                    src={props.match.team1.logo}
                    mode={'contain'}
                />
                <img
                    className={styles.vsImage}
                    src={isDarkTheme ? darkVsImage : lightVsImage}
                    alt={''}
                />
                <Image
                    className={styles.teamImage}
                    src={props.match.team2.logo}
                    mode={'contain'}
                />
            </div>
            <div className={styles.time}>
                {formatTime(props.match.startedAt)}
            </div>
        </div>
    );
};

export default Match;
