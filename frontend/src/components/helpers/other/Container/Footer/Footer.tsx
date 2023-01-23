import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import Networks from '../Networks';

import Text from './Text';

import leftLogo from './media/left-logo.svg';
import rightLogo from './media/right-logo.svg';

import styles from './Footer.module.scss';

const Footer: FC<IProps> = (props) => {
    return (
        <div className={classNames(styles.footer, props.className)}>
            <div className={styles.topMobile}>
                <div className={styles.logos}>
                    <img
                        className={styles.topLogo}
                        src={leftLogo}
                        alt={''}
                    />
                    <img
                        className={styles.bottomLogo}
                        src={rightLogo}
                        alt={''}
                    />
                </div>
                <Text className={styles.text}/>
            </div>
            <div className={styles.top}>
                <img
                    className={styles.leftLogo}
                    src={leftLogo}
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
                    src={rightLogo}
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
