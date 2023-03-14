export interface IProps {
    value: boolean;

    onChange(): void;
    // onChange(e: ChangeEvent<HTMLInputElement>): void; // вот тут не понял
}
