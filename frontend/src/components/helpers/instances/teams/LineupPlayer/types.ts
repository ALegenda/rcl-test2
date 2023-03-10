import {
    IPlayerLineupUser,
} from 'instances/players/types';

import {
    BACKGROUND_COLOR,
} from './constants';

export interface IProps {
    player: IPlayerLineupUser;
    backgroundColor: BACKGROUND_COLOR;

    className?: string;
}
