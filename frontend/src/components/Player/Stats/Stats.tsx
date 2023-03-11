import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
    useEffect,
} from 'react';

import {
    useDarkTheme,
    useIntl,
} from 'helpers/hooks';

import {
    usePlayerStatsByUser,
} from 'instances/players/hooks';

import {
    Loading,
} from 'components/helpers/other';

import {
    INTL_DATA,
} from './intl';

import styles from './Stats.module.scss';

const Stats: FC<IProps> = (props) => {
    const intl = useIntl();

    const {
        isDarkTheme,
    } = useDarkTheme();

    const {
        stats,
        getStats,
    } = usePlayerStatsByUser();

    useEffect(() => {
        (async () => {
            await getStats(parseInt(props.id ?? ''));
        })();
    }, [props.id]);

    if (!stats) {
        return (
            <Loading/>
        );
    }

    return (
        <div className={
            classNames(
                isDarkTheme && styles.darkStats,
                styles.stats
            )
        }
        >
            <div className={styles.content}>
                <div className={styles.card}>
                    <div className={styles.value}>
                        {stats.games}
                    </div>
                    <div className={styles.characteristic}>
                        {intl(INTL_DATA.MATCHES)}
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.value}>
                        {stats.kills}
                    </div>
                    <div className={styles.characteristic}>
                        {intl(INTL_DATA.KILLS)}
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.value}>
                        {stats.deaths}
                    </div>
                    <div className={styles.characteristic}>
                        {intl(INTL_DATA.DEATHS)}
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.value}>
                        {stats.assists}
                    </div>
                    <div className={styles.characteristic}>
                        {intl(INTL_DATA.ASSISTS)}
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.value}>
                        {stats.kd?.toFixed(2) ?? '-'}
                    </div>
                    <div className={styles.characteristic}>
                        {intl(INTL_DATA.KD)}
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.value}>
                        {stats.kdDiff}
                    </div>
                    <div className={styles.characteristic}>
                        {intl(INTL_DATA.KD_DIFF)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
