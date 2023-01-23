import {
    IParams,
} from './types';

import React, {
    FC,
    useEffect,
    useState,
} from 'react';
import {
    useParams,
} from 'react-router-dom';

import {
    useMatchByUser,
} from 'instances/matches/hooks';

import {
    Loading,
} from 'components/helpers/other';

import CommonCard from './CommonCard';
import MapsCard from './MapsCard';
import StatsCard from './StatsCard';
import TeamCard from './TeamCard';

import styles from './Match.module.scss';

const Match: FC = () => {
    const [isPendingMap, setIsPendingMap] = useState(false);

    const {
        id,
    } = useParams<IParams>();

    const {
        match,
        matchMap,
        getMatch,
        getMatchMap,
        resetMatchMap,
    } = useMatchByUser();

    const onChooseMap = async (id: number) => {
        if (isPendingMap) {
            return;
        }

        setIsPendingMap(true);
        await getMatchMap(id);
        setIsPendingMap(false);
    };

    useEffect(() => {
        (async () => {
            await getMatch(parseInt(id ?? ''));
        })();
    }, []);

    if (!match) {
        return (
            <Loading isPage={true}/>
        );
    }

    return (
        <div className={styles.match}>
            <div className={styles.left}>
                <div className={styles.commonCardContainer}>
                    <CommonCard
                        className={styles.commonCard}
                        team1={match.teams[0]}
                        team1Score={match.team1Score}
                        team2={match.teams[1]}
                        team2Score={match.team2Score}
                        startedAt={match.startedAt}
                        onClick={resetMatchMap}
                    />
                </div>
                <div className={styles.mapsCardContainer}>
                    <MapsCard
                        className={styles.mapsCard}
                        maps={match.maps}
                        teams={match.teams}
                        matchId={match.id}
                        onChoose={onChooseMap}
                    />
                </div>
            </div>
            <div className={styles.statsCardContainer}>
                <StatsCard
                    className={styles.statsCard}
                    team1={match.teams[0]}
                    team2={match.teams[1]}
                    team1Stats={matchMap?.team1Stats ?? match.team1Stats}
                    team2Stats={matchMap?.team2Stats ?? match.team2Stats}
                    isPending={isPendingMap}
                />
            </div>
            <div className={styles.right}>
                <div className={styles.teamCardContainer}>
                    <TeamCard
                        className={styles.team1Card}
                        id={match.team1Id}
                    />
                </div>
                <div className={styles.teamCardContainer}>
                    <TeamCard
                        className={styles.team2Card}
                        id={match.team2Id}
                    />
                </div>
            </div>
        </div>
    );
};

export default Match;
