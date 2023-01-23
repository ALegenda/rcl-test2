import {
    IProps,
} from './types';

import classNames from 'classnames';
import config from 'config';
import React, {
    FC,
} from 'react';

import twitchImage from './media/icons8-twitch.svg';
import vkImage from './media/VK_logo_Black.svg';
import youtubeImage from './media/youtube-svgrepo.svg';

import styles from './Networks.module.scss';

const Networks: FC<IProps> = (props) => {
    return (
        <div className={classNames(styles.networks, props.className)}>
            <a
                className={styles.network}
                href={config.VK_URL}
                target={'_blank'}
                rel={'noreferrer'}
            >
                <img
                    src={vkImage}
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
                    src={twitchImage}
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
                    src={youtubeImage}
                    alt={''}
                />
            </a>
        </div>
    );
};

export default Networks;
