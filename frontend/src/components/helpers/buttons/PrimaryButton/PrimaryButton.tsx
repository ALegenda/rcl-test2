import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';
import {
    Link,
} from 'react-router-dom';

import {
    useDarkTheme,
} from 'helpers/hooks';

import styles from './PrimaryButton.module.scss';

const PrimaryButton: FC<IProps> = (props) => {
    const {
        isDarkTheme,
    } = useDarkTheme();

    if (props.to) {
        return (
            <Link
                to={props.to}
                className={
                    classNames(
                        styles.primaryButton,
                        styles.link,
                        props.className,
                        {
                            [styles.isDark]: isDarkTheme,
                        }
                    )
                }
                onClick={props.onClick}
            >
                {props.children}
            </Link>
        );
    }

    return (
        <button
            className={
                classNames(
                    styles.primaryButton,
                    props.className,
                    {
                        [styles.isDark]: isDarkTheme,
                    }
                )
            }
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default PrimaryButton;
