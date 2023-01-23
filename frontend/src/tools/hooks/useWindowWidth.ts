import {
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

export enum WINDOW_WIDTH {
    W320 = 320,
    W375 = 375,
    W414 = 414,
    W768 = 768,
    W810 = 810,
    W834 = 834,
    W1024 = 1024,
    W1080 = 1080,
    W1112 = 1112,
    W1152 = 1152,
    W1194 = 1194,
    W1280 = 1280,
    W1366 = 1366,
    W1440 = 1440,
    W1536 = 1536,
    W1680 = 1680,
    W1920 = 1920,
    W2048 = 2048,
    W2560 = 2560,
}

export default function() {
    const [windowWidth, setWindowWidth] = useState(typeof window === 'undefined' ? 0 : window.innerWidth);

    const isMounted = useRef<boolean>(true);

    const handleResize = useCallback(() => {
        if (isMounted.current) {
            setWindowWidth(window.innerWidth);
        }
    }, [setWindowWidth]);

    useEffect(() => {
        window.addEventListener('resize', () => {
            window.requestAnimationFrame(handleResize);
        });

        return () => {
            isMounted.current = false;
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return {
        windowWidth,
        WINDOW_WIDTH,
    };
}
