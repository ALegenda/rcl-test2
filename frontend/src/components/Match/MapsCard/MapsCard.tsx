import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import {
    useDarkTheme,
} from 'helpers/hooks';

import Map from './Map';

import styles from './MapsCard.module.scss';

const MapsCard: FC<IProps> = (props) => {
    const {
        isDarkTheme,
    } = useDarkTheme();

    return (
        <div className={
            classNames(
                isDarkTheme && styles.darkMapsCard,
                styles.mapsCard,
                props.className
            )
        }
        >
            {
                props.maps
                    .sort((a, b) => a.number - b.number)
                    .map(
                        (map) =>
                            <Map
                                key={map.id}
                                map={map}
                                teams={props.teams}
                                matchId={props.matchId}
                                onChoose={() => props.onChoose(map.id)}
                            />
                    )
            }
        </div>
    );
};

export default MapsCard;
