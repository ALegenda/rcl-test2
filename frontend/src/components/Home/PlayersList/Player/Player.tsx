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
    useIntl,
} from 'helpers/hooks';

import {
    Image,
} from 'components/helpers/other';

import {
    INTL_DATA,
} from './intl';

import backgroundImage from './media/background.svg';

import styles from './Player.module.scss';

const Player: FC<IProps> = (props) => {
    const intl = useIntl();

    return (
        <Link
            className={classNames(styles.player, props.className)}
            to={`/players/${props.player.player.id}`}
        >
            <div className={styles.avatar}>
                <img
                    className={styles.backgroundImage}
                    src={backgroundImage}
                    alt={''}
                />
                <Image
                    className={styles.avatarImage}
                    src={props.player.player.imageUrl}
                    mode={'contain'}
                />
            </div>
            <div className={styles.name}>
                <img
                    className={styles.countryImage}
                    src={props.player.player.countryLogo}
                    alt={''}
                />
                <div className={styles.nickName}>
                    {props.player.player.nickName}
                </div>
            </div>
            <div className={styles.stats}>
                {props.player.stats.kills}
                {' '}
                {intl(INTL_DATA.FRAGS)}
            </div>
        </Link>
    );
};

export default Player;
