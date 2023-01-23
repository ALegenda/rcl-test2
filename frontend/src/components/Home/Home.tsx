import React, {
    FC,
} from 'react';

import MatchesList from './MatchesList';
import PlayersList from './PlayersList';
import ReportsList from './ReportsList';
import TeamsList from './TeamsList';

import styles from './Home.module.scss';

const Home: FC = () => {
    return (
        <div className={styles.home}>
            <div className={styles.matchesAndPlayers}>
                <MatchesList
                    className={styles.matches}
                    listClassName={styles.list}
                />
                <PlayersList
                    className={styles.players}
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
