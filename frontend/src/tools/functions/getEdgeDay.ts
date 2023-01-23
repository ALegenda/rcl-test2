export default function getEdgeDay(date?: any, isRight = true): Date {
    const value = date ? new Date(date) : new Date();

    if (isNaN(value.getTime())) {
        return getEdgeDay(new Date(), isRight);
    }

    value.setHours(0);
    value.setMinutes(0);
    value.setSeconds(0);
    value.setMilliseconds(0);

    if (isRight) {
        value.setDate(value.getDate() + 1);
        value.setTime(value.getTime() - 1);
    }

    return value;
}
