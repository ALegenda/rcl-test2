import classNames from 'classnames';
import React, {
    FC,
    useEffect,
} from 'react';

import {
    useDarkTheme,
} from 'helpers/hooks';

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

    const {
        isDarkTheme,
    } = useDarkTheme();

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
        <div className={
            classNames(
                isDarkTheme && styles.darkTeams,
                styles.teams
            )
        }
        >
            <div className={styles.top}>
                <div className={styles.title}>
                    Клубы
                </div>
                <div className={styles.dateSeason}>
                    Сезон 2022/2023
                </div>
            </div>
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
        </div>
    );
};

export default Teams;
