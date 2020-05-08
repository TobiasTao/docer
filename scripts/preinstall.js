'use strict';

const nodeMajor = Number(process.versions.node.match(/^(\d+)\./)[1]);
if (nodeMajor < 10.13) {
  console.error('[ERROR] Node.js v10.13 or above is required.\n');
  process.exit(1);
}

if (!/npm-cli\.js$/.test(process.env.npm_execpath)) {
  console.error('[ERROR] Please use npm to install dependencies.\n');
  process.exit(1);
}
