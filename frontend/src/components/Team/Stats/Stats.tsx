import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
    useEffect,
} from 'react';

import {
    useTeamByUser,
} from 'instances/teams/hooks';

import {
    Loading,
} from 'components/helpers/other';

import styles from './Stats.module.scss';

const Stats: FC<IProps> = (props) => {
    const {
        stats,
        getStats,
    } = useTeamByUser();

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
        <div className={styles.stats}>
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
                    <div className={classNames(styles.value, styles.center)}>
                        {props.totalWins}
                        {' / '}
                        {props.totalDraws}
                        {' / '}
                        {props.totalLoses}
                    </div>
                    <div className={styles.characteristic}>
                        Победы / ничьи / поражения
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.value}>
                        {stats.kills}
                    </div>
                    <div className={styles.characteristic}>
                        Итого фрагов
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.value}>
                        {stats.deaths}
                    </div>
                    <div className={styles.characteristic}>
                        Итого смертей
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
