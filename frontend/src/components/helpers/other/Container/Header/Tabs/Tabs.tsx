import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import Tab from './Tab';

import {
    PART,
} from './constants';

import styles from './Tabs.module.scss';

const Tabs: FC<IProps> = (props) => {
    return (
        <div className={classNames(styles.tabs, props.className)}>
            <Tab
                className={styles.tab}
                part={PART.REPORTS}
            />
            <Tab
                className={styles.tab}
                part={PART.MATCHES}
            />
            <Tab
                className={styles.tab}
                part={PART.TEAMS}
            />
            <Tab
                className={styles.tab}
                part={PART.PLAYERS}
            />
            <Tab
                className={styles.tab}
                part={PART.DOCS}
            />
        </div>
    );
};

export default Tabs;
