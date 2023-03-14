export interface IPlayerUser {
    player: {
        id: number;

        firstName: string;
        lastName: string;
        nickName: string;
        age: number;
        country: string;
        countryLogo: string;
        imageUrl: string;
    };
    team: {
        id: number;

        logo: string;
        name: string;
        country: string;
        countryLogo: string;
    };
    stats: {
        games: number;
        maps: number;
        kills: number;
        deaths: number;
        assists: number;
        kd: number | null;
        kdDiff: number | null;
    };
}

export interface IBaseInfoUser {
    id: number;

    firstName: string;
    lastName: string;
    nickName: string;
    steamId: string;
    age: number;
    country: string;
    countryLogo: string;
    imageUrl: string;

    team: {
        id: number;

        logo: string;
        name: string;
        country: string;
        countryLogo: string;
    };
}

export interface IStatsUser {
    games: number;
    maps: number;
    kills: number;
    deaths: number;
    assists: number;
    kd: number | null;
    kdDiff: number;
}

export interface IPlayerLineupUser {
    id: number;

    firstName: string;
    lastName: string;
    nickName: string;
    steamId: string;
    age: number;
    country: string;
    countryLogo: string;
    imageUrl: string;

    totalKills: number;
    totalGames: number;
    totalMaps: number;
    totalDeaths: number;
    totalAssists: number;
    totalKd: number;
}

export interface ITeam {
    id: number;

    name: string;
    logo: string;
    city: string;
    country: string;
    countryLogo: string;
}

export interface IMatch {
    id: number;

    team1Id: number;
    team2Id: number;

    startedAt: string;
    status: string;
    team1Score: number;
    team2Score: number;

    teams: [ITeam, ITeam];
}
