import { getManga } from './manga.parser';

describe('#getManga', () => {
  test('Compatibility', async () => {
    const manga = await getManga(294567);

    expect(manga).toBeDefined();
    expect(manga).toHaveProperty('id', 294567);
    expect(manga).toHaveProperty('title', '[HaraPan Power (Sakura Nobita)] Chloe Seiibutsu-ka Program (Fate/kaleid liner Prisma Illya)');
    expect(manga).toHaveProperty('pageCount', 18);
  }, 20000000);
});
