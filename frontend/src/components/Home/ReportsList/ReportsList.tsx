import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
    useEffect,
    useState,
} from 'react';

import {
    useWindowWidth,
} from 'tools/hooks';

import {
    getDefaultQueryUser,
} from 'instances/reports/functions';
import {
    useReportsByUser,
} from 'instances/reports/hooks';

import {
    MagicButton,
} from 'components/helpers/buttons';
import {
    InfiniteScroll,
    Loading,
} from 'components/helpers/other';

import Report from './Report';

import styles from './ReportsList.module.scss';

const ReportsList: FC<IProps> = (props) => {
    const [isPending, setIsPending] = useState(false);

    const {
        windowWidth,
        WINDOW_WIDTH,
    } = useWindowWidth();

    const {
        reports,
        reportsTotal,
        getReports,
    } = useReportsByUser();

    const loadMoreReports = async (skip: number) => {
        if (isPending) {
            return;
        }

        setIsPending(true);
        await getReports({
            ...getDefaultQueryUser(windowWidth),
            skip,
        });
        setIsPending(false);
    };

    useEffect(() => {
        (async () => {
            await loadMoreReports(0);
        })();
    }, []);

    return (
        <div className={classNames(styles.reportsList, props.className)}>
            <div className={styles.title}>
                Новости
            </div>
            {
                reports && reportsTotal !== null ?
                    <InfiniteScroll
                        className={classNames(styles.list, props.listClassName)}
                        hasMore={reports.length < reportsTotal && windowWidth >= WINDOW_WIDTH.W1280}
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
                    </InfiniteScroll> :
                    <Loading size={40}/>
            }
            {
                reports && reportsTotal !== null && reports.length < reportsTotal &&
                <div className={styles.moreButtonContainer}>
                    <MagicButton
                        className={styles.moreButton}
                        onClick={() => loadMoreReports(reports.length)}
                    >
                        Посмотреть остальные
                    </MagicButton>
                </div>
            }
        </div>
    );
};

export default ReportsList;
