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
    getDefaultQueryUser,
} from 'instances/players/functions';
import {
    usePlayersByUser,
} from 'instances/players/hooks';

import {
    InfiniteScroll,
    Loading,
} from 'components/helpers/other';

import Player from './Player';

import styles from './PlayersList.module.scss';

const PlayersList: FC<IProps> = (props) => {
    const [isPending, setIsPending] = useState(false);

    const {
        players,
        playersTotal,
        getPlayers,
    } = usePlayersByUser();

    const loadMorePlayers = async (skip: number) => {
        if (isPending) {
            return;
        }

        setIsPending(true);
        await getPlayers({
            ...getDefaultQueryUser(),
            skip,
        });
        setIsPending(false);
    };

    useEffect(() => {
        (async () => {
            await loadMorePlayers(0);
        })();
    }, []);

    return (
        <div className={classNames(styles.playersList, props.className)}>
            <div className={styles.title}>
                Игроки
            </div>
            {
                players && playersTotal !== null ?
                    <InfiniteScroll
                        className={classNames(styles.list, props.listClassName)}
                        hasMore={players.length < playersTotal}
                        loadMore={() => loadMorePlayers(players.length)}
                    >
                        {
                            players.map(
                                (player) =>
                                    <Player
                                        key={player.player.id}
                                        player={player}
                                    />
                            )
                        }
                    </InfiniteScroll> :
                    <Loading size={40}/>
            }
        </div>
    );
};

export default PlayersList;
