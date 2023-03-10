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
                isDarkTheme && styles.darkHome,
                styles.home
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
                <ReportsList
                    className={styles.reports}
                    listClassName={styles.list}
                />
                <TeamsList
                    className={styles.teams}
                    listClassName={styles.list}
                />
            </div>
        </div>
    );
};

export default Home;
