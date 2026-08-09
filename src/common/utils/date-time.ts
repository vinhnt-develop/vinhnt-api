import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isBetween from 'dayjs/plugin/isBetween';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(weekday);
dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);

export type IDateTime = Dayjs;

/**
 * A helper that initializes an IDateTime object from any input.
 */
export const dateTime = (
  input?: string | number | Date,
  tz?: string,
): IDateTime => {
  if (tz) {
    return dayjs(input).tz(tz);
  }
  return dayjs(input);
};

/**
 * Returns the current date and time (UTC or in a specific timezone)
 */
export const now = (tz?: string): IDateTime => {
  if (tz) {
    return dayjs().tz(tz);
  }
  return dayjs();
};

/**
 * Parse a string according to a format
 */
export const parse = (
  dateStr: string,
  format: string,
  tz?: string,
): IDateTime => {
  if (tz) {
    return dayjs.tz(dateStr, format, tz);
  }
  return dayjs(dateStr, format);
};
