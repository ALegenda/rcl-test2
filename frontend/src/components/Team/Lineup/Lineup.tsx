import {
    IProps,
} from './types';

import React, {
    FC,
    useEffect,
} from 'react';

import {
    usePlayersLineupByUser,
} from 'instances/players/hooks';

import {
    LineupPlayer,
} from 'components/helpers/instances/teams';
import {
    Loading,
} from 'components/helpers/other';

import styles from './Lineup.module.scss';

const Lineup: FC<IProps> = (props) => {
    const {
        players,
        getPlayersLineup,
    } = usePlayersLineupByUser();

    useEffect(() => {
        (async () => {
            await getPlayersLineup(parseInt(props.id ?? ''));
        })();
    }, [props.id]);

    return (
        <div className={styles.lineupContainer}>
            <div className={styles.lineup}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        Текущий состав
                    </div>
                    <div className={styles.players}>
                        {
                            players ?
                                players.map(
                                    (player) =>
                                        <LineupPlayer
                                            className={styles.player}
                                            key={player.id}
                                            player={player}
                                            lineup={true}
                                        />
                                ) :
                                <Loading size={40}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lineup;
