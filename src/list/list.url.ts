export const home = (page = 0) => `https://nhentai.net/?page=${page + 1}`;
export const search = (query: string, page = 0) => `https://nhentai.net/search/?q=${query}&page=${page + 1}`;
export const character = (character: string, page = 0) => `https://nhentai.net/character/${character}/?page=${page + 1}`;
export const tag = (tag: string, page = 0) => `https://nhentai.net/tag/${tag}/?page=${page + 1}`;
export const artist = (artist: string, page = 0) => `https://nhentai.net/artist/${artist}/?page=${page + 1}`;
export const parody = (parody: string, page = 0) => `https://nhentai.net/parody/${parody}/?page=${page + 1}`;
export const group = (group: string, page = 0) => `https://nhentai.net/group/${group}/?page=${page + 1}`;
