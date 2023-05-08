export interface Schedule {
    calendar: Array<DayHour>
};

export interface DayHour {
    day: string,
    hours: string[]
}