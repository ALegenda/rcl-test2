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

import styles from './Player.module.scss';

const Player: FC = () => {
    const {
        id,
    } = useParams<IParams>();

    const {
        baseInfo,
        getBaseInfo,
    } = usePlayerByUser();

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
        <div className={styles.player}>
            <Avatar
                className={styles.avatar}
                avatarSrc={baseInfo.imageUrl}
                teamSrc={baseInfo.team.logo}
            />
            <div className={styles.infoBlock}>
                <div className={styles.basic}>
                    <div className={styles.row}>
                        <div className={styles.characteristic}>
                            Имя:
                        </div>
                        <div className={styles.value}>
                            {formatName(baseInfo.nickName, baseInfo.firstName, baseInfo.lastName)}
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.characteristic}>
                            Возраст:
                        </div>
                        <div className={styles.value}>
                            {baseInfo.age}
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.characteristic}>
                            Страна:
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
                            Команда:
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
