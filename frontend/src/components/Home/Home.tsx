import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import {
    useDarkTheme,
} from 'helpers/hooks';

import MatchesList from './MatchesList';
import ReportsList from './ReportsList';
import TeamsList from './TeamsList';

import styles from './Home.module.scss';

const Home: FC = () => {
    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <div className={
            classNames(
                styles.home,
                {
                    [styles.isDark]: isDarkTheme,
                }
            )
        }
        >
            <div className={styles.matchesAndPlayers}>
                <MatchesList
                    className={styles.matches}
                    listClassName={styles.list}
                />
            </div>
            <div className={styles.reportsAndTeams}>
                <div className={styles.reportsListContainer}>
                    <ReportsList
                        className={styles.reports}
                        listClassName={styles.list}
                    />
                </div>
                <div className={styles.teamsListContainer}>
                    <TeamsList
                        className={styles.teams}
                        listClassName={styles.list}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
