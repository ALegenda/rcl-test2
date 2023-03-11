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

import Networks from '../Networks';

import Text from './Text';

import {
    INTL_DATA,
} from './intl';

import leftDarkLogo from './media/left-dark-logo.svg';
import leftLightLogo from './media/left-light-logo.svg';
import rightDarkLogo from './media/right-dark-logo.svg';
import rightLightLogo from './media/right-light-logo.svg';

import styles from './Footer.module.scss';

const Footer: FC<IProps> = (props) => {
    const intl = useIntl();

    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <div className={
            classNames(
                isDarkTheme && styles.darkFooter,
                styles.footer,
                props.className
            )
        }
        >
            <div className={styles.topMobile}>
                <div className={styles.logos}>
                    <img
                        className={styles.topLogo}
                        src={isDarkTheme ? leftDarkLogo : leftLightLogo}
                        alt={''}
                    />
                    <img
                        className={styles.bottomLogo}
                        src={isDarkTheme ? rightDarkLogo : rightLightLogo}
                        alt={''}
                    />
                </div>
                <Text className={styles.text}/>
            </div>
            <div className={styles.top}>
                <img
                    className={styles.leftLogo}
                    src={isDarkTheme ? leftDarkLogo : leftLightLogo}
                    alt={''}
                />
                <div className={styles.middle}>
                    <Text className={styles.text}/>
                    <div className={styles.files}>
                        <a
                            className={styles.agreement}
                            href={`${process.env.PUBLIC_URL}/static/Kartochka_organizacii.pdf`}
                            target={'_blank'}
                            rel={'noreferrer'}
                        >
                            {intl(INTL_DATA.AGREEMENT)}
                        </a>
                        <a
                            className={styles.personalData}
                            href={`${process.env.PUBLIC_URL}/static/Usloviya_polzovania_saitom.docx`}
                            target={'_blank'}
                            rel={'noreferrer'}
                        >
                            {intl(INTL_DATA.PERSONAL_DATE)}
                        </a>
                        <a
                            className={styles.sites}
                            href={`${process.env.PUBLIC_URL}/static/Contacts.pdf`}
                            target={'_blank'}
                            rel={'noreferrer'}
                        >
                            {intl(INTL_DATA.SITES)}
                        </a>
                    </div>
                </div>
                <img
                    className={styles.rightLogo}
                    src={isDarkTheme ? rightDarkLogo : rightLightLogo}
                    alt={''}
                />
            </div>
            <div className={styles.bottom}>
                <div className={styles.copyright}>
                    {intl(INTL_DATA.COPYRIGHT)}
                </div>
                <Networks className={styles.networks}/>
            </div>
        </div>
    );
};

export default Footer;
