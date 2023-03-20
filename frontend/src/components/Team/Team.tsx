import {
    IParams,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
    useEffect,
} from 'react';
import {
    useParams,
} from 'react-router-dom';

import {
    useDarkTheme,
    useIntl,
} from 'helpers/hooks';

import {
    useTeamByUser,
} from 'instances/teams/hooks';

import {
    Image,
    Loading,
} from 'components/helpers/other';

import Lineup from './Lineup';
import Matches from './Matches';
import Stats from './Stats';

import {
    INTL_DATA,
} from './intl';

import styles from './Team.module.scss';

const Team: FC = () => {
    const intl = useIntl();

    const {
        id,
    } = useParams<IParams>();

    const {
        team,
        getTeam,
    } = useTeamByUser();

    const {
        isDarkTheme,
    } = useDarkTheme();

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
        <div className={
            classNames(
                styles.teamContainer,
                {
                    [styles.isDark]: isDarkTheme,
                }
            )
        }
        >
            <div className={styles.team}>
                <div className={styles.baguetteLogo}>
                    <Image
                        className={styles.logoImg}
                        src={team.logo}
                        mode={'contain'}
                    />
                </div>
                <div className={styles.info}>
                    <div className={styles.basic}>
                        <div className={styles.row}>
                            <div className={styles.characteristic}>
                                {intl(INTL_DATA.TEAM_NAME)}
                            </div>
                            <div className={styles.value}>
                                {team.name}
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.characteristic}>
                                {intl(INTL_DATA.COUNRTY)}
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
                                {intl(INTL_DATA.CITY)}
                            </div>
                            <div className={styles.value}>
                                {team.city}
                            </div>
                        </div>
                    </div>
                    <Stats
                        className={styles.stats}
                        id={id ?? ''}
                        totalWins={team.totalWins}
                        totalDraws={team.totalDraws}
                        totalLoses={team.totalLoses}
                    />
                    <Lineup
                        className={styles.insideLineup}
                        id={id ?? ''}
                    />
                </div>
            </div>
            <Lineup
                className={styles.outsideLineup}
                id={id ?? ''}
            />
            <Matches
                className={styles.outsideMatches}
                id={id ?? ''}
            />
        </div>
    );
};

export default Team;
