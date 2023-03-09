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
} from 'helpers/hooks';

import {
    Image,
} from 'components/helpers/other';

import styles from './Team.module.scss';

const Team: FC<IProps> = (props) => {
    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <Link
            className={
                classNames(
                    isDarkTheme && styles.darkTheme,
                    styles.team
                )
            }
            to={`/teams/${props.team.id}`}
        >
            <Image
                className={styles.teamImage}
                src={props.team.logo}
                mode={'contain'}
            />
            {props.team.name}
        </Link>
    );
};

export default Team;
