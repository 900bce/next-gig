const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': resolve('src'),
    '@components': resolve('src/components'),
  };
  return config;
};
