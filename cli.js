#!/usr/bin/env node

const argv = require('optimist')
.usage('Covert otf or ttf font to woff.\nUsage: \n$0 input.otf')
.demand(1)
.default({ o: './' })
.alias('o', 'output')
.describe('o', 'Ouput path')
.argv;

const fs = require('fs');
const path = require('path');
const sfnt2woff = require('./index');

const inputFile = argv._[0];
const inputFilename = path.basename(inputFile, path.extname(inputFile));
const distPath = path.join(argv.output, `${inputFilename}.woff`);

const buf = fs.readFileSync(inputFile);
const woffBuf = sfnt2woff(buf);

fs.writeFileSync(distPath, woffBuf);
