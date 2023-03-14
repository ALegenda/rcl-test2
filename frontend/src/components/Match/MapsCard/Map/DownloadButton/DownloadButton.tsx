import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import {
    useIntl,
} from 'helpers/hooks';

import {
    INTL_DATA,
} from './intl';

import downloadImage from './media/download.svg';

import styles from './DownloadButton.module.scss';

const DownloadButton: FC<IProps> = (props) => {
    const intl = useIntl();

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
            {intl(INTL_DATA.BUTTON_TXT)}
        </a>
    );
};

export default DownloadButton;
