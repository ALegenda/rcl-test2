import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import styles from './Player.module.scss';

const Player: FC<IProps> = (props) => {
    return (
        <div className={classNames(styles.player, props.className)}>
            {props.nickname}
        </div>
    );
};

export default Player;
