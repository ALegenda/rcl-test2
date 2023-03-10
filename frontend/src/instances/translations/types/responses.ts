import {
    IWithResponseError,
} from 'tools/Fetch';

import {
    ITranslationUser,
} from '.';

export interface IGetByUser extends IWithResponseError {
    translation?: ITranslationUser;
}
