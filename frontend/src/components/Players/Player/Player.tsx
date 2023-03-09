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

import Diff from './Diff';
import Kd from './Kd';

import styles from './Player.module.scss';

const Player: FC<IProps> = (props) => {
    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <Link
            className={
                classNames(
                    isDarkTheme && styles.darkPlayer,
                    styles.player,
                    props.playerClassName
                )
            }
            to={`/players/${props.player.player.id}`}
        >
            <div className={classNames(styles.row, props.rowClassName)}>
                <div className={classNames(styles.column, styles.firstColumn)}>
                    <Image
                        className={styles.countryImage}
                        src={props.player.player.countryLogo}
                        mode={'contain'}
                    />
                    <Image
                        className={styles.playerImage}
                        src={props.player.player.imageUrl}
                        mode={'cover'}
                    />
                    {props.player.player.nickName}
                </div>
                <div className={styles.column}>
                    <Image
                        className={styles.teamImage}
                        src={props.player.team.logo}
                        mode={'contain'}
                    />
                </div>
                <div className={styles.column}>
                    {props.player.stats.games}
                </div>
                <div className={styles.column}>
                    {props.player.stats.kills}
                </div>
                <div className={styles.column}>
                    {props.player.stats.assists}
                </div>
                <div className={styles.column}>
                    {props.player.stats.deaths}
                </div>
                <div className={styles.column}>
                    <Kd kd={props.player.stats.kd}/>
                </div>
                <div className={styles.column}>
                    <Diff diff={props.player.stats.kdDiff}/>
                </div>
            </div>
        </Link>
    );
};

export default Player;
