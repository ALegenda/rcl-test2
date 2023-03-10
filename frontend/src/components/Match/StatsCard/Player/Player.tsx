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

import styles from './Player.module.scss';

const Player: FC<IProps> = (props) => {
    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <div className={
            classNames(
                isDarkTheme && styles.darkPlayer,
                styles.player,
                props.className
            )
        }
        >
            {props.nickname}
        </div>
    );
};

export default Player;
