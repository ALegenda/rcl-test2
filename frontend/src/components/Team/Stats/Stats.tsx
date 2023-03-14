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
    useTeamStatsByUser,
} from 'instances/teams/hooks';

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
        stats,
        getStats,
    } = useTeamStatsByUser();

    const {
        isDarkTheme,
    } = useDarkTheme();

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
                styles.stats,
                props.className,
                {
                    [styles.isDark]: isDarkTheme,
                }
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
                    <div className={classNames(styles.value, styles.center)}>
                        {props.totalWins}
                        {' / '}
                        {props.totalDraws}
                        {' / '}
                        {props.totalLoses}
                    </div>
                    <div className={styles.characteristic}>
                        {intl(INTL_DATA.TOTAL_WDL)}
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
