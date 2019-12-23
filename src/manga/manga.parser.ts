import cheerio from 'cheerio';
import fetch from 'node-fetch';

import * as SELECTOR from './manga.selectors';
import * as URL from './manga.url';
import { IManga, IPage, ITagged } from './manga.schema';
import { sanitizeText, regexExtract, toInt, getParentText, emptyToNull } from '../utils.parse';
import { ITag } from '../tag';

// SELECTOR
export const getTitle = ($: CheerioStatic): string | null =>
  sanitizeText($(SELECTOR.TITLE).text());
export const getTitleAlt = ($: CheerioStatic): string | null =>
  sanitizeText($(SELECTOR.TITLE_ALT).text());

export const getCover = ($: CheerioStatic): string | null =>
  $(SELECTOR.COVER_IMAGE).attr('data-src') || null;

export const PAGE_COUNT_REGEX = /(\d+)\s+pages/i;
export const getPageCount = ($: CheerioStatic): number | null =>
  toInt(regexExtract(sanitizeText($(SELECTOR.PAGE_COUNT).text()), PAGE_COUNT_REGEX));

export const FAVORITE_COUNT_REGEX = /\((\d+)\)/i;
export const getFavoriteCount = ($: CheerioStatic): number | null =>
  toInt(regexExtract(sanitizeText($(SELECTOR.FAVORITE_COUNT).text()), FAVORITE_COUNT_REGEX));

export const getPages = ($: CheerioStatic): IPage[] =>
  $(SELECTOR.THUMBNAIL_IMAGES)
    .map((i, el) => $(el).attr('data-src'))
    .get()
    .filter((val) => emptyToNull(val) !== null)
    .map((thumbnailURL) => ({
      thumbnailURL,
      imgURL: [
        thumbnailURL
          .replace(/t\.png$/, '.png')
          .replace(/t\.jpg$/, '.jpg')
          .replace(/t\.gif$/, '.gif')
          .replace(/^https:\/\/t/, 'https://i'),
      ],
    }));

export const getTags = ($: CheerioStatic): ITagged => {
  const info: { [key: string]: ITag[] } = {};
  $(SELECTOR.TAGS_CONTAINER)
    .each((i, elRaw) => {
      const el = $(elRaw);

      const name = getParentText(el).trim().toLocaleLowerCase();
      const values = el.find(SELECTOR.CONTAINER_TAG)
        .map((i2, tag) => ({
          name: getParentText($(tag)).trim(),
          href: $(tag).attr('href'),
        } as ITag)).get();

      info[name.substring(0, name.length - 1)] = values;
    });

  return {
    parodies: info.parodies || [],
    characters: info.characters || [],
    tags: info.tags || [],
    artists: info.artists || [],
    groups: info.groups || [],
    languages: info.languages || [],
    categories: info.categories || [],
  };
};

// Main parser
export const getManga = async (id: number): Promise<IManga> =>
  getMangaFromHTML(await (await fetch(URL.manga(id))).text(), id);

export const getMangaFromHTML = (htmlSource: string, id: number): IManga =>
  getMangaFromCheerio(cheerio.load(htmlSource), id);

export const getMangaFromCheerio = ($: CheerioStatic, id: number): IManga => {
  const title = getTitle($);
  if (!title) { throw new Error('Title is empty'); }

  const pageCount = getPageCount($);
  if (!pageCount) { throw new Error('PageCount is empty'); }

  const favorite = getFavoriteCount($);
  if (!favorite) { throw new Error('Favorite is empty'); }

  const coverURL = getCover($);
  if (!coverURL) { throw new Error('Cover is null'); }

  const pages = getPages($);
  if (pages.length !== pageCount) { throw new Error('Page count doesn\'t match pages'); }

  return {
    id,

    title,
    titleAlt: getTitleAlt($),

    ...getTags($),

    coverURL,

    pageCount,
    pages,

    favorite,
  };
};
