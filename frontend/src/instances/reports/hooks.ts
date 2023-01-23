import {
    IReportDemoUser,
    IReportFullUser,
} from './types';
import {
    IGetByUserQuery,
} from './types/requests';
import {
    IGetByUser,
    IGetOneByUser,
} from './types/responses';

import {
    useState,
} from 'react';

import * as fetches from './fetches';

export function useReportsByUser() {
    const [reports, setReports] = useState<IReportDemoUser[] | null>(null);
    const [reportsTotal, setReportsTotal] = useState<number | null>(null);

    const getReports = async (query: IGetByUserQuery): Promise<IGetByUser> => {
        const res = await fetches.getByUser(query);

        if (!res.reports || res.total === undefined || res.error) {
            console.log(res.error);

            return res;
        }

        setReports([...(reports || []), ...res.reports]);
        setReportsTotal(res.total);

        return res;
    };

    return {
        reports,
        reportsTotal,
        getReports,
    };
}

export function useReportByUser() {
    const [report, setReport] = useState<IReportFullUser | null>(null);

    const getReport = async (id: number): Promise<IGetOneByUser> => {
        const res = await fetches.getOneByUser(id);

        if (!res.report || res.error) {
            console.log(res.error);

            return res;
        }

        setReport(res.report);

        return res;
    };

    return {
        report,
        getReport,
    };
}
