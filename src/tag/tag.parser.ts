import cheerio from 'cheerio';
import fetch from 'node-fetch';

import * as SELECTOR from './tag.selectors';
import * as URL from './tag.url';
import { ITag } from './tag.schema';
import { sanitizeText, getParentText } from '../utils.parse';

export const getTagsHTML = (html: string): ITag[] => getTagsCheerio(cheerio.load(html));
export const getTagsCheerio = ($: CheerioStatic): ITag[] => {
  return $(SELECTOR.TAG).map((i, elRaw) => {
    const el = $(elRaw);

    return {
      name: sanitizeText(getParentText(el)),
      href: sanitizeText(el.attr('href')),
    };
  }).get();
};

// Functions
export const getTags = async (page = 0): Promise<ITag[]> =>
  getTagsHTML(await (await fetch(URL.tags(page))).text());
export const getArtists = async (page = 0): Promise<ITag[]> =>
  getTagsHTML(await (await fetch(URL.artists(page))).text());
export const getCharacters = async (page = 0): Promise<ITag[]> =>
  getTagsHTML(await (await fetch(URL.characters(page))).text());
export const getParodies = async (page = 0): Promise<ITag[]> =>
  getTagsHTML(await (await fetch(URL.parodies(page))).text());
export const getGroups = async (page = 0): Promise<ITag[]> =>
  getTagsHTML(await (await fetch(URL.groups(page))).text());
