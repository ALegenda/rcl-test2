import {
    IMap,
    ITeam,
} from 'instances/matches/types';

export interface IProps {
    map: IMap;
    teams: [ITeam, ITeam];
    matchId: number;

    className?: string;

    onChoose(): void;
}
