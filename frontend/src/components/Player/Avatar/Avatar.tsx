import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import {
    useDarkTheme,
} from 'helpers/hooks';

import {
    Image,
} from 'components/helpers/other';

import darkBackgroundLogo from './media/dark-background-logo.svg';
import lightBackgroundLogo from './media/light-background-logo.svg';

import styles from './Avatar.module.scss';

const Avatar: FC<IProps> = (props) => {
    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <div className={
            classNames(
                styles.avatar,
                props.className,
                {
                    [styles.isDark]: isDarkTheme,
                }
            )
        }
        >
            <Image
                className={styles.teamImg}
                src={props.teamSrc}
                mode={'contain'}
            />
            <Image
                className={styles.avatarImg}
                src={props.avatarSrc}
                mode={'contain'}
            />
            <img
                className={styles.backgroundLogo}
                src={isDarkTheme ? darkBackgroundLogo : lightBackgroundLogo}
                alt={''}
            />
        </div>

    );
};

export default Avatar;
