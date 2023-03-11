import {
    IProps,
} from './types';

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
    usePlayersLineupByUser,
} from 'instances/players/hooks';

import {
    Loading,
} from 'components/helpers/other';

import Player from './Player';

import {
    INTL_DATA,
} from './intl';

import styles from './TeamCard.module.scss';

const TeamCard: FC<IProps> = (props) => {
    const intl = useIntl();

    const {
        players,
        getPlayersLineup,
    } = usePlayersLineupByUser();

    const {
        isDarkTheme,
    } = useDarkTheme();

    useEffect(() => {
        (async () => {
            await getPlayersLineup(props.id);
        })();
    }, []);

    return (
        <div className={
            classNames(
                isDarkTheme && styles.darkTeamCard,
                styles.teamCard,
                props.className)
        }
        >
            <div className={styles.title}>
                {intl(INTL_DATA.TITLE)}
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
