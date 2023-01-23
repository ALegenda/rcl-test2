export interface ITeamDemoUser {
    place: number;
    team: {
        id: number;
        name: string;
        country: string;
        countryLogo: string;
        logo: string;
    };
    points: number;
    wins: number;
    draws: number;
    loses: number;
}

export interface ITeamUser {
    id: number;

    name: string;
    country: string;
    countryLogo: string;
    logo: string;
    city: string;

    totalKills: number;
    totalGames: number;
    totalMaps: number;
    totalDeaths: number;
    totalAssists: number;
    totalWins: number;
    totalDraws: number;
    totalLoses: number;
}

export interface IStats {
    games: number;
    maps: number;
    kills: number;
    deaths: number;
    assists: number;
    kd: number | null;
    kdDiff: number;
}
