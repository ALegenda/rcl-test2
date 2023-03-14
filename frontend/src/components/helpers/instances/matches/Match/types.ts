export interface IProps {
    match: IMatch;

    team1Score?: number;
    team2Score?: number;

    team1?: ITeam;
    team2?: ITeam;
    teams?: [ITeam, ITeam]; // с этим нужно что-то сделать, бекендеру

    status?: string;
    className?: string;
}

export interface ITeam {
    id: number;

    name: string;
    logo: string;
    country: string;
    countryLogo: string;
}

export interface IMatch {
    id: number;

    startedAt: string;
}
