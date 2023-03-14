import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';
import {
    Link,
} from 'react-router-dom';

import {
    useDarkTheme,
    useIntl,
} from 'helpers/hooks';

import {
    formatDate,
    formatTime,
} from 'instances/matches/functions';

import {
    Image,
} from 'components/helpers/other';

import {
    INTL_DATA,
} from './intl';

import vsDarkImage from './media/vs-dark.svg';
import vsLightImage from './media/vs-light.svg';

import styles from './Match.module.scss';

const Match: FC<IProps> = (props) => {
    const intl = useIntl();

    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <div className={
            classNames(
                styles.match,
                props.className,
                {
                    [styles.isDark]: isDarkTheme,
                }
            )
        }
        >
            {
                props.status === 'started' ?
                    <div className={styles.live}>
                        {intl(INTL_DATA.LIVE)}
                    </div> :
                    <Link
                        className={styles.date}
                        to={`/games/${props.match.id}`}
                    >
                        {formatDate(props.match.startedAt)}
                    </Link>
            }
            <div className={styles.basic}>
                {
                    props.teams &&
                    <Image
                        className={styles.teamImage}
                        src={props.teams[0].logo}
                        mode={'contain'}
                    />
                }
                {
                    props.team1 &&
                    <Image
                        className={styles.teamImage}
                        src={props.team1.logo}
                        mode={'contain'}
                    />
                }
                {
                    props.status === 'pending' ?
                        <div className={styles.pendingScore}/> :
                        <div className={styles.score}>
                            <div>
                                {props.team1Score}
                            </div>
                            <div>
                                {props.team2Score}
                            </div>
                        </div>
                }
                {
                    props.teams &&
                    <Image
                        className={styles.teamImage}
                        src={props.teams[1].logo}
                        mode={'contain'}
                    />
                }
                {
                    props.team2 &&
                    <Image
                        className={styles.teamImage}
                        src={props.team2.logo}
                        mode={'contain'}
                    />
                }
                <img
                    className={styles.vsImage}
                    src={isDarkTheme ? vsDarkImage : vsLightImage}
                    alt={''}
                />
            </div>
            {
                props.status !== 'started' &&
                <div className={styles.time}>
                    {formatTime(props.match.startedAt)}
                </div>
            }
        </div>
    );
};

export default Match;
