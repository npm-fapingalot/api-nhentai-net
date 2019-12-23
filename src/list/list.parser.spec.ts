import { getID, getTitle, getThumbnail } from './list.parser';

describe('#getID', () => {
  test('Working', () => {
    const $ = { find: ((selector: string) => ({ attr: (attr: string) => '/gallery/12345/' })) } as Cheerio;
    expect(getID($)).toBe(12345);
  });
});

describe('#getTitle', () => {
  test('Working', () => {
    const $ = { find: ((selector: string) => ({ text: () => 'Title' })) } as Cheerio;
    expect(getTitle($)).toBe('Title');
  });
});


describe('#getThumbnail', () => {
  test('Working', () => {
    const $ = { find: ((selector: string) => ({ attr: (attr: string) => 'link' })) } as Cheerio;
    expect(getThumbnail($)).toBe('link');
  });
});

