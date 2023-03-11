import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
    useEffect,
    useState,
} from 'react';

import {
    useWindowWidth,
} from 'tools/hooks';

import {
    useDarkTheme,
    useIntl,
} from 'helpers/hooks';

import {
    getDefaultDemoQueryUser,
} from 'instances/teams/functions';
import {
    useTeamsDemoByUser,
} from 'instances/teams/hooks';

import {
    MagicButton,
} from 'components/helpers/buttons';
import {
    Loading,
} from 'components/helpers/other';

import Team from './Team';
import Top from './Top';

import {
    LIST_SIZE_MOBILE,
} from './constants';
import {
    INTL_DATA,
} from './intl';

import styles from './TeamsList.module.scss';

const TeamsList: FC<IProps> = (props) => {
    const intl = useIntl();

    const {
        windowWidth,
        WINDOW_WIDTH,
    } = useWindowWidth();

    const [isOpen, setIsOpen] = useState(windowWidth >= WINDOW_WIDTH.W1280);

    const {
        teams,
        getTeams,
    } = useTeamsDemoByUser();

    const {
        isDarkTheme,
    } = useDarkTheme();

    useEffect(() => {
        (async () => {
            await getTeams(getDefaultDemoQueryUser());
        })();
    }, []);

    return (
        <div className={
            classNames(
                isDarkTheme && styles.darkTeamsList,
                styles.teamsList,
                props.className
            )
        }
        >
            <div className={styles.title}>
                {intl(INTL_DATA.TITLE)}
            </div>
            <div className={classNames(styles.list, props.listClassName)}>
                <Top className={styles.item}/>
                {
                    teams ?
                        teams
                            .slice(0, isOpen ? teams.length : LIST_SIZE_MOBILE)
                            .map(
                                (team) =>
                                    <Team
                                        key={team.team.id}
                                        className={styles.item}
                                        team={team}
                                    />
                            ) :
                        <Loading size={40}/>
                }
            </div>
            {
                !!teams && !isOpen &&
                <div className={styles.moreButtonContainer}>
                    <MagicButton
                        className={styles.moreButton}
                        onClick={() => setIsOpen(true)}
                    >
                        {intl(INTL_DATA.BUTTON_TXT)}
                    </MagicButton>
                </div>
            }
        </div>
    );
};

export default TeamsList;
