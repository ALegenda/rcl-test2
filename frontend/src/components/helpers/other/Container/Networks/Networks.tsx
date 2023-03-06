import {
    IProps,
} from './types';

import classNames from 'classnames';
import config from 'config';
import React, {
    FC,
} from 'react';

import {
    useDarkTheme,
} from 'helpers/hooks';

import twitchBlueImage from './media/twitchBlue.svg';
import twitchDarkImage from './media/twitchDark.svg';
import vkBlueImage from './media/vkBlue.svg';
import vkDarkImage from './media/vkDark.svg';
import youtubeBlueImage from './media/youtubeBlue.svg';
import youtubeDarkImage from './media/youtubeDark.svg';

import styles from './Networks.module.scss';

const Networks: FC<IProps> = (props) => {
    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <div className={classNames(styles.networks, props.className)}>
            <a
                className={styles.network}
                href={config.VK_URL}
                target={'_blank'}
                rel={'noreferrer'}
            >
                <img
                    src={isDarkTheme ? vkBlueImage : vkDarkImage}
                    alt={''}
                />
            </a>
            <a
                className={styles.network}
                href={config.TWITCH_URL}
                target={'_blank'}
                rel={'noreferrer'}
            >
                <img
                    src={isDarkTheme ? twitchBlueImage : twitchDarkImage}
                    alt={''}
                />
            </a>
            <a
                className={styles.network}
                href={config.YOUTUBE_URL}
                target={'_blank'}
                rel={'noreferrer'}
            >
                <img
                    src={isDarkTheme ? youtubeBlueImage : youtubeDarkImage}
                    alt={''}
                />
            </a>
        </div>
    );
};

export default Networks;
