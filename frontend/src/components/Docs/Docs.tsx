import React, {
    FC,
} from 'react';

import Doc from './Doc';

import styles from './Docs.module.scss';

const Docs: FC = () => {
    return (
        <div className={styles.docs}>
            <div className={styles.title}>
                Документы
            </div>
            <div className={styles.subtitle}>
                Сезон 2022 – 2023
            </div>
            <div className={styles.list}>
                <Doc
                    url={`${process.env.PUBLIC_URL}/static/Договор_о_соорганизации_и_делегировании_между_РКЛ_и_ФКС_России.pdf`}
                    name={'Договор о соорганизации и делегировании_между РКЛ и ФКС России'}
                    sizeKB={979}
                />
                <Doc
                    url={`${process.env.PUBLIC_URL}/static/Регламент_Соревнования_РКЛ_Сезон_2023_года.pdf`}
                    name={'Регламент Соревнования РКЛ Сезон 2023 года'}
                    sizeKB={761}
                />
                <Doc
                    url={`${process.env.PUBLIC_URL}/static/Положение_о_призовом_фонде_РКЛ_Сезон_2023.pdf`}
                    name={'Положение о призовом фонде РКЛ Сезон 2023'}
                    sizeKB={179}
                />
                <Doc
                    url={`${process.env.PUBLIC_URL}/static/IESF Statutes 2021.pdf`}
                    name={'IESF Statutes 2021'}
                    sizeKB={726}
                />
                <Doc
                    url={`${process.env.PUBLIC_URL}/static/CSGO_Rulebook.pdf`}
                    name={'CSGO_Rulebook'}
                    sizeKB={5801}
                />
            </div>
        </div>
    );
};

export default Docs;
