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

import Networks from '../Networks';

import Text from './Text';

import leftDarkLogo from './media/leftDarkLogo.svg';
import leftLightLogo from './media/leftLightLogo.svg';
import rightDarkLogo from './media/rightDarkLogo.svg';
import rightLightLogo from './media/rightLightLogo.svg';

import styles from './Footer.module.scss';

const Footer: FC<IProps> = (props) => {
    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <div className={
            classNames(
                isDarkTheme && styles.darkTheme,
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
                            href={`${process.env.PUBLIC_URL}/static/agreement.txt`}
                            target={'_blank'}
                            rel={'noreferrer'}
                        >
                            ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ
                        </a>
                        <a
                            className={styles.personalData}
                            href={`${process.env.PUBLIC_URL}/static/personal-data.txt`}
                            target={'_blank'}
                            rel={'noreferrer'}
                        >
                            ПОЛОЖЕНИЕ ОБ ОБРАБОТКЕ ПЕРСОНАЛЬНЫХ ДАННЫХ ООО &quot;РКЛ&quot;
                        </a>
                        <a
                            className={styles.sites}
                            href={`${process.env.PUBLIC_URL}/static/sites.txt`}
                            target={'_blank'}
                            rel={'noreferrer'}
                        >
                            УСЛОВИЯ ПОЛЬЗОВАНИЯ САЙТАМИ РКЛ
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
                    © RCL 2021—2022 Все права защищены
                </div>
                <Networks className={styles.networks}/>
            </div>
        </div>
    );
};

export default Footer;
