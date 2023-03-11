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

import {
    InfiniteScroll,
    Loading,
} from 'components/helpers/other';

import Match from './Match';

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
                isDarkTheme && styles.darkMatches,
                styles.matches
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
                                            match={match}
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
