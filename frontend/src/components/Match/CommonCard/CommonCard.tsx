import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import {
    formatDate,
    formatTime,
} from 'instances/matches/functions';

import {
    Image,
} from 'components/helpers/other';

import vsImage from './media/vs.svg';

import styles from './CommonCard.module.scss';

const CommonCard: FC<IProps> = (props) => {
    return (
        <div
            className={classNames(styles.commonCard, props.className)}
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
                        src={vsImage}
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
