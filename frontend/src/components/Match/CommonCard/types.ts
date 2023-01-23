import {
    ITeam,
} from 'instances/matches/types';

export interface IProps {
    team1: ITeam;
    team1Score: number;
    team2: ITeam;
    team2Score: number;

    startedAt: string;

    className?: string;

    onClick(): void;
}
