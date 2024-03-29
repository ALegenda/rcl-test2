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

import styles from './Team.module.scss';

const Team: FC<IProps> = (props) => {
    return (
        <div className={classNames(styles.team, props.className)}>
            <div className={styles.order}>
                {props.team.place}
            </div>
            <div className={styles.logo}>
                <Link
                    className={styles.logoLink}
                    to={`/teams/${props.team.team.id}`}
                >
                    <img
                        className={styles.logoImage}
                        src={props.team.team.logo}
                        alt={''}
                    />
                </Link>
            </div>
            <div className={styles.points}>
                {props.team.points}
            </div>
            <div className={styles.winsTotal}>
                {props.team.wins}
            </div>
            <div className={styles.draws}>
                {props.team.draws}
            </div>
            <div className={styles.loosesTotal}>
                {props.team.loses}
            </div>
        </div>
    );
};

export default Team;
