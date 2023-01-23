import {
    IProps,
} from './types';

import React, {
    FC,
} from 'react';

const LineText: FC<IProps> = (props) => {
    const formatText = (text: string) => {
        const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;

        return text.replace(urlRegex, function(url) {
            return '<a href="' + url + '" target="_blank">' + url + '</a>';
        });
    };

    return (
        <div
            dangerouslySetInnerHTML={{
                __html: formatText(props.text),
            }}
        />
    );
};

export default LineText;
