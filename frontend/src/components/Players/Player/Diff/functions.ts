export function formatValue(value: number | null) {
    if (value === null) {
        return '-';
    }

    return `${value > 0 ? '+' : ''}${value}`;
}
