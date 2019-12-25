import cheerio from 'cheerio';

import { emptyToNull, regexExtract, sanitizeText, stripNewLine, toInt, isEmpty, isEmptyString, emptyStringToNull, getParentText } from './utils.parse';

describe('#isEmpty', () => {
  test('Works', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(NaN)).toBe(true);
    expect(isEmpty('')).toBe(false);
  });
});

describe('#emptyToNull', () => {
  test('Works', () => {
    expect(emptyToNull(null)).toBe(null);
    expect(emptyToNull(undefined)).toBe(null);
    expect(emptyToNull(NaN)).toBe(null);
    expect(emptyToNull('')).toBe('');
  });
});

describe('#isEmptyString', () => {
  test('Works', () => {
    expect(isEmptyString(null)).toBe(true);
    expect(isEmptyString(undefined)).toBe(true);
    expect(isEmptyString('')).toBe(true);
    expect(isEmptyString('   \n   ')).toBe(true);
    expect(isEmptyString(' Some ')).toBe(false);
  });
});

describe('#emptyStringToNull', () => {
  test('Works', () => {
    expect(emptyStringToNull(null)).toBe(null);
    expect(emptyStringToNull(undefined)).toBe(null);
    expect(emptyStringToNull('')).toBe(null);
    expect(emptyStringToNull('   \n   ')).toBe(null);
    expect(emptyStringToNull(' Some ')).toBe(' Some ');
  });
});

describe('#stripNewLine', () => {
  test('Works', () => {
    expect(stripNewLine('\n\n\n')).toBe('');
    expect(stripNewLine('     ')).toBe(' ');
    expect(stripNewLine(' ')).toBe(' ');
  });
});

describe('#sanitizeText', () => {
  test('Works', () => {
    expect(sanitizeText(null)).toBe(null);
    expect(sanitizeText(undefined)).toBe(null);
    expect(sanitizeText('')).toBe(null);
    expect(sanitizeText('\n\n\n')).toBe(null);
    expect(sanitizeText('     ')).toBe(null);
    expect(sanitizeText(' ')).toBe(null);
  });
});

describe('#regexExtract', () => {
  test('Works', () => {
    expect(regexExtract('https://nhentai.net/g/294481/', /https?:\/\/nhentai\.net\/g\/(\d+)\/?/i)).toBe('294481');
  });
});

describe('#toInt', () => {
  test('Works', () => {
    expect(toInt(null)).toBe(null);
    expect(toInt(undefined)).toBe(null);
    expect(toInt('')).toBe(null);
    expect(toInt('0')).toBe(0);
    expect(toInt('1245678')).toBe(1245678);
  });
});

describe('#toInt', () => {
  test('getParentText', () => {
    const $ = cheerio.load('<a>Some text<span>Other<span></a>');

    expect(getParentText($('a'))).toBe('Some text')
  });
});
