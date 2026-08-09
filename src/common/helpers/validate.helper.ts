import { IDateTime } from '../utils';

export const validateMessage = {
  required: (fieldName: string) => `${fieldName} is required.`,

  email: (fieldName: string) => `${fieldName} must be a valid email address.`,

  uuid: (fieldName: string) => `${fieldName} must be a valid UUID.`,

  string: (fieldName: string) => `${fieldName} must be a string.`,

  length: (fieldName: string, from: number, to: number) =>
    `${fieldName} must be a string with length between ${from} and ${to}.`,

  url: (fieldName: string) => `${fieldName} must be a valid URL.`,

  array: (fieldName: string) => `${fieldName} must be an array.`,

  number: (fieldName: string) => `${fieldName} must be a number.`,

  boolean: (fieldName: string) => `${fieldName} must be a boolean.`,

  invalid: (fieldName: string) => `${fieldName} is invalid.`,

  dateFormat: (fieldName: string, dateFormat) =>
    `${fieldName} is invalid (${dateFormat}).`,

  after: (fieldName: string, date: IDateTime | string, allowTime?: boolean) =>
    `${fieldName} must be a date after ${
      typeof date === 'string'
        ? date
        : date.format(allowTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD')
    }.`,

  afterOrEqual: (
    fieldName: string,
    date: IDateTime | string,
    allowTime?: boolean,
  ) =>
    `${fieldName} must be a date after or equal to ${
      typeof date === 'string'
        ? date
        : date.format(allowTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD')
    }.`,

  afterNow: (fieldName: string) =>
    `${fieldName} must be a date after the current date.`,

  afterOrEqualNow: (fieldName: string) =>
    `${fieldName} must be a date after or equal to the current date.`,

  before: (fieldName: string, date: IDateTime | string, allowTime?: boolean) =>
    `${fieldName} must be a date before ${
      typeof date === 'string'
        ? date
        : date.format(allowTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD')
    }.`,

  beforeOrEqual: (
    fieldName: string,
    date: IDateTime | string,
    allowTime?: boolean,
  ) =>
    `${fieldName} must be a date before or equal to ${
      typeof date === 'string'
        ? date
        : date.format(allowTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD')
    }.`,

  beforeNow: (fieldName: string) =>
    `${fieldName} must be a date before the current date.`,

  beforeOrEqualNow: (fieldName: string) =>
    `${fieldName} must be a date before or equal to the current date.`,

  min: {
    array: (fieldName: string, min: number) =>
      `${fieldName} must have at least ${min} items.`,

    string: (fieldName: string, min: number) =>
      `${fieldName} must be at least ${min} characters long.`,

    number: (fieldName: string, min: number) =>
      `${fieldName} must be at least ${min}.`,
  },

  max: {
    array: (fieldName: string, max: number) =>
      `${fieldName} must not exceed ${max} items.`,

    string: (fieldName: string, max: number) =>
      `${fieldName} must not exceed ${max} characters.`,

    number: (fieldName: string, max: number) =>
      `${fieldName} must not exceed ${max}.`,
  },

  exists: (fieldName: string) => `${fieldName} does not exist.`,

  unique: (fieldName: string) => `${fieldName} already exists.`,

  fileTypeNotCorrect: (fieldName: string, types: string[]) =>
    `${fieldName} must be a file with one of the following formats: ${types.join(', ')}`,
};
