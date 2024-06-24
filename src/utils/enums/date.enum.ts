export enum DATE_TYPES {
  DAY = 'dd',
  MONTH = 'MMM',
  YEAR = 'yyyy',

  ISO_DATE = 'yyyy-MM-dd',
  ISO_DATE_TIME = 'yyyy-MM-ddTHH:mm:ss',

  UTC_DATE = 'MM/dd/yyyy',
  UTC_DATE_TIME = 'MM/dd/yyyy HH:mm:ss',

  TIME = 'HH:mm:ss',
  TIME_WITHOUT_SECONDS = 'HH:mm',

  LONG_DATE = `d 'de' MMMM, yyyy`,
  LONG_DATE_TIME = `d 'de' MMMM, yyyy - HH:mm:ss`,
  LONG_DATE_TIME_WITHOUT_SECONDS = `d 'de' MMMM, yyyy - HH:mm`,

  SHORT_DATE = 'dd/MM/yyyy',
  SHORT_DATE_TIME = 'dd/MM/yyyy HH:mm:ss',
  SHORT_DATE_TIME_WITHOUT_SECONDS = 'dd/MM/yyyy HH:mm',

  SHORT_YEAR_DATE = 'dd/MM/yy',
  SHORT_YEAR_TIME = 'dd/MM/yy - HH:mm:ss',
  SHORT_YEAR_TIME_WITHOUT_SECONDS = 'dd/MM/yy HH:mm',

  DATE_WITHOUT_YEAR = 'dd/MM',

  SCREEN_DATE = 'DD/MM/YYYY',
}

export enum DATE_AGES {
  MIN_AGE = 1,
  LEGAL_AGE = 18,
  MAX_AGE = 95,
}
