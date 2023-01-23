import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
    useState,
} from 'react';

import {
    downloadFile,
} from 'helpers/functions';

import {
    getDemoFileName,
} from 'instances/matches/functions';

import downloadImage from './media/download.svg';

import styles from './DownloadButton.module.scss';

const DownloadButton: FC<IProps> = (props) => {
    const [isPending, setIsPending] = useState(false);

    const onDownload = async () => {
        if (isPending) {
            return;
        }
        if (!props.url) {
            return;
        }

        setIsPending(true);
        await downloadFile(props.url, getDemoFileName(props.matchId));
        setIsPending(false);
    };

    if (!props.url) {
        return null;
    }

    return (
        <div
            className={classNames(styles.downloadButton, props.className)}
            onClick={onDownload}
        >
            <img
                className={styles.image}
                src={downloadImage}
                alt={''}
            />
            Скачать demo
        </div>
    );
};

export default DownloadButton;
