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

import Networks from '../Networks';

import Tabs from './Tabs';

import logoImage from './media/logo.svg';

import styles from './Header.module.scss';

const Header: FC<IProps> = (props) => {
    return (
        <div className={classNames(styles.header, props.className)}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Link
                        className={styles.logo}
                        to={'/'}
                    >
                        <img
                            src={logoImage}
                            alt={''}
                        />
                        <div className={styles.title}>
                            Российская
                            <br/>
                            Киберспортивная
                            <br/>
                            Лига
                        </div>
                    </Link>
                </div>
                <div className={styles.tabsContainer}>
                    <Tabs/>
                </div>
                <Networks/>
            </div>
            <div className={styles.bottomTabsContainer}>
                <Tabs className={styles.bottomTabs}/>
            </div>
        </div>
    );
};

export default Header;
