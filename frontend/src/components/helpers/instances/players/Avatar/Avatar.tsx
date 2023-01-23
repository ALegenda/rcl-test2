import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import {
    Image,
} from 'components/helpers/other';

import backgroundLogo from './media/backgroundLogo.svg';

import styles from './Avatar.module.scss';

const Avatar: FC<IProps> = (props) => {
    return (
        <div className={classNames(styles.avatar, props.className)}>
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
                src={backgroundLogo}
                alt={''}
            />
        </div>

    );
};

export default Avatar;
