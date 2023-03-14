import classNames from 'classnames';
import React, {
    FC,
    useEffect,
    useState,
} from 'react';

import {
    useDarkTheme,
    useIntl,
} from 'helpers/hooks';

import {
    getDefaultQueryUser,
} from 'instances/matches/functions';
import {
    useMatchFinishedByUser,
} from 'instances/matches/hooks';

import Match from 'components/helpers/instances/matches/Match';
import {
    InfiniteScroll,
    Loading,
} from 'components/helpers/other';

import {
    INTL_DATA,
} from './intl';

import styles from './Matches.module.scss';

const Matches: FC = () => {
    const [isPending, setIsPending] = useState(false);

    const intl = useIntl();

    const {
        matches,
        matchesTotal,
        getMatches,
    } = useMatchFinishedByUser();

    const {
        isDarkTheme,
    } = useDarkTheme();

    const loadMoreMatches = async (skip: number) => {
        if (isPending) {
            return;
        }

        setIsPending(true);
        await getMatches({
            ...getDefaultQueryUser(),
            skip,
        });
        setIsPending(false);
    };

    useEffect(() => {
        (async () => {
            await loadMoreMatches(0);
        })();
    }, []);

    if (!matches || matchesTotal === null) {
        return (
            <Loading isPage={true}/>
        );
    }

    return (
        <div className={
            classNames(
                styles.matches,
                {
                    [styles.isDark]: isDarkTheme,
                }
            )
        }
        >
            {
                matchesTotal === 0 ?
                    <div className={styles.emptyResult}>
                        {intl(INTL_DATA.EMPTY_RESULT)}
                    </div> :
                    <div>
                        <InfiniteScroll
                            className={styles.list}
                            hasMore={matches.length < matchesTotal}
                            loadMore={() => loadMoreMatches(matches.length)}
                        >
                            {
                                matches.map(
                                    (match) =>
                                        <Match
                                            key={match.id}
                                            className={styles.match}
                                            match={match}
                                            team1={match.team1}
                                            team2={match.team2}
                                            team1Score={match.team1Score}
                                            team2Score={match.team2Score}
                                        />
                                )
                            }
                        </InfiniteScroll>
                    </div>
            }
        </div>
    );
};

export default Matches;
