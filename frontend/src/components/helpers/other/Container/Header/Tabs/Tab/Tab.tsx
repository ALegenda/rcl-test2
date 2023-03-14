import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';
import {
    Link,
    useLocation,
} from 'react-router-dom';

import {
    useDarkTheme,
    useIntl,
} from 'helpers/hooks';

import {
    PART,
} from '../constants';

import {
    INTL_DATA,
} from './intl';

import styles from './Tab.module.scss';

const Tab: FC<IProps> = (props) => {
    const intl = useIntl();
    const location = useLocation();

    const {
        isDarkTheme,
    } = useDarkTheme();
    const isActive = location.pathname.startsWith(props.part);

    function formatPart(part: PART): string {
        switch (part) {
            case PART.REPORTS: {
                return intl(INTL_DATA.NEWS);
            }
            case PART.MATCHES: {
                return intl(INTL_DATA.RESULTS);
            }
            case PART.TEAMS: {
                return intl(INTL_DATA.TEAMS);
            }
            case PART.PLAYERS: {
                return intl(INTL_DATA.PLAYERS);
            }
            case PART.DOCS: {
                return intl(INTL_DATA.DOCS);
            }
        }
    }

    return (
        <Link
            className={
                classNames(
                    styles.tab,
                    props.className,
                    {
                        [styles.isDark]: isDarkTheme,
                        [isDarkTheme ? styles.isDarkActive : styles.isActive]: isActive,
                    }
                )
            }
            to={props.part}
        >
            {formatPart(props.part)}
        </Link>
    );
};

export default Tab;
