/**
 * If the value is empty (null/undefined/NaN/empty string/space string)
 * @param val The value that is being tested
 */
export const isEmpty = (val: any): boolean =>
  val === null
  || val === undefined
  || isNaN(val);

/**
 * Converts a empty {@link isEmpty()} value to null
 * @param val The value being tested
 */
export const emptyToNull = <T>(val: T | null | undefined): T | null =>
  isEmpty(val) ? null : val as T;

/**
 * If the string is empty (null/undefined/empty string/space string)
 * @param val The string that is being tested
 */
export const isEmptyString = (val: string | undefined | null): boolean =>
  val === null
  || val === undefined
  || (typeof val === 'string' && (val.length === 0 || val.trim().length === 0));

/**
 * Converts a empty {@link isEmpty()} string to null
 * @param val The string being tested
 */
export const emptyStringToNull = (val: string | undefined | null): string | null =>
  isEmptyString(val) ? null : val as string;

/**
 * Strips string of new lines and duplicate spaces
 * @param val The input string
 */
export const stripNewLine = (val: string): string =>
  val
    .replace(/(\r\n\t|\n|\r\t)/gm, '')
    .replace(/(\s\s+)/gm, ' ')
    .replace(/(\s)/gm, ' ');

/**
 * Strips the newlines and spaces and checks if empty. If so returns null
 * @param el The string being tested
 */
export const sanitizeText = (el: string | null | undefined) => el ? emptyStringToNull(stripNewLine(el)) : null;

/**
 * Extracts a regex groups value
 * @param text The source string
 * @param regex The regex containing a group '()'
 * @param index The index number of the group that is being extracted. DEFAULTS to 1.
 */
export const regexExtract = (text: string | null | undefined, regex: RegExp, index = 1): string | null => {
  if (!text) { return null; }

  const numText = regex.exec(text);
  if (!numText || !numText[index]) { return null; }

  return numText[index];
};

/**
 * The same as parseInt but checks if empty {@link isEmptyString}
 * @param val The input string
 */
export const toInt = (val: string | null | undefined): number | null => {
  if (isEmptyString(val)) { return null; }
  const num = parseInt(val as string, 10);
  return isNaN(num) ? null : num;
};

/**
 * Gets the text of a component without its children.
 * @param el The element
 */
export const getParentText = (el: Cheerio): string => el.clone()
  .children()
  .remove()
  .end()
  .text();
