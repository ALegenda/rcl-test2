import {
    IProps,
} from './types';

import React, {
    FC,
} from 'react';

import LineText from './LineText';

const MultilineText: FC<IProps> = (props) => {
    return (
        <>
            {
                props.text
                    .split('\n')
                    .map((line, i) =>
                        <LineText
                            key={i}
                            text={line}
                        />
                    )
            }
        </>
    );
};

export default MultilineText;
