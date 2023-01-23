import {
    ITeam,
    ITeamStats,
} from 'instances/matches/types';

export interface IProps {
    team1: ITeam;
    team2: ITeam;
    team1Stats: ITeamStats[];
    team2Stats: ITeamStats[];
    isPending: boolean;

    className?: string;
}
