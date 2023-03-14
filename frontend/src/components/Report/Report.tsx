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
    useIntl,
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

import {
    INTL_DATA,
} from './intl';

import styles from './Report.module.scss';

const Report: FC = () => {
    const intl = useIntl();

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
                styles.report,
                {
                    [styles.isDark]: isDarkTheme,
                }
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
                    {intl(INTL_DATA.OTHER_NEWS)}
                </PrimaryButton>
            </div>
        </div>
    );
};

export default Report;
