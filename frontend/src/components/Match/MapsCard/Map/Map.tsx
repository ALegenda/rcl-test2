import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import {
    Image,
} from 'components/helpers/other';

import DownloadButton from './DownloadButton';

import {
    formatPreviewSrc,
    formatScores,
    formatTeamLogoSrc,
} from './functions';

import styles from './Map.module.scss';

const Map: FC<IProps> = (props) => {
    const teamLogoSrc = formatTeamLogoSrc(props.map.team1Score, props.map.team2Score, props.teams, props.map.team1Id, props.map.team2Id);
    const previewSrc = formatPreviewSrc(props.map.mapName);

    const onChoose = () => {
        if (!previewSrc) {
            return;
        }

        props.onChoose();
    };

    return (
        <div className={classNames(styles.map, props.className)}>
            <div
                className={styles.card}
                onClick={onChoose}
            >
                {
                    previewSrc ?
                        <Image
                            className={styles.previewImage}
                            src={previewSrc}
                            alt={''}
                            mode={'cover'}
                        /> :
                        <div className={styles.emptyPreview}>
                            ?
                        </div>
                }
                <div className={styles.info}>
                    <div className={styles.data}>
                        <div className={styles.scores}>
                            {formatScores(props.map.team1Score, props.map.team2Score, props.map.status)}
                        </div>
                        <div className={styles.name}>
                            {props.map.mapName}
                        </div>
                    </div>
                    {
                        teamLogoSrc ?
                            <Image
                                className={styles.teamLogo}
                                src={teamLogoSrc}
                                mode={'contain'}
                            /> :
                            <div/>
                    }
                </div>
            </div>
            <DownloadButton
                url={props.map.demo}
                matchId={props.map.id}
            />
        </div>
    );
};

export default Map;
