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
    useIntl,
} from 'helpers/hooks';

import {
    Image,
} from 'components/helpers/other';

import {
    BACKGROUND_COLOR,
} from './constants';
import {
    INTL_DATA,
} from './intl';

import darkBackgroundLogo from './media/dark-background-logo.svg';
import lightBackgroundLogo from './media/light-background-logo.svg';

import styles from './LineupPlayer.module.scss';

const LineupPlayer: FC<IProps> = (props) => {
    const intl = useIntl();

    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <Link
            className={
                classNames(
                    isDarkTheme && styles.darkLineupPlayer,
                    styles.lineupPlayer,
                    props.className
                )
            }
            to={`/players/${props.player.id}`}
        >
            <div className={
                props.backgroundColor === BACKGROUND_COLOR.GREY ?
                    styles.greyTop :
                    styles.whiteTop
            }
            >
                <Image
                    className={styles.avatarImg}
                    src={props.player.imageUrl}
                    mode={'contain'}
                />
                <img
                    className={styles.backgroundLogo}
                    src={isDarkTheme ? darkBackgroundLogo : lightBackgroundLogo}
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
                    {intl(INTL_DATA.MAPS)}
                </div>
            </div>
        </Link>
    );
};

export default LineupPlayer;
