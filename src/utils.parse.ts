import { isNull, isUndefined } from 'util';

export const emptyToNull = (val: string | null | undefined): string | null =>
    (val === null || val === undefined || !val.length || !val.trim().length) ? null : val;

export const stripNewLine = (val: string | null | undefined): string | null =>
    (val) ? val
        .replace(/(\r\n\t|\n|\r\t)/gm, '')
        .replace(/(\s\s+)/gm, ' ')
        .replace(/(\s)/gm, ' ')
        : null;

export const sanitizeText = (el: string | null | undefined) => emptyToNull(stripNewLine(el));

export const regexExtract = (text: string | null | undefined, regex: RegExp, index = 1): string | null => {
    if (!text) { return null; }

    const numText = regex.exec(text);
    if (!numText || !numText[index]) { return null; }

    return numText[index];
};

export const toInt = (val: string | null | undefined): number | null => {
    if (val === null || val === undefined) { return null; }
    const num = parseInt(val, 10);
    return isNaN(num) ? null : num;
};

export const getParentText = (el: Cheerio): string => el.clone()
    .children()
    .remove()
    .end()
    .text();
