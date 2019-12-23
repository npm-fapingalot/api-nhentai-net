---
to: src/<%= h.changeCase.lower(h.changeCase.header(name)) %>/index.ts
---
export {} from './<%= h.changeCase.lower(h.changeCase.header(name)) %>.parser';
export * from './<%= h.changeCase.lower(h.changeCase.header(name)) %>.schema';
