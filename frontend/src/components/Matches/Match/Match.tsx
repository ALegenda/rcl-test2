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
    formatDate,
    formatTime,
} from 'instances/matches/functions';

import {
    Image,
} from 'components/helpers/other';

import vsImage from './media/vs.svg';

import styles from './Match.module.scss';

const Match: FC<IProps> = (props) => {
    return (
        <div className={classNames(styles.match, props.className)}>
            <Link
                className={styles.date}
                to={`/games/${props.match.id}`}
            >
                {formatDate(props.match.startedAt)}
            </Link>
            <div className={styles.basic}>
                <Image
                    className={styles.teamImage}
                    src={props.match.team1.logo}
                    mode={'contain'}
                />
                <div className={styles.score}>
                    <div>
                        {props.match.team1Score}
                    </div>
                    <div>
                        {props.match.team2Score}
                    </div>
                </div>
                <Image
                    className={styles.teamImage}
                    src={props.match.team2.logo}
                    mode={'contain'}
                />
                <img
                    className={styles.vsImage}
                    src={vsImage}
                    alt={''}
                />
            </div>
            <div className={styles.time}>
                {formatTime(props.match.startedAt)}
            </div>
        </div>
    );
};

export default Match;
