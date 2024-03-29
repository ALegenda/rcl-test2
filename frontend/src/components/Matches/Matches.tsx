import React, {
    FC,
    useEffect,
    useState,
} from 'react';

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

import styles from './Matches.module.scss';

const Matches: FC = () => {
    const [isPending, setIsPending] = useState(false);

    const {
        matches,
        matchesTotal,
        getMatches,
    } = useMatchFinishedByUser();

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
        <div className={styles.matches}>
            {
                matchesTotal === 0 ?
                    <div className={styles.emptyResult}>
                        Ни один матч еще не завершён. Следите за обновлениями!
                    </div> :
                    <div>
                        <div className={styles.magicTop}></div>
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
                        <div className={styles.magicBottom}></div>
                    </div>
            }
        </div>
    );
};

export default Matches;
