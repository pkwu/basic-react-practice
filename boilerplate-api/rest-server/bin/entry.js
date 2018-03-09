require('babel-register');
require('babel-polyfill');

const fs = require('fs');
const path = require('path');
const env = require('dotenv');

if (!fs.readFileSync(`${__dirname}/../.env`)) {
  console.log('.env config file must exist in rest-server root');
  process.exit();
}

env.config({
  path: path.resolve(`${__dirname}/../.env`),
});

require('../src');