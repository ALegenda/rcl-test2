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
    Image,
} from 'components/helpers/other';

import backgroundLogo from './media/backgroundLogo.svg';

import styles from './LineupPlayer.module.scss';

const LineupPlayer: FC<IProps> = (props) => {
    return (
        <Link
            className={classNames(styles.lineupPlayer, props.className)}
            to={`/players/${props.player.id}`}
        >
            <div className={props.lineup ? styles.greyTop : styles.whiteTop}>
                <Image
                    className={styles.avatarImg}
                    src={props.player.imageUrl}
                    mode={'contain'}
                />
                <img
                    className={styles.backgroundLogo}
                    src={backgroundLogo}
                    alt={''}
                />
            </div>
            <div className={styles.bottom}>
                <div className={styles.name}>
                    <Image
                        className={styles.countryLogo}
                        src={props.player.countryLogo}
                        mode={'contain'}
                    />
                    {props.player.nickName}
                </div>
                <div className={styles.maps}>
                    {props.player.totalMaps}
                    {' '}
                    Карт
                </div>
            </div>
        </Link>
    );
};

export default LineupPlayer;
