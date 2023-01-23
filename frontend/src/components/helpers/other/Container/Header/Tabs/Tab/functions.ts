import {
    PART,
} from '../constants';

export function formatPart(part: PART): string {
    switch (part) {
        case PART.REPORTS: {
            return 'Новости';
        }
        case PART.MATCHES: {
            return 'Результаты';
        }
        case PART.TEAMS: {
            return 'Команды';
        }
        case PART.PLAYERS: {
            return 'Игроки';
        }
        case PART.DOCS: {
            return 'Документы';
        }
    }
}
