export default function(value: number): string {
    return `${value < 10 ? 0 : ''}${value}`;
}
