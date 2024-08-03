const webpack = require('webpack');

module.exports = function override(config, env) {
  config.module.rules.push({
    test: /@babel\/standalone/,
    parser: { requireEnsure: false }
  });

  return config;
};