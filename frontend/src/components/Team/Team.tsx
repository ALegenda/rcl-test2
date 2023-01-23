import {
    IParams,
} from './types';

import React, {
    FC,
    useEffect,
} from 'react';
import {
    useParams,
} from 'react-router-dom';

import {
    useTeamByUser,
} from 'instances/teams/hooks';

import {
    Image,
    Loading,
} from 'components/helpers/other';

import Lineup from './Lineup';
import Stats from './Stats';

import styles from './Team.module.scss';

const Team: FC = () => {
    const {
        id,
    } = useParams<IParams>();

    const {
        team,
        getTeam,
    } = useTeamByUser();

    useEffect(() => {
        (async () => {
            await getTeam(parseInt(id ?? ''));
        })();
    }, [id]);

    if (!team) {
        return (
            <Loading isPage={true}/>
        );
    }

    return (
        <div>
            <div className={styles.team}>
                <div className={styles.baguetteContainer}>
                    <div className={styles.baguette}>
                        <Image
                            className={styles.logoImg}
                            src={team.logo}
                            mode={'contain'}
                        />
                    </div>
                </div>
                <div className={styles.infoBlock}>
                    <div className={styles.basic}>
                        <div className={styles.row}>
                            <div className={styles.characteristic}>
                                Название:
                            </div>
                            <div className={styles.value}>
                                {team.name}
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.characteristic}>
                                Страна:
                            </div>
                            <div className={styles.value}>
                                {team.country}
                                <img
                                    src={team.countryLogo}
                                    alt={''}
                                />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.characteristic}>
                                Город:
                            </div>
                            <div className={styles.value}>
                                {team.city}
                            </div>
                        </div>
                    </div>
                    <Stats
                        id={id ?? ''}
                        totalWins={team.totalWins}
                        totalDraws={team.totalDraws}
                        totalLoses={team.totalLoses}
                    />
                </div>
            </div>
            <Lineup id={id ?? ''}/>
        </div>
    );
};

export default Team;
