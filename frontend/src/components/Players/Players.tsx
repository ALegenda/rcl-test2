import classNames from 'classnames';
import React, {
    FC,
    useEffect,
    useState,
} from 'react';

import {
    useWindowWidth,
} from 'tools/hooks';

import {
    getDefaultQueryUser,
} from 'instances/players/functions';
import {
    usePlayersByUser,
} from 'instances/players/hooks';

import {
    MagicButton,
} from 'components/helpers/buttons';
import {
    Container,
    InfiniteScroll,
    Loading,
} from 'components/helpers/other';

import Player from './Player';

import styles from './Players.module.scss';

const Players: FC = () => {
    const [isPending, setIsPending] = useState(false);

    const {
        windowWidth,
        WINDOW_WIDTH,
    } = useWindowWidth();

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

    if (!players || playersTotal === null) {
        return (
            <Loading isPage={true}/>
        );
    }

    return (
        <div className={styles.players}>
            <div className={styles.tableContainer}>
                <div className={styles.table}>
                    <div className={classNames(styles.row, styles.rowTop)}>
                        <div className={styles.column}>
                            Игрок
                        </div>
                        <div className={styles.column}>
                            Команда
                        </div>
                        <div className={styles.column}>
                            Матчей
                        </div>
                        <div className={styles.column}>
                            Фрагов
                        </div>
                        <div className={styles.column}>
                            Помощи
                        </div>
                        <div className={styles.column}>
                            Смертей
                        </div>
                        <div className={styles.column}>
                            K/D
                        </div>
                        <div className={styles.column}>
                            K-D diff
                        </div>
                    </div>
                    <div className={styles.magicTop}/>
                    <InfiniteScroll
                        className={styles.list}
                        hasMore={players.length < playersTotal && windowWidth >= WINDOW_WIDTH.W1280}
                        loadMore={() => loadMorePlayers(players.length)}
                    >
                        {
                            players.map(
                                (player) =>
                                    <Player
                                        playerClassName={styles.player}
                                        rowClassName={styles.row}
                                        key={player.player.id}
                                        player={player}
                                    />
                            )
                        }
                    </InfiniteScroll>
                    <div className={styles.magicBottom}/>
                </div>
            </div>
            {
                players.length < playersTotal &&
                <div className={styles.moreButtonContainer}>
                    <MagicButton
                        className={styles.moreButton}
                        onClick={() => loadMorePlayers(players.length)}
                    >
                        Развернуть
                    </MagicButton>
                </div>
            }
        </div>
    );
};

export default Players;
