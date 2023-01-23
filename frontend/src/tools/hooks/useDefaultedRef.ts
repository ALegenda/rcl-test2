import {
    MutableRefObject,
    useRef,
} from 'react';

export default function<IRef>(defaultValue: IRef): MutableRefObject<IRef> {
    const ref = useRef(defaultValue);

    if (!ref.current) {
        ref.current = defaultValue;
    }

    return ref;
}
