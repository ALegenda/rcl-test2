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
    useDarkTheme,
    useIntl,
} from 'helpers/hooks';

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
    InfiniteScroll,
    Loading,
} from 'components/helpers/other';

import Player from './Player';

import {
    INTL_DATA,
} from './intl';

import styles from './Players.module.scss';

const Players: FC = () => {
    const [isPending, setIsPending] = useState(false);

    const intl = useIntl();

    const {
        windowWidth,
        WINDOW_WIDTH,
    } = useWindowWidth();

    const {
        players,
        playersTotal,
        getPlayers,
    } = usePlayersByUser();

    const {
        isDarkTheme,
    } = useDarkTheme();

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
        <div className={
            classNames(
                isDarkTheme && styles.darkPlayers,
                styles.players
            )
        }
        >
            <div className={styles.tableContainer}>
                <div className={styles.table}>
                    <div className={classNames(styles.row, styles.rowTop)}>
                        <div className={styles.column}>
                            {intl(INTL_DATA.PLAYER)}
                        </div>
                        <div className={styles.column}>
                            {intl(INTL_DATA.TEAM)}
                        </div>
                        <div className={styles.column}>
                            {intl(INTL_DATA.MATCHES)}
                        </div>
                        <div className={styles.column}>
                            {intl(INTL_DATA.KILLS)}
                        </div>
                        <div className={styles.column}>
                            {intl(INTL_DATA.ASSISTS)}
                        </div>
                        <div className={styles.column}>
                            {intl(INTL_DATA.DEATHS)}
                        </div>
                        <div className={styles.column}>
                            {intl(INTL_DATA.KD)}
                        </div>
                        <div className={styles.column}>
                            {intl(INTL_DATA.KD_DIFF)}
                        </div>
                    </div>
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
