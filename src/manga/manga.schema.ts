import { ITag } from '../tag';

export interface IPage {
  thumbnailURL: string;
  imgURL: string[];
}

export interface ITagged {
  parodies: ITag[];
  characters: ITag[];
  tags: ITag[];
  artists: ITag[];
  groups: ITag[];
  languages: ITag[];
  categories: ITag[];
}

export interface IData {
  coverURL: string;

  pageCount: number;
  pages: IPage[];
}

export interface IExtra {
  favorite: number;
}

export interface IManga extends ITagged, IData, IExtra {
  id: number;

  title: string;
  titleAlt: string | null;
}
