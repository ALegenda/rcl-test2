import {
    LOCALE,
} from './constants';

export function getBrowserLocale(): LOCALE {
    const browserLocale = window.navigator.language;

    return Object
        .values(LOCALE)
        .find((locale) => browserLocale.includes(locale)) ?? LOCALE.RU;
}
