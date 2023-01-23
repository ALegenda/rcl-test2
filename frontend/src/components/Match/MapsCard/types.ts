import {
    IMap,
    ITeam,
} from 'instances/matches/types';

export interface IProps {
    maps: IMap[];
    teams: [ITeam, ITeam];
    matchId: number;

    className?: string;

    onChoose(id: number): void;
}
