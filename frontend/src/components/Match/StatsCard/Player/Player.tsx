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

import styles from './Player.module.scss';

const Player: FC<IProps> = (props) => {
    return (
        <div className={classNames(styles.player, props.className)}>
            <Image
                className={styles.countryLogo}
                src={props.countryLogo}
                mode={'contain'}
            />
            {props.nickname}
        </div>
    );
};

export default Player;
