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
    usePendingMatchesByUser,
} from 'instances/matches/hooks';

import {
    Loading,
} from 'components/helpers/other';

import Match from './Match';

import {
    INTL_DATA,
} from './intl';

import styles from './MatchesList.module.scss';

const MatchesList: FC<IProps> = (props) => {
    const intl = useIntl();

    const {
        matches,
        getMatches,
    } = usePendingMatchesByUser();

    const {
        isDarkTheme,
    } = useDarkTheme();

    useEffect(() => {
        (async () => {
            await getMatches();
        })();
    }, []);

    return (
        <div className={
            classNames(
                styles.matchesList,
                props.className,
                {
                    [styles.isDark]: isDarkTheme,
                }
            )
        }
        >
            <div className={styles.title}>
                {intl(INTL_DATA.TITLE)}
            </div>
            {
                matches ?
                    <div className={classNames(styles.list, props.listClassName)}>
                        {
                            matches.map(
                                (match) =>
                                    <Match
                                        key={match.id}
                                        match={match}
                                    />
                            )
                        }
                    </div> :
                    <Loading size={40}/>
            }
        </div>
    );
};

export default MatchesList;
