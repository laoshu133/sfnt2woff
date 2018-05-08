# sfnt2woff

A woff convertrt for ttf or otf.

# Usage

```javascript
const fs = require('fs');
const sfnt2woff = require('sfnt2woff');

const buf = fs.readFileSync('/path/to/xxx.otf');
const woffBuf = sfnt2woff(buf);

fs.writeFileSync('/path/to/xxx.woff', woffBuf);
```
