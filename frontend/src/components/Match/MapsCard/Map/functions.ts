import {
    ITeam,
} from 'instances/matches/types';

import {
    MAP_NAME,
    MAP_STATUS,
} from 'instances/matches/constants';

export function formatPreviewSrc(mapName: MAP_NAME | null): string {
    switch (mapName) {
        case MAP_NAME.DE_INFERNO: {
            return 'https://www.hltv.org/img/static/statsmatchmaps/inferno.png';
        }
        case MAP_NAME.DE_VERTIGO: {
            return 'https://www.hltv.org/img/static/statsmatchmaps/vertigo.png';
        }
        case MAP_NAME.DE_MIRAGE: {
            return 'https://www.hltv.org/img/static/statsmatchmaps/mirage.png';
        }
        case MAP_NAME.DE_OVERPASS: {
            return 'https://www.hltv.org/img/static/statsmatchmaps/overpass.png';
        }
        case MAP_NAME.DE_ANCIENT: {
            return 'https://www.hltv.org/img/static/statsmatchmaps/ancient.png';
        }
        case MAP_NAME.DE_NUKE: {
            return 'https://www.hltv.org/img/static/statsmatchmaps/nuke.png';
        }
        case MAP_NAME.DE_ANUBIS: {
            return 'https://www.hltv.org/img/static/statsmatchmaps/anubis.png';
        }
        case null: {
            return '';
        }
    }
}

export function formatScores(team1Score: number, team2Score: number, status: MAP_STATUS): string {
    switch (status) {
        case MAP_STATUS.CANCELED:
        case MAP_STATUS.CLINCH:
        case MAP_STATUS.PENDING:
        case MAP_STATUS.STARTED: {
            return '-';
        }
        case MAP_STATUS.FINISHED: {
            return `${team1Score}-${team2Score}`;
        }
    }
}

export function formatTeamLogoSrc(team1Score: number, team2Score: number, teams: [ITeam, ITeam]): string | null {
    if (team1Score > team2Score) {
        return teams[0].logo;
    }
    if (team1Score < team2Score) {
        return teams[1].logo;
    }

    return null;
}
