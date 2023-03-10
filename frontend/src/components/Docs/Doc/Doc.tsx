import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import {
    useDarkTheme,
    useIntl,
} from 'helpers/hooks';

import {
    INTL_DATA,
} from './intl';

import styles from './Doc.module.scss';

const Doc: FC<IProps> = (props) => {
    const intl = useIntl();

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
                {intl(INTL_DATA.KB)}
            </div>
        </div>
    );
};

export default Doc;
