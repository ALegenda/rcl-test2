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
                styles.player,
                props.className,
                {
                    [styles.isDark]: isDarkTheme,
                }
            )
        }
        >
            {props.nickname}
        </div>
    );
};

export default Player;
