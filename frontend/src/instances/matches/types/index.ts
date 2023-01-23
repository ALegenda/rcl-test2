import {
    MAP_NAME,
    MAP_STATUS,
    STATUS,
} from '../constants';

export interface ITeamDemo {
    id: number;

    logo: string;
    name: string;
    country: string;
    countryLogo: string;
}

export interface ITeam {
    id: number;

    name: string;
    country: string;
    countryLogo: string;
    logo: string;
    city: string;
}

export interface ITeamStats {
    kills: number;
    deaths: number;
    assists: number;
    kd: number;
    kdDiff: number;
    playerId: number;
    nickName: string;
}

export interface IMap {
    id: number;

    number: number;
    demo: string;
    status: MAP_STATUS;
    team1Id: number;
    team2Id: number;
    team1Score: number;
    team2Score: number;
    mapName: MAP_NAME | null;

    startedAt: string;
    finishedAt: string;
}

export interface IMatchDemoUser {
    id: number;

    team1: ITeamDemo;
    team2: ITeamDemo;

    startedAt: string;
}

export interface IMatchFinishedDemoUser {
    id: number;

    team1: ITeamDemo;
    team2: ITeamDemo;

    team1Score: number;
    team2Score: number;

    startedAt: string;
}

export interface IMatchUser {
    id: number;

    status: STATUS;
    teams: [ITeam, ITeam];
    team1Stats: ITeamStats[];
    team2Stats: ITeamStats[];
    team1Id: 1;
    team2Id: 1;
    team1Score: 1;
    team2Score: 1;
    maps: IMap[];

    startedAt: string;
}

export interface IMatchMapUser {
    id: number;

    number: number;
    demo: string;
    status: MAP_STATUS;
    team1Id: number;
    team2Id: number;
    team1Score: number;
    team2Score: number;
    mapName: string;
    team1Stats: ITeamStats[];
    team2Stats: ITeamStats[];

    startedAt: string;
    finishedAt: string;
}
