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

import Footer from './Footer';
import Header from './Header';
import TeamsBar from './TeamsBar';

import styles from './Container.module.scss';

const Container: FC<IProps> = (props) => {
    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <div className={
            classNames(
                isDarkTheme && styles.darkContainer,
                styles.container,
                props.containerClassName
            )
        }
        >
            <div className={styles.main}>
                <Header className={styles.header}/>
                <TeamsBar className={styles.teamsBar}/>
                <div className={classNames(styles.content, props.className)}>
                    {props.children}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Container;
