import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    forwardRef,
    useEffect,
    useState,
} from 'react';

import styles from './Image.module.scss';

import {
    Loading,
} from '..';

const Img = forwardRef<HTMLDivElement, IProps>((props, ref) => {
    const [source, setSource] = useState<string | null>(null);

    useEffect(() => {
        const img = new Image();

        img.src = props.src;
        img.alt = props.alt ?? '';
        img.onload = () => {
            setSource(props.src);
        };
    }, [props.src]);

    if (!source) {
        return (
            <div className={classNames(styles.loading, props.className)}>
                <Loading size={30}/>
            </div>
        );
    }
    if (props.mode === 'contain') {
        return (
            <img
                className={classNames(styles.contain, props.className)}
                src={props.src}
                alt={''}
            />
        );
    }

    return (
        <div
            ref={ref}
            className={classNames(styles.cover, props.className)}
            style={{
                backgroundImage: `url(${props.src})`,
            }}
            onClick={props.onClick}
        />
    );
});

export default Img;
