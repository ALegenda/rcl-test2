import classNames from 'classnames';
import React, {
    FC,
    useEffect,
} from 'react';

import {
    useDarkTheme,
} from 'helpers/hooks';

import {
    getDefaultQueryUser,
} from 'instances/reports/functions';
import {
    useReportsByUser,
} from 'instances/reports/hooks';

import {
    InfiniteScroll,
    Loading,
} from 'components/helpers/other';

import Report from './Report';

import styles from './Reports.module.scss';

const Reports: FC = () => {
    const {
        reports,
        reportsTotal,
        getReports,
    } = useReportsByUser();

    const {
        isDarkTheme,
    } = useDarkTheme();

    const loadMoreReports = async (skip: number) => {
        await getReports({
            ...getDefaultQueryUser(),
            skip,
        });
    };

    useEffect(() => {
        (async () => {
            await loadMoreReports(0);
        })();
    }, []);

    if (!reports || reportsTotal === null) {
        return (
            <Loading isPage={true}/>
        );
    }

    return (
        <div className={
            classNames(
                styles.reports,
                {
                    [styles.isDark]: isDarkTheme,
                }
            )
        }
        >
            <InfiniteScroll
                className={styles.list}
                hasMore={reports.length < reportsTotal}
                loadMore={() => loadMoreReports(reports.length)}
            >
                {
                    reports.map(
                        (report) =>
                            <Report
                                key={report.id}
                                report={report}
                            />
                    )
                }
            </InfiniteScroll>
            <div className={styles.magic}/>
        </div>
    );
};

export default Reports;
