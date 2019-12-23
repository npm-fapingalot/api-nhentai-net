import { home, search, character, tag, artist, group, parody } from './list.url';

describe('#home', () => {
  test('Usage', () => {
    expect(home(2)).toBe('https://nhentai.net/?page=3');
  });
});


describe('#search', () => {
  test('Usage', () => {
    expect(search('lolicon', 2)).toBe('https://nhentai.net/search/?q=lolicon&page=3');
  });
});

describe('#character', () => {
  test('Usage', () => {
    expect(character('neko-musume', 2)).toBe('https://nhentai.net/character/neko-musume/?page=3');
  });
});
describe('#tag', () => {
  test('Usage', () => {
    expect(tag('lolicon', 2)).toBe('https://nhentai.net/tag/lolicon/?page=3');
  });
});
describe('#artist', () => {
  test('Usage', () => {
    expect(artist('izumi-yuujiro', 2)).toBe('https://nhentai.net/artist/izumi-yuujiro/?page=3');
  });
});
describe('#parody', () => {
  test('Usage', () => {
    expect(parody('gegege-no-kitarou', 2)).toBe('https://nhentai.net/parody/gegege-no-kitarou/?page=3');
  });
});

describe('#group', () => {
  test('Usage', () => {
    expect(group('laomeng', 2)).toBe('https://nhentai.net/group/laomeng/?page=3');
  });
});
