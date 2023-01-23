import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import styles from './MagicButton.module.scss';

const MagicButton: FC<IProps> = (props) => {
    return (
        <button
            className={classNames(styles.magicButton, props.className)}
            disabled={props.isDisabled}
            onClick={props.onClick}
        >
            {props.children}
            <div className={styles.magic}/>
        </button>
    );
};

export default MagicButton;
