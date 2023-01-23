import React, {
    FC,
    useEffect,
} from 'react';

import {
    getDefaultQueryUser,
} from 'instances/teams/functions';
import {
    useTeamsByUser,
} from 'instances/teams/hooks';

import {
    InfiniteScroll,
    Loading,
} from 'components/helpers/other';

import Team from './Team';

import styles from './Teams.module.scss';

const Teams: FC = () => {
    const {
        teams,
        teamsTotal,
        getTeams,
    } = useTeamsByUser();

    const loadMoreTeams = async (skip: number) => {
        await getTeams({
            ...getDefaultQueryUser(),
            skip,
        });
    };

    useEffect(() => {
        (async () => {
            await loadMoreTeams(0);
        })();
    }, []);

    if (!teams || teamsTotal === null) {
        return (
            <Loading isPage={true}/>
        );
    }

    return (
        <div className={styles.teams}>
            <div className={styles.top}>
                <div className={styles.title}>
                    Клубы
                </div>
                <div className={styles.dateSeason}>
                    Сезон 2022/2023
                </div>
            </div>
            <div className={styles.magicTop}/>
            <InfiniteScroll
                className={styles.list}
                hasMore={teams.length < teamsTotal}
                loadMore={() => loadMoreTeams(teams.length)}
            >
                {
                    teams.map(
                        (team) =>
                            <Team
                                className={styles.team}
                                key={team.id}
                                team={team}
                            />
                    )
                }
            </InfiniteScroll>
            <div className={styles.magicBottom}/>
        </div>
    );
};

export default Teams;
