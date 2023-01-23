export function parseResponse<IRes extends {error?: any}>(data: string): IRes {
    try {
        return JSON.parse(data);
    } catch (error) {
        return {
            error,
        } as IRes;
    }
}
