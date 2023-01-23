import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import styles from './Doc.module.scss';

const Doc: FC<IProps> = (props) => {
    return (
        <div className={classNames(styles.doc, props.className)}>
            <a
                className={styles.name}
                href={props.url}
                target={'_blank'}
                rel={'noreferrer'}
            >
                {props.name}
            </a>
            <div className={styles.size}>
                {props.sizeKB}
                {' '}
                Кб
            </div>
        </div>
    );
};

export default Doc;
