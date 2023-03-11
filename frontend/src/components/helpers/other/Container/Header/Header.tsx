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
    useIntl,
} from 'helpers/hooks';

import {
    LOCALE,
} from 'instances/translations/constants';
import {
    useTranslationByUser,
} from 'instances/translations/hooks';

import {
    Toggle,
} from 'components/helpers/inputs';

import Networks from '../Networks';

import Tabs from './Tabs';

import {
    INTL_DATA,
} from './intl';

import darkLogoImage from './media/dark-logo.svg';
import lightLogoImage from './media/light-logo.svg';

import styles from './Header.module.scss';

const Header: FC<IProps> = (props) => {
    const intl = useIntl();

    const {
        isDarkTheme,
        setIsDarkTheme,
    } = useDarkTheme();

    const {
        translation,
        getTranslation,
    } = useTranslationByUser();

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
                            {intl(INTL_DATA.TITLE_1)}
                            <br/>
                            {intl(INTL_DATA.TITLE_2)}
                            <br/>
                            {intl(INTL_DATA.TITLE_3)}
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
                <div
                    className={styles.buttonLocale}
                    onClick={
                        () => getTranslation(
                            translation?.locale === LOCALE.RU ?
                                LOCALE.EN :
                                LOCALE.RU
                        )
                    }
                >
                    {translation?.locale}
                </div>
            </div>
            <div className={styles.bottomTabsContainer}>
                <Tabs className={styles.bottomTabs}/>
            </div>
        </div>
    );
};

export default Header;
