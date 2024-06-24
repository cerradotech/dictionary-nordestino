import { DateHelper } from '~/modules';
import { DATE_AGES, DATE_TYPES } from '~/utils';
import '~/core';

export const parseISO = (date: string): Date => DateHelper.parseISO(date);

export const parseTo = (date: string, dateType: DATE_TYPES): Date =>
  DateHelper.parse(date, dateType, new Date());

export const formatDateTo = (date: string, dateType: DATE_TYPES): string =>
  DateHelper.format(parseISO(date), dateType);

export const formatNowDateTo = (dateType: DATE_TYPES): string =>
  DateHelper.format(Date.now(), dateType);

export const todayIsBefore = (date: string): boolean =>
  DateHelper.isBefore(parseISO(date), Date.now());

export const todayIsAfter = (date: string): boolean =>
  DateHelper.isAfter(parseISO(date), Date.now());

export const diffDays = ({ firstDate, secondDate }: DateInterval): number =>
  DateHelper.differenceInDays(parseISO(firstDate), parseISO(secondDate));

export const diffMonths = ({ firstDate, secondDate }: DateInterval): number =>
  DateHelper.differenceInMonths(parseISO(firstDate), parseISO(secondDate));

export const diffYears = ({ firstDate, secondDate }: DateInterval): number =>
  DateHelper.differenceInYears(parseISO(firstDate), parseISO(secondDate));

export const subtractDays = ({ days, date }: DateMath): string =>
  DateHelper.subDays(parseISO(date), days).toISOString();

export const subtractMonths = ({ months, date }: DateMath): string =>
  DateHelper.subMonths(parseISO(date), months).toISOString();

export const subtractYears = ({ years, date }: DateMath): string =>
  DateHelper.subYears(parseISO(date), years).toISOString();

export const addDays = ({ days, date }: DateMath): string =>
  DateHelper.addDays(parseISO(date), days).toISOString();

export const addMonths = ({ months, date }: DateMath): string =>
  DateHelper.addMonths(parseISO(date), months).toISOString();

export const addYears = ({ years, date }: DateMath): string =>
  DateHelper.addYears(parseISO(date), years).toISOString();

export const isSameDay = ({ firstDate, secondDate }: DateInterval): boolean =>
  DateHelper.isSameDay(parseISO(firstDate), parseISO(secondDate));

export const isSameMonth = ({ firstDate, secondDate }: DateInterval): boolean =>
  DateHelper.isSameMonth(parseISO(firstDate), parseISO(secondDate));

export const isSameYear = ({ firstDate, secondDate }: DateInterval): boolean =>
  DateHelper.isSameYear(parseISO(firstDate), parseISO(secondDate));

export const isValidBirthDate = (date: string): boolean =>
  DateHelper.isWithinInterval(parseISO(date), {
    end: DateHelper.subYears(new Date(), DATE_AGES.MIN_AGE),
    start: DateHelper.subYears(new Date(), DATE_AGES.MAX_AGE),
  });

export const isValidLegalAge = (date: string): boolean =>
  DateHelper.isWithinInterval(parseISO(date), {
    end: DateHelper.subYears(new Date(), DATE_AGES.LEGAL_AGE),
    start: DateHelper.subYears(new Date(), DATE_AGES.MAX_AGE),
  });

export const getTimestampDate = (date: string): number =>
  DateHelper.parseISO(date).getTime() / 1000;

export const reverseScreenDateToParse = (date: string): string =>
  date.split('/').reverse().join('-');
