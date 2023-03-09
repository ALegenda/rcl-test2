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

import styles from './Doc.module.scss';

const Doc: FC<IProps> = (props) => {
    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <div className={
            classNames(
                isDarkTheme && styles.darkTheme,
                styles.doc,
                props.className
            )
        }
        >
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
