import {
    IProps,
} from './types';

import config from 'config';
import React, {
    FC,
    useEffect,
    useState,
} from 'react';
import Websocket from 'react-websocket';

import Query from '../../Query';

import {
    RECONNECTION_TIME,
} from './constants';
import {
    parseResponse,
} from './functions';

const WebSocket: FC<IProps> = (props) => {
    const [isInit, setIsInit] = useState(false);
    const [isConnected, setIsConnected] = useState(true);

    const onMessage = (message: string) => {
        const response = parseResponse(message);

        props.onMessage(response);
    };

    useEffect(() => {
        if (!isConnected) {
            setTimeout(() => {
                setIsConnected(true);
            }, props.reconnectionTime || RECONNECTION_TIME);
        }
    }, [isConnected]);

    if (!isConnected) {
        return null;
    }

    return (
        <Websocket
            url={`${config.WS_URL}${props.path}${props.query ? Query.stringify(props.query) : ''}`}
            onMessage={onMessage}
            onOpen={() => {
                setIsConnected(true);
                isInit && props.onReconnected?.();
                setIsInit(true);
            }}
            onClose={() => {
                setIsConnected(false);
                props.onDisconnected?.();
            }}
        />
    );
};

export default WebSocket;
