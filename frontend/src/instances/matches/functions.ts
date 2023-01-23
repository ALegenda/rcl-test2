import {
    IGetByUserQuery,
} from './types/requests';

import {
    addFirstZero,
} from 'helpers/functions';

export function getDefaultQueryUser(): IGetByUserQuery {
    return {
        skip: 0,
        take: 20,
    };
}

export function formatDate(startedAt: string): string {
    function isToday(date: Date): boolean {
        const today = new Date();

        return ![
            today.getFullYear() === date.getFullYear(),
            today.getMonth() === date.getMonth(),
            today.getDate() === date.getDate(),
        ].includes(false);
    }

    function isTomorrow(date: Date): boolean {
        const tomorrow = new Date();

        tomorrow.setDate(tomorrow.getDate() + 1);

        return ![
            tomorrow.getFullYear() === date.getFullYear(),
            tomorrow.getMonth() === date.getMonth(),
            tomorrow.getDate() === date.getDate(),
        ].includes(false);
    }

    const date = new Date(startedAt);

    if (isToday(date)) {
        return 'Сегодня';
    }
    if (isTomorrow(date)) {
        return 'Завтра';
    }

    return `${addFirstZero(date.getDate())}.${addFirstZero(date.getMonth() + 1)}.${date.getFullYear()}`;
}

export function formatTime(startedAt: string): string {
    const date = new Date(startedAt);

    return `(${addFirstZero(date.getHours())}:${addFirstZero(date.getMinutes())})`;
}

export function getDemoFileName(matchId: number): string {
    return `RCL_Demo_${matchId}.dem`;
}
