import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
    useEffect,
} from 'react';

import {
    usePlayersLineupByUser,
} from 'instances/players/hooks';

import {
    Loading,
} from 'components/helpers/other';

import Player from './Player';

import styles from './TeamCard.module.scss';

const TeamCard: FC<IProps> = (props) => {
    const {
        players,
        getPlayersLineup,
    } = usePlayersLineupByUser();

    useEffect(() => {
        (async () => {
            await getPlayersLineup(props.id);
        })();
    }, []);

    return (
        <div className={classNames(styles.teamCard, props.className)}>
            <div className={styles.title}>
                Актуальный состав
            </div>
            <div className={styles.list}>
                {
                    players ?
                        players.map(
                            (player) =>
                                <Player
                                    key={player.id}
                                    player={player}
                                />
                        ) :
                        <Loading size={40}/>
                }
            </div>
        </div>
    );
};

export default TeamCard;
