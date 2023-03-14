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
            onClick={props.onChange}
        >
            <input
                type={'checkbox'}
                checked={props.value}
                onChange={props.onChange}
                onClick={props.onChange}
            />
            <span/>
        </div>
    );
};

export default Toggle;
