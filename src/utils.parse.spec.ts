import { emptyToNull, regexExtract, sanitizeText, stripNewLine, toInt } from './utils.parse';

describe('#emptyToNull', () => {
    test('Works', () => {
        expect(emptyToNull('')).toBe(null);
        expect(emptyToNull('     ')).toBe(null);
        expect(emptyToNull(null)).toBe(null);
    });
});
describe('#stripNewLine', () => {
    test('Works', () => {
        expect(stripNewLine('\n\n\n')).toBe('');
    });
});
describe('#sanitizeText', () => {
    test('Works', () => {
        expect(sanitizeText('\n\n\n')).toBe(null);
    });
});
describe('#regexExtract', () => {
    test('Works', () => {
        expect(regexExtract('https://nhentai.net/g/294481/', /https?:\/\/nhentai\.net\/g\/(\d+)\/?/i)).toBe('294481');
    });
});
describe('#toInt', () => {
    test('Works', () => {
        expect(toInt(null)).toBe(null);
        expect(toInt(undefined)).toBe(null);
        expect(toInt('')).toBe(null);
        expect(toInt('0')).toBe(0);
        expect(toInt('1245678')).toBe(1245678);
    });
});
