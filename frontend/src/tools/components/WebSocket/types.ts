export interface IProps {
    path: string;
    query?: Record<string, any>;
    reconnectionTime?: number;

    onMessage<IRes>(message: IRes): void;
    onReconnected?(): void;
    onDisconnected?(): void;
}
