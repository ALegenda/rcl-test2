import {
    atom,
    useRecoilState,
} from 'recoil';

const themeAtom = atom<boolean>({
    key: 'themeAtom',
    default: false,
});

export default function useTheme() {
    const [isDarkTheme, setIsDarkTheme] = useRecoilState(themeAtom);

    return {
        isDarkTheme,
        setIsDarkTheme,
    };
}
