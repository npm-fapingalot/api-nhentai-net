---
to: src/<%= h.changeCase.lower(h.changeCase.header(name)) %>/<%= h.changeCase.lower(h.changeCase.header(name)) %>.parser.ts
---
import cheerio from 'cheerio';
import fetch from 'node-fetch';

import * as SELECTOR from './<%= h.changeCase.lower(h.changeCase.header(name)) %>.selectors';
import * as URL from './<%= h.changeCase.lower(h.changeCase.header(name)) %>.url';
import { IExample } from './<%= h.changeCase.lower(h.changeCase.header(name)) %>.schema';
