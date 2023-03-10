import {
    IParams,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
    useEffect,
} from 'react';
import {
    useParams,
} from 'react-router-dom';

import {
    formatDate,
} from 'tools/functions';

import {
    useDarkTheme,
} from 'helpers/hooks';

import {
    useReportByUser,
} from 'instances/reports/hooks';

import {
    Image,
    Loading,
    MultilineText,
} from 'components/helpers/other';

import {
    PrimaryButton,
} from '../helpers/buttons';

import styles from './Report.module.scss';

const Report: FC = () => {
    const {
        id,
    } = useParams<IParams>();

    const {
        report,
        getReport,
    } = useReportByUser();

    const {
        isDarkTheme,
    } = useDarkTheme();

    useEffect(() => {
        (async () => {
            await getReport(parseInt(id ?? ''));
        })();
    }, []);

    if (!report) {
        return (
            <Loading isPage={true}/>
        );
    }

    return (
        <div className={
            classNames(
                isDarkTheme && styles.darkReport,
                styles.report
            )
        }
        >
            <Image
                className={styles.image}
                src={report.imageUrl}
                mode={'cover'}
            />
            <div className={styles.date}>
                {formatDate(report.createdDate)}
            </div>
            <div className={styles.main}>
                <div className={styles.title}>
                    {report.title}
                </div>
                <div className={styles.content}>
                    <MultilineText text={report.content}/>
                </div>
            </div>
            <div className={styles.anotherContainer}>
                <PrimaryButton
                    to={'/news'}
                    className={styles.anotherButton}
                >
                    Другие новости
                </PrimaryButton>
            </div>
        </div>
    );
};

export default Report;
