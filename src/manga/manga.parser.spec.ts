import { getTags, getTitle, getCover, getPageCount, getFavoriteCount, getPages, getTitleAlt } from './manga.parser';

describe('#getTitle', () => {
  test('Working', () => {
    const $ = ((selector: string) => ({ text: () => 'Title' })) as CheerioStatic;
    expect(getTitle($)).toBe('Title');
  });
});

describe('#getTitleAlt', () => {
  test('Working', () => {
    const $ = ((selector: string) => ({ text: () => 'Title' })) as CheerioStatic;
    expect(getTitleAlt($)).toBe('Title');
  });
});

describe('#getCover', () => {
  test('Working', () => {
    const $ = ((selector: string) => ({ attr: (attr: string) => 'Cover' })) as CheerioStatic;
    expect(getCover($)).toBe('Cover');
  });
});

describe('#getPageCount', () => {
  test('Working', () => {
    const $ = ((selector: string) => ({ text: () => '123 pages' })) as CheerioStatic;
    expect(getPageCount($)).toBe(123);
  });
});

describe('#getFavoriteCount', () => {
  test('Working', () => {
    const $ = ((selector: string) => ({ text: () => 'Favorite (123)' })) as CheerioStatic;
    expect(getFavoriteCount($)).toBe(123);
  });
});

describe('#getPages', () => {
  test('Working', () => { });
});

describe('#getTags', () => {
  test('Working', () => { });
});
