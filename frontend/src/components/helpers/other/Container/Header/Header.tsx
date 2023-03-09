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

import {
    Toggle,
} from 'components/helpers/inputs';

import Networks from '../Networks';

import Tabs from './Tabs';

import darkLogoImage from './media/dark-logo.svg';
import lightLogoImage from './media/light-logo.svg';

import styles from './Header.module.scss';

const Header: FC<IProps> = (props) => {
    const {
        isDarkTheme,
        setIsDarkTheme,
    } = useDarkTheme();

    return (
        <div className={
            classNames(
                isDarkTheme && styles.darkHeader,
                styles.header,
                props.className
            )
        }
        >
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Link
                        className={styles.logo}
                        to={'/'}
                    >
                        <img
                            src={isDarkTheme ? lightLogoImage : darkLogoImage}
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
                <Toggle
                    isMode={isDarkTheme}
                    setIsMode={() => setIsDarkTheme(!isDarkTheme)}
                />
            </div>
            <div className={styles.bottomTabsContainer}>
                <Tabs className={styles.bottomTabs}/>
            </div>
        </div>
    );
};

export default Header;
