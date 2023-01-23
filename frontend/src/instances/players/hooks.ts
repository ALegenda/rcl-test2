import {
    IBaseInfoUser,
    IPlayerLineupUser,
    IPlayerUser,
    IStatsUser,
} from './types';
import {
    IGetByUserQuery,
} from './types/requests';
import {
    IGetByUser,
    IGetLineupByUser,
    IGetOneByUserBaseInfo,
    IGetOneByUserStats,
} from './types/responses';

import {
    useState,
} from 'react';

import * as fetches from './fetches';

export function usePlayersByUser() {
    const [players, setPlayers] = useState<IPlayerUser[] | null>(null);
    const [playersTotal, setPlayersTotal] = useState<number | null>(null);

    const getPlayers = async (query: IGetByUserQuery): Promise<IGetByUser> => {
        const res = await fetches.getByUser(query);

        if (!res.players || res.total === undefined || res.error) {
            console.log(res.error);

            return res;
        }

        setPlayers([...(players || []), ...res.players]);
        setPlayersTotal(res.total);

        return res;
    };

    return {
        players,
        playersTotal,
        getPlayers,
    };
}

export function usePlayersLineupByUser() {
    const [players, setPlayers] = useState<IPlayerLineupUser[] | null>(null);

    const getPlayersLineup = async (teamId: number): Promise<IGetLineupByUser> => {
        const res = await fetches.getLineupByUser(teamId);

        if (!res.players || res.error) {
            console.log(res.error);

            return res;
        }

        setPlayers(res.players);

        return res;
    };

    return {
        players,
        getPlayersLineup,
    };
}

export function usePlayerByUser() {
    const [baseInfo, setBaseInfo] = useState<IBaseInfoUser | null>(null);

    const getBaseInfo = async (id: number): Promise<IGetOneByUserBaseInfo> => {
        const res = await fetches.getOneByUserBaseInfo(id);

        if (!res.baseInfo || res.error) {
            console.log(res.error);

            return res;
        }

        setBaseInfo(res.baseInfo);

        return res;
    };

    return {
        baseInfo,
        getBaseInfo,
    };
}

export function usePlayerStatsByUser() {
    const [stats, setStats] = useState<IStatsUser | null>(null);

    const getStats = async (id: number): Promise<IGetOneByUserStats> => {
        const res = await fetches.getOneByUserStats(id);

        if (!res.stats || res.error) {
            console.log(res.error);

            return res;
        }

        setStats(res.stats);

        return res;
    };

    return {
        stats,
        getStats,
    };
}
