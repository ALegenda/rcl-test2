import {
    IStats,
    ITeamDemoUser,
    ITeamUser,
} from './types';
import {
    IGetByUserQuery,
    IGetDemoByUserQuery,
} from './types/requests';
import {
    IGetByUser,
    IGetDemoByUser,
    IGetOneByUser,
    IGetOneByUserStats,
} from './types/responses';

import {
    useState,
} from 'react';
import {
    atom,
    useRecoilState,
} from 'recoil';

import * as fetches from './fetches';

const teamsAtom = atom<ITeamUser[] | null>({
    key: 'teams',
    default: null,
});

const teamsTotalAtom = atom<number | null>({
    key: 'teamsTotal',
    default: null,
});

export function useTeamsDemoByUser() {
    const [teams, setTeams] = useState<ITeamDemoUser[] | null>(null);
    const [teamsTotal, setTeamsTotal] = useState<number | null>(null);

    const getTeams = async (query: IGetDemoByUserQuery): Promise<IGetDemoByUser> => {
        const res = await fetches.getDemoByUser(query);

        if (!res.teams || res.total === undefined || res.error) {
            console.log(res.error);

            return res;
        }

        setTeams([...(teams ?? []), ...res.teams]);
        setTeamsTotal(res.total);

        return res;
    };

    return {
        teams,
        teamsTotal,
        getTeams,
    };
}

export function useTeamsStoredByUser() {
    const [teams, setTeams] = useRecoilState(teamsAtom);
    const [teamsTotal, setTeamsTotal] = useRecoilState(teamsTotalAtom);

    const getTeams = async (query: IGetByUserQuery): Promise<IGetByUser> => {
        const res = await fetches.getByUser(query);

        if (!res.teams || res.total === undefined || res.error) {
            console.log(res.error);

            return res;
        }

        setTeams([...(teams ?? []), ...res.teams]);
        setTeamsTotal(res.total);

        return res;
    };

    return {
        teams,
        teamsTotal,
        getTeams,
    };
}

export function useTeamsByUser() {
    const [teams, setTeams] = useState<ITeamUser[] | null>(null);
    const [teamsTotal, setTeamsTotal] = useState<number | null>(null);

    const getTeams = async (query: IGetByUserQuery): Promise<IGetByUser> => {
        const res = await fetches.getByUser(query);

        if (!res.teams || res.total === undefined || res.error) {
            console.log(res.error);

            return res;
        }

        setTeams([...(teams || []), ...res.teams]);
        setTeamsTotal(res.total);

        return res;
    };

    return {
        teams,
        teamsTotal,
        getTeams,
    };
}

export function useTeamByUser() {
    const [team, setTeam] = useState<ITeamUser | null>(null);
    const [stats, setStats] = useState<IStats | null>(null);

    const getTeam = async (id: number): Promise<IGetOneByUser> => {
        setTeam(null);

        const res = await fetches.getOneByUser(id);

        if (!res.team || res.error) {
            console.log(res.error);

            return res;
        }

        setTeam(res.team);

        return res;
    };

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
        team,
        stats,
        getTeam,
        getStats,
    };
}
