import { tags, groups, parodies, characters, artists } from './tag.url';

describe('#tags', () => {
  test('Usage', () => {
    expect(tags(2)).toBe('https://nhentai.net/tags/?page=3');
  });
});

describe('#artists', () => {
  test('Usage', () => {
    expect(artists(2)).toBe('https://nhentai.net/artists/?page=3');
  });
});

describe('#characters', () => {
  test('Usage', () => {
    expect(characters(2)).toBe('https://nhentai.net/characters/?page=3');
  });
});

describe('#parodies', () => {
  test('Usage', () => {
    expect(parodies(2)).toBe('https://nhentai.net/parodies/?page=3');
  });
});

describe('#groups', () => {
  test('Usage', () => {
    expect(groups(2)).toBe('https://nhentai.net/groups/?page=3');
  });
});

