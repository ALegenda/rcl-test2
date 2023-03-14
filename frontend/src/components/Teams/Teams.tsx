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

import {
    INTL_DATA,
} from './intl';

import styles from './Teams.module.scss';

const Teams: FC = () => {
    const intl = useIntl();

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
                styles.teams,
                {
                    [styles.isDark]: isDarkTheme,
                }
            )
        }
        >
            <div className={styles.top}>
                <div className={styles.title}>
                    {intl(INTL_DATA.TITLE)}
                </div>
                <div className={styles.dateSeason}>
                    {intl(INTL_DATA.SUBTITLE)}
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
