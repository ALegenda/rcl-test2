import {
    useEffect,
    useState,
} from 'react';

type ICallBack = () => void | Promise<void>;

export default function(cb: ICallBack, delay: number, dependency: any) {
    const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        timeoutId && clearTimeout(timeoutId);

        const id = setTimeout(async () => {
            await cb();
        }, delay);

        setTimeoutId(id);
    }, [dependency]);
}
