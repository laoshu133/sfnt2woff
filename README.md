# sfnt2woff

A woff convertrt for ttf or otf, Support for Node.js and Browsers.

Based on [odemiral/woff2sfnt-sfnt2woff](https://github.com/odemiral/woff2sfnt-sfnt2woff)

# Usage

With a package:

```javascript
const fs = require('fs');
const sfnt2woff = require('sfnt2woff');

const buf = fs.readFileSync('/path/to/xxx.otf');
const woffBuf = sfnt2woff(buf);

fs.writeFileSync('/path/to/xxx.woff', woffBuf);
```

With cli:

```
sfnt2woff input.otf

Options:
  -o, --output  Ouput path  [default: "./"]

```

# License

MIT
