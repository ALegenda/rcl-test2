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
    usePlayerByUser,
} from 'instances/players/hooks';

import {
    Avatar,
} from 'components/helpers/instances/players';
import {
    Loading,
} from 'components/helpers/other';

import Stats from './Stats';

import {
    formatName,
} from './functions';
import {
    INTL_DATA,
} from './intl';

import styles from './Player.module.scss';

const Player: FC = () => {
    const intl = useIntl();

    const {
        id,
    } = useParams<IParams>();

    const {
        baseInfo,
        getBaseInfo,
    } = usePlayerByUser();

    const {
        isDarkTheme,
    } = useDarkTheme();

    useEffect(() => {
        (async () => {
            await getBaseInfo(parseInt(id ?? ''));
        })();
    }, [id]);

    if (!baseInfo) {
        return (
            <Loading isPage={true}/>
        );
    }

    return (
        <div className={
            classNames(
                isDarkTheme && styles.darkPlayer,
                styles.player
            )
        }
        >
            <Avatar
                className={styles.avatar}
                avatarSrc={baseInfo.imageUrl}
                teamSrc={baseInfo.team.logo}
            />
            <div className={styles.infoBlock}>
                <div className={styles.basic}>
                    <div className={styles.row}>
                        <div className={styles.characteristic}>
                            {intl(INTL_DATA.NAME)}
                        </div>
                        <div className={classNames(styles.value, styles.name)}>
                            {formatName(baseInfo.nickName, baseInfo.firstName, baseInfo.lastName)}
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.characteristic}>
                            {intl(INTL_DATA.AGE)}
                        </div>
                        <div className={styles.value}>
                            {baseInfo.age}
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.characteristic}>
                            {intl(INTL_DATA.COUNTRY)}
                        </div>
                        <div className={styles.value}>
                            {baseInfo.country}
                            <img
                                src={baseInfo.countryLogo}
                                alt={''}
                            />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.characteristic}>
                            {intl(INTL_DATA.TEAM)}
                        </div>
                        <div className={styles.value}>
                            {baseInfo.team.name}
                        </div>
                    </div>
                </div>
                <Stats id={id ?? ''}/>
            </div>
        </div>
    );
};

export default Player;
