import { getTags } from './tag.parser';

describe('#getHomeManga', () => {
  test('Compatibility', async () => {
    const tags = await getTags();

    expect(tags).toBeDefined();
    expect(tags).toHaveLength(120);
  }, 2000000);
});
