import { getHomeManga } from './list.parser';

describe('#getHomeManga', () => {
  test('Compatibility', async () => {
    const manga = await getHomeManga();

    expect(manga).toBeDefined();
    expect(manga).toHaveLength(25);
  }, 2000000);
});
