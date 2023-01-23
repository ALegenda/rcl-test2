import {
    IProps,
} from './types';

import React, {
    FC,
} from 'react';
import {
    Link,
} from 'react-router-dom';

import {
    formatDateTime,
} from 'tools/functions';

import {
    Image,
    MultilineText,
} from 'components/helpers/other';

import styles from './Report.module.scss';

const Report: FC<IProps> = (props) => {
    return (
        <div className={styles.report}>
            <Image
                className={styles.image}
                src={props.report.imageUrl}
                mode={'cover'}
            />
            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.date}>
                        {formatDateTime(props.report.createdDate)}
                    </div>
                    <div className={styles.title}>
                        {props.report.title}
                    </div>
                    <div className={styles.promo}>
                        <MultilineText text={props.report.promo}/>
                    </div>
                </div>
                <Link
                    className={styles.more}
                    to={`/news/${props.report.id}`}
                >
                    Читать подробнее
                </Link>
            </div>
        </div>
    );
};

export default Report;
