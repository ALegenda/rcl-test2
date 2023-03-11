import {
    IProps,
} from './types';

import React, {
    FC,
} from 'react';

import {
    useIntl,
} from 'helpers/hooks';

import {
    INTL_DATA,
} from './intl';

const Text: FC<IProps> = (props) => {
    const intl = useIntl();

    return (
        <div className={props.className}>
            {intl(INTL_DATA.BIG_TEXT)}
        </div>
    );
};

export default Text;
