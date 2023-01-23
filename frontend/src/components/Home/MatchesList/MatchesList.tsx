import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
    useEffect,
} from 'react';

import {
    usePendingMatchesByUser,
} from 'instances/matches/hooks';

import {
    Loading,
} from 'components/helpers/other';

import Match from './Match';

import styles from './MatchesList.module.scss';

const MatchesList: FC<IProps> = (props) => {
    const {
        matches,
        getMatches,
    } = usePendingMatchesByUser();

    useEffect(() => {
        (async () => {
            await getMatches();
        })();
    }, []);

    return (
        <div className={classNames(styles.matchesList, props.className)}>
            <div className={styles.title}>
                Ближайшие матчи
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
