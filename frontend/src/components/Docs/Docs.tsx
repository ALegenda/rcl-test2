import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import {
    useDarkTheme,
} from 'helpers/hooks';

import Doc from './Doc';

import styles from './Docs.module.scss';

const Docs: FC = () => {
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
                Документы
            </div>
            <div className={styles.subtitle}>
                Сезон 2022 – 2023
            </div>
            <div className={styles.list}>
                <Doc
                    url={`${process.env.PUBLIC_URL}/static/Polohenie_o_prizovom_fonde_RCL_2023.pdf`}
                    name={'Положение о призовом фонде РКЛ Сезон 2023'}
                    sizeKB={179}
                />
                <Doc
                    url={`${process.env.PUBLIC_URL}/static/IESF_Statutes_2021.pdf`}
                    name={'IESF Statutes 2021'}
                    sizeKB={726}
                />
                <Doc
                    url={`${process.env.PUBLIC_URL}/static/CSGO_Rulebook.pdf`}
                    name={'CSGO Rulebook'}
                    sizeKB={5801}
                />
            </div>
        </div>
    );
};

export default Docs;
