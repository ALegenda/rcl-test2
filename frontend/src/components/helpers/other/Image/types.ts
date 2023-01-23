export interface IProps {
    src: string;
    mode: 'cover' | 'contain';

    className?: string;
    alt?: string;

    onClick?(): void;
}
