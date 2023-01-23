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
    formatPart,
} from './functions';

import styles from './Tab.module.scss';

const Tab: FC<IProps> = (props) => {
    const location = useLocation();

    const isActive = location.pathname.startsWith(props.part);

    return (
        <Link
            className={classNames(styles.tab, props.className, {
                [styles.isActive]: isActive,
            })}
            to={props.part}
        >
            {formatPart(props.part)}
        </Link>
    );
};

export default Tab;
