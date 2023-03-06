import {
    IProps,
} from './types';

import React, {
    FC,
} from 'react';

import styles from './Toggle.module.scss';

const Toggle: FC<IProps> = (props) => {
    return (
        <div
            className={styles.toggle}
            onClick={props.setIsMode}
        >
            <input
                type={'checkbox'}
                checked={props.isMode}
                onChange={props.setIsMode}
                onClick={props.setIsMode}
            />
            <span/>
        </div>
    );
};

export default Toggle;
