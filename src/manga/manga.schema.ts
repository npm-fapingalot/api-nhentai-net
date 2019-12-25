import { ITag } from '../tag';

/**
 * A object used to describe a page
 */
export interface IPage {
  /**
   * The thumbnail URL
   */
  thumbnailURL: string;

  /**
   * A list of possible image URLs
   */
  imgURL: string[];
}

/**
 * A object used to describe a tagged data
 */
export interface ITagged {
  parodies: ITag[];
  characters: ITag[];
  tags: ITag[];
  artists: ITag[];
  groups: ITag[];
  languages: ITag[];
  categories: ITag[];
}

/**
 * A object used to describe a manga data
 */
export interface IData {
  /**
   * The cover URL
   */
  coverURL: string;

  /**
   * The number of pages
   */
  pageCount: number;
  /**
   * The pages
   */
  pages: IPage[];
}

/**
 * A object used to extra data
 */
export interface IExtra {
  /**
   * The favorite number
   */
  favorite: number;
}

/**
 * A object used to describe a manga
 */
export interface IManga extends ITagged, IData, IExtra {
  /**
   * The id of the manga
   */
  id: number;

  /**
   * The title of the manga
   */
  title: string;
  /**
   * The alt title usually in japanese
   */
  titleAlt: string | null;
}
