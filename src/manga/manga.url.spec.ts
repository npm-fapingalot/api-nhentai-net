import { manga } from './manga.url';

describe('#manga', () => {
  test('Usage', () => {
    expect(manga(1245)).toBe('https://nhentai.net/g/1245/');
  });
});
