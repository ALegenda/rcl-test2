import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import {
    useDarkTheme,
    useIntl,
} from 'helpers/hooks';

import Doc from './Doc';

import {
    INTL_DATA,
} from './intl';

import styles from './Docs.module.scss';

const Docs: FC = () => {
    const intl = useIntl();

    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <div className={
            classNames(
                isDarkTheme && styles.darkDocs,
                styles.docs
            )
        }
        >
            <div className={styles.title}>
                {intl(INTL_DATA.TITLE)}
            </div>
            <div className={styles.subtitle}>
                {intl(INTL_DATA.SUBTITLE)}
            </div>
            <div className={styles.list}>
                <Doc
                    url={`${process.env.PUBLIC_URL}/static/Reglament_Sorevnovaniya_RCL_2023.pdf`}
                    name={'Регламент совернования РКЛ Сезон 2023'}
                    sizeKB={3239}
                />
                <Doc
                    url={`${process.env.PUBLIC_URL}/static/Disciplinarniy_reglament_RCL_2023.pdf`}
                    name={'Дисциплинарный регламент РКЛ Сезон 2023'}
                    sizeKB={650}
                />
                <Doc
                    url={`${process.env.PUBLIC_URL}/static/Polojenie_o_disciplinarnom_komitete_RCL_2023.pdf`}
                    name={'Положение о дисциплинарном комитете РКЛ Сезон 2023'}
                    sizeKB={179}
                />
                <Doc
                    url={`${process.env.PUBLIC_URL}/static/Polohenie_o_prizovom_fonde_RCL_2023.pdf`}
                    name={intl(INTL_DATA.PRIZE)}
                    sizeKB={179}
                />
                <Doc
                    url={`${process.env.PUBLIC_URL}/static/IESF_Statutes_2021.pdf`}
                    name={intl(INTL_DATA.IESF)}
                    sizeKB={726}
                />
                <Doc
                    url={`${process.env.PUBLIC_URL}/static/CSGO_Rulebook.pdf`}
                    name={intl(INTL_DATA.CSGO)}
                    sizeKB={5801}
                />
            </div>
        </div>
    );
};

export default Docs;
