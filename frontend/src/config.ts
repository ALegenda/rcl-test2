export enum CONFIG_MODE {
    DEV = 'DEV',
    TEST = 'TEST',
    PROD = 'PROD',
}

export interface IConfig {
    MODE: CONFIG_MODE;
    VERSION: string;

    URL: string;
    WS_URL: string;

    VK_URL: string;
    TWITCH_URL: string;
    YOUTUBE_URL: string;
}

const config: IConfig = {
    MODE: String(process.env.REACT_APP_MODE) as CONFIG_MODE,
    VERSION: String(process.env.REACT_APP_VERSION),

    URL: String(process.env.REACT_APP_URL),
    WS_URL: String(process.env.REACT_APP_WS_URL),

    VK_URL: String(process.env.REACT_APP_VK_URL),
    TWITCH_URL: String(process.env.REACT_APP_TWITCH_URL),
    YOUTUBE_URL: String(process.env.REACT_APP_YOUTUBE_URL),
};

console.log(`Project mode: ${config.MODE}`);
console.log(`Project version: ${config.VERSION}`);

export default config;
