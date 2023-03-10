import {
    ITranslationUser,
} from './types';
import {
    IGetByUser,
} from './types/responses';

import {
    atom,
    useRecoilState,
} from 'recoil';

import {
    LOCALE,
} from './constants';
import * as fetches from './fetches';

const translationAtom = atom<ITranslationUser | null>({
    key: 'translation',
    default: null,
});

export function useTranslationByUser() {
    const [translation, setTranslation] = useRecoilState(translationAtom);

    const getTranslation = async (locale: LOCALE): Promise<IGetByUser> => {
        const res = await fetches.getByUser(locale);

        if (!res.translation || res.error) {
            console.log(res.error);

            return res;
        }

        setTranslation(res.translation);

        return res;
    };

    return {
        translation,
        getTranslation,
    };
}
