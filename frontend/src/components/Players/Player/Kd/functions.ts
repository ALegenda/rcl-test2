export function formatValue(value: number | null) {
    if (value === null) {
        return '-';
    }

    return value.toFixed(2);
}
