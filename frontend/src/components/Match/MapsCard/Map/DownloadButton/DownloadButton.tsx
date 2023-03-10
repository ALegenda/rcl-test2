import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import downloadImage from './media/download.svg';

import styles from './DownloadButton.module.scss';

const DownloadButton: FC<IProps> = (props) => {
    if (!props.url) {
        return null;
    }

    return (
        <a
            className={classNames(styles.downloadButton, props.className)}
            download={true}
            href={props.url}
        >
            <img
                className={styles.image}
                src={downloadImage}
                alt={''}
            />
            Скачать demo
        </a>
    );
};

export default DownloadButton;
