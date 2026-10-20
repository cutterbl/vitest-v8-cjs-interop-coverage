# coverage-v8 counts Vite's CommonJS interop as branches in browser mode

`src/a.ts` has no branches. It namespace-imports a CommonJS package (`react-is`):

```ts
import * as ReactIs from 'react-is';
```

```sh
npm install
npx playwright install chromium
npm test               # browser mode, v8:       Branches 60% (3/5); 2 uncovered on a.ts line 1
npm run test:node      # node, v8:               Branches 100% (0/0)
npm run test:istanbul  # browser mode, istanbul: Branches 100% (0/0)
```

`src/b.ts` (default import from `react`) and `src/c.ts` (named import from `react`) report no
branches. Only the namespace import is affected.
