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
    useTeamMatchesByUser,
} from 'instances/teams/hooks';

import {
    Match,
} from 'components/helpers/instances/matches';
import {
    Loading,
} from 'components/helpers/other';

import {
    INTL_DATA,
} from './intl';

import styles from './MatchesList.module.scss';

const MatchesList: FC<IProps> = (props) => {
    const intl = useIntl();

    const {
        matches,
        getMatches,
    } = useTeamMatchesByUser();

    const {
        isDarkTheme,
    } = useDarkTheme();

    useEffect(() => {
        (async () => {
            await getMatches(parseInt(props.id ?? ''));
        })();
    }, [props.id]);

    if (!matches || matches === null) {
        return (
            <Loading size={40}/>
        );
    }

    return (
        <div className={
            classNames(
                styles.matchesListContainer,
                props.className,
                {
                    [styles.isDark]: isDarkTheme,
                }
            )
        }
        >
            {
                !matches.length ?
                    <div className={styles.emptyResult}>
                        {intl(INTL_DATA.EMPTY_RESULT)}
                    </div> :
                    <div className={styles.matchesList}>
                        <div className={styles.content}>
                            <div className={styles.title}>
                                {intl(INTL_DATA.TITLE)}
                            </div>
                            <div className={styles.listContainer}>
                                <div className={styles.list}>
                                    {
                                        matches ?
                                            matches.map(
                                                (match) =>
                                                    <Match
                                                        className={styles.match}
                                                        key={match.id}
                                                        match={match}
                                                        teams={match.teams}
                                                        status={match.status}
                                                        team1Score={match.team1Score}
                                                        team2Score={match.team2Score}
                                                    />
                                            ) :
                                            <Loading size={40}/>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default MatchesList;
