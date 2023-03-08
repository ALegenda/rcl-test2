import {
    LOCALE,
} from '../constants';

export interface ITranslationUser {
    locale: LOCALE;
    messages: Record<string, string>;
}
