import {
    IPlayerUser,
} from 'instances/players/types';

export interface IProps {
    player: IPlayerUser;

    playerClassName?: string;
    rowClassName?: string;
}
