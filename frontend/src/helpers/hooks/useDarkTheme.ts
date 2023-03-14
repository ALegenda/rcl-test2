import {
    useEffect,
} from 'react';
import {
    atom,
    useRecoilState,
} from 'recoil';

enum THEME {
    WHITE = 'white',
    DARK = 'dark',
}

const LS_THEME = 'theme';
const DEFAULT_THEME = THEME.WHITE;

function getLSTheme(): THEME {
    const res = localStorage.getItem(LS_THEME) as THEME ?? DEFAULT_THEME;

    if (Object.values(THEME).includes(res)) {
        return res;
    } else {
        return DEFAULT_THEME;
    }
}

function setLSTheme(theme: THEME): void {
    localStorage.setItem(LS_THEME, theme);
}

const themeAtom = atom<boolean>({
    key: 'themeAtom',
    default: getLSTheme() === THEME.DARK,
});

export default function useTheme() {
    const [isDarkTheme, setIsDarkTheme] = useRecoilState(themeAtom);

    useEffect(() => {
        setLSTheme(
            isDarkTheme ?
                THEME.DARK :
                THEME.WHITE
        );
    }, [isDarkTheme]);

    return {
        isDarkTheme,
        setIsDarkTheme,
    };
}
