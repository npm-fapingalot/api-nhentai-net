import cheerio from 'cheerio';
import fetch from 'node-fetch';

import * as SELECTOR from './list.selectors';
import * as URL from './list.url';
import { IPrevManga } from './list.schema';
import { toInt, regexExtract, sanitizeText } from '../utils.parse';


// Parsers
export const ID_REGEX = /^\/(g|gallery)\/(\d+)\/$/i;
export const getID = ($: Cheerio): number | null =>
  toInt(regexExtract(sanitizeText($.find(SELECTOR.MANGA_LINK).attr('href')), ID_REGEX, 2));

export const getTitle = ($: Cheerio): string | null => sanitizeText($.find(SELECTOR.MANGA_TITLE).text());
export const getThumbnail = ($: Cheerio): string | null => sanitizeText($.find(SELECTOR.MANGA_IMG).attr('data-src'));

// Main parsers
export const getMangaFromCheerio = ($: CheerioStatic): IPrevManga[] => {
  return $(SELECTOR.MANGA).map((ignore, elRaw) => {
    const el = $(elRaw);

    const id = getID(el);
    if (!id) { throw new Error('Invalid id: ' + id); }

    const thumbnail = getThumbnail(el);
    if (!thumbnail) { throw new Error('Thumbnail is empty'); }

    const title = getTitle(el);
    if (!title) { throw new Error('Title is empty'); }

    return {
      id,
      thumbnail,
      title,
    } as IPrevManga;
  }).get();
};

export const getHomeMangaHTML = (htmlSource: string): IPrevManga[] =>
  getMangaFromCheerio(cheerio.load(htmlSource));

// Different url generators
export const getHomeManga = async (page = 0): Promise<IPrevManga[]> =>
  getHomeMangaHTML(await (await fetch(URL.home(page))).text());

export const searchByText = async (query: string, page = 0): Promise<IPrevManga[]> =>
  getHomeMangaHTML(await (await fetch(URL.search(query, page))).text());

export const searchByCharacter = async (character: string, page = 0): Promise<IPrevManga[]> =>
  getHomeMangaHTML(await (await fetch(URL.character(character, page))).text());
export const searchByTag = async (tag: string, page = 0): Promise<IPrevManga[]> =>
  getHomeMangaHTML(await (await fetch(URL.tag(tag, page))).text());
export const searchByArtist = async (artist: string, page = 0): Promise<IPrevManga[]> =>
  getHomeMangaHTML(await (await fetch(URL.artist(artist, page))).text());
export const searchByParody = async (parody: string, page = 0): Promise<IPrevManga[]> =>
  getHomeMangaHTML(await (await fetch(URL.parody(parody, page))).text());
export const searchByGroup = async (group: string, page = 0): Promise<IPrevManga[]> =>
  getHomeMangaHTML(await (await fetch(URL.group(group, page))).text());
