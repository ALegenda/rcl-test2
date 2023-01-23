import {
    IMatchDemoUser,
    IMatchFinishedDemoUser,
    IMatchMapUser,
    IMatchUser,
} from './types';
import {
    IGetByUserQuery,
} from './types/requests';
import {
    IGetByUser,
    IGetOneByUser,
    IGetOneMapByUser,
    IGetPendingByUser,
} from './types/responses';

import {
    useState,
} from 'react';

import * as fetches from './fetches';

export function useMatchFinishedByUser() {
    const [matches, setMatches] = useState<IMatchFinishedDemoUser[] | null>(null);
    const [matchesTotal, setMatchesTotal] = useState<number | null>(null);

    const getMatches = async (query: IGetByUserQuery): Promise<IGetByUser> => {
        const res = await fetches.getByUser(query);

        if (!res.matches || res.total === undefined || res.error) {
            console.log(res.error);

            return res;
        }

        setMatches([...(matches || []), ...res.matches]);
        setMatchesTotal(res.total);

        return res;
    };

    return {
        matches,
        matchesTotal,
        getMatches,
    };
}

export function usePendingMatchesByUser() {
    const [matches, setMatches] = useState<IMatchDemoUser[] | null>(null);

    const getMatches = async (): Promise<IGetPendingByUser> => {
        const res = await fetches.getPendingByUser();

        if (!res.matches || res.error) {
            console.log(res.error);

            return res;
        }

        setMatches(res.matches);

        return res;
    };

    return {
        matches,
        getMatches,
    };
}

export function useMatchByUser() {
    const [match, setMatch] = useState<IMatchUser | null>(null);
    const [matchMap, setMatchMap] = useState<IMatchMapUser | null>(null);

    const getMatch = async (id: number): Promise<IGetOneByUser> => {
        const res = await fetches.getOneByUser(id);

        if (!res.match || res.error) {
            return res;
        }

        setMatch(res.match);

        return res;
    };
    const getMatchMap = async (id: number): Promise<IGetOneMapByUser> => {
        const res = await fetches.getOneMapByUser(id);

        if (!res.matchMap || res.error) {
            return res;
        }

        setMatchMap(res.matchMap);

        return res;
    };
    const resetMatchMap = (): void => {
        setMatchMap(null);
    };

    return {
        match,
        matchMap,
        getMatch,
        getMatchMap,
        resetMatchMap,
    };
}
