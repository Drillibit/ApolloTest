'use strict';

const path = require('path');

const getRealPath = relativePath => path.resolve(process.cwd(), relativePath);

module.exports = {
  distSrc: getRealPath('dist'),
  assetsSrc: getRealPath('assets'),
  htmlSrc: getRealPath('src/assets/index.html'),
  indexSrc: getRealPath('src/index.tsx'),
  appSrc: getRealPath('src'),
  publicUrl: getRealPath('/'),
  tsConfig: getRealPath('./tsconfig.json'),
  tsLint: getRealPath('./tslint.json')
};
