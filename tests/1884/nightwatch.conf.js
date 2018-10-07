const path = require('path');

const baseConfig = require('../../nightwatch.conf.base');

module.exports = {
  ...baseConfig,
  src_folders: [path.join(__dirname, 'src')],
  page_objects_path: [path.join(__dirname, 'page-objects')]
};
