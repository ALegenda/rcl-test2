import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
    useEffect,
    useState,
} from 'react';
import {
    Link,
    useLocation,
} from 'react-router-dom';

import {
    useDarkTheme,
} from 'helpers/hooks';

import {
    getDefaultQueryUser,
} from 'instances/teams/functions';
import {
    useTeamsStoredByUser,
} from 'instances/teams/hooks';

import {
    Image,
    InfiniteScroll,
    Loading,
} from 'components/helpers/other';

import styles from './TeamsBar.module.scss';

const TeamsBar: FC<IProps> = (props) => {
    const [isPending, setIsPending] = useState(false);

    const {
        teams,
        teamsTotal,
        getTeams,
    } = useTeamsStoredByUser();

    const {
        isDarkTheme,
    } = useDarkTheme();

    const location = useLocation();

    const loadMoreTeams = async (skip: number) => {
        if (isPending) {
            return;
        }

        setIsPending(true);
        await getTeams({
            ...getDefaultQueryUser(),
            skip,
        });
        setIsPending(true);
    };

    useEffect(() => {
        if (teams) {
            return;
        }

        (async () => {
            await loadMoreTeams(0);
        })();
    }, []);

    if (location.pathname.endsWith('/teams')) {
        return null;
    }
    if (!teams || teamsTotal === null) {
        return (
            <Loading/>
        );
    }

    return (
        <InfiniteScroll
            className={
                classNames(
                    isDarkTheme && styles.darkTheme,
                    styles.teamsBar,
                    props.className)
            }
            hasMore={teams.length < teamsTotal}
            loadMore={() => loadMoreTeams(teams.length)}
        >
            {
                teams.map(
                    (team) =>
                        <div
                            key={team.id}
                            className={classNames(styles.team, {
                                [styles.isActive]: location.pathname === `/teams/${team.id}`,
                            })}
                        >
                            <Link to={`/teams/${team.id}`}>
                                <Image
                                    className={styles.icon}
                                    src={team.logo}
                                    mode={'contain'}
                                />
                            </Link>
                        </div>
                )
            }
        </InfiniteScroll>
    );
};

export default TeamsBar;
