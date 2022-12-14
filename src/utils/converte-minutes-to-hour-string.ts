// 1100 => 18:00

export function converteMinutesToHour(minutesAmount: number) {
    const hours = Math.floor(minutesAmount / 60);
    const minutes = minutesAmount % 60;

    return `${hours}:${minutes}`;
};