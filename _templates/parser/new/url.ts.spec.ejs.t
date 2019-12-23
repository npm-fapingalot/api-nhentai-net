---
to: src/<%= h.changeCase.lower(h.changeCase.header(name)) %>/<%= h.changeCase.lower(h.changeCase.header(name)) %>.url.spec.ts
---
import { getURL } from './<%= h.changeCase.lower(h.changeCase.header(name)) %>.url';

describe('#getURL', () => {
  test('Usage', () => {
    expect(getURL).toThrowError('Unimplemented');
  });
});
