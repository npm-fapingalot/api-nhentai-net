---
to: src/index.ts
inject: true
prepend: true
---
export * from './<%= h.changeCase.lower(h.changeCase.header(name)) %>';
