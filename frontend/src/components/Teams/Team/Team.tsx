import {
    IProps,
} from './types';

import React, {
    FC,
} from 'react';
import {
    Link,
} from 'react-router-dom';

import {
    Image,
} from 'components/helpers/other';

import styles from './Team.module.scss';

const Team: FC<IProps> = (props) => {
    return (
        <Link
            className={styles.team}
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
