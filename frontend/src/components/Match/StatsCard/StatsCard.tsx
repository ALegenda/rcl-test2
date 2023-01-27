import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import {
    Image,
    Loading,
} from 'components/helpers/other';

import Player from './Player';
import Row from './Row';

import styles from './StatsCard.module.scss';

const StatsCard: FC<IProps> = (props) => {
    return (
        <div className={classNames(styles.statsCard, props.className)}>
            {
                props.isPending ?
                    <Loading
                        className={styles.row}
                        size={40}
                    /> :
                    <>
                        <Row
                            className={classNames(styles.row, styles.titleRow)}
                            items={[
                                <Image
                                    key={0}
                                    className={styles.teamLogo}
                                    src={props.team1.logo}
                                    mode={'contain'}
                                />,
                                'K',
                                'D',
                                'A',
                            ]}
                        />
                        {
                            props.team1Stats.map(
                                (stats) =>
                                    <Row
                                        key={stats.playerId}
                                        className={styles.row}
                                        items={[
                                            <Player
                                                key={0}
                                                nickname={stats.nickName}
                                            />,
                                            stats.kills,
                                            stats.deaths,
                                            stats.assists,
                                        ]}
                                    />
                            )
                        }
                        <Row
                            className={classNames(styles.row, styles.titleRow)}
                            items={[
                                <Image
                                    key={0}
                                    className={styles.teamLogo}
                                    src={props.team2.logo}
                                    mode={'contain'}
                                />,
                                '',
                                '',
                                '',
                            ]}
                        />
                        {
                            props.team2Stats.map(
                                (stats) =>
                                    <Row
                                        key={stats.playerId}
                                        className={styles.row}
                                        items={[
                                            <Player
                                                key={0}
                                                nickname={stats.nickName}
                                            />,
                                            stats.kills,
                                            stats.deaths,
                                            stats.assists,
                                        ]}
                                    />
                            )
                        }
                    </>
            }
        </div>
    );
};

export default StatsCard;
