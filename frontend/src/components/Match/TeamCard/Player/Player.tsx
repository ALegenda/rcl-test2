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

import darkBackgroundImage from './media/dark-background-logo.svg';
import lightBackgroundImage from './media/light-background-logo.svg';

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
                    props.className)
            }
            to={`/players/${props.player.id}`}
        >
            <div className={styles.avatar}>
                <img
                    className={styles.backgroundImage}
                    src={isDarkTheme ? darkBackgroundImage : lightBackgroundImage}
                    alt={''}
                />
                <Image
                    className={styles.avatarImage}
                    src={props.player.imageUrl}
                    mode={'contain'}
                />
            </div>
            <div className={styles.name}>
                <img
                    className={styles.countryImage}
                    src={props.player.countryLogo}
                    alt={''}
                />
                <span className={styles.nickname}>
                    {props.player.nickName}
                </span>
            </div>
        </Link>
    );
};

export default Player;
