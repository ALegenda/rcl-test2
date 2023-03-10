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
} from 'helpers/hooks';

import {
    usePlayerStatsByUser,
} from 'instances/players/hooks';

import {
    Loading,
} from 'components/helpers/other';

import styles from './Stats.module.scss';

const Stats: FC<IProps> = (props) => {
    const {
        stats,
        getStats,
    } = usePlayerStatsByUser();

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
                        Матчей
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.value}>
                        {stats.kills}
                    </div>
                    <div className={styles.characteristic}>
                        Фрагов
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.value}>
                        {stats.deaths}
                    </div>
                    <div className={styles.characteristic}>
                        Смертей
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.value}>
                        {stats.assists}
                    </div>
                    <div className={styles.characteristic}>
                        Помощи
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.value}>
                        {stats.kd?.toFixed(2) ?? '-'}
                    </div>
                    <div className={styles.characteristic}>
                        K/D
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.value}>
                        {stats.kdDiff}
                    </div>
                    <div className={styles.characteristic}>
                        K-D разница
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
