import {
    IPlayerLineupUser,
} from 'instances/players/types';

export interface IProps {
    player: IPlayerLineupUser;
    lineup: boolean;

    className?: string;
}
