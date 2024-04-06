const webpack = require('webpack');
const pkg = require('./package.json');
const { inspect } = require('util');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = (config, options, targetOptions) => {
  delete config.optimization;
  return {
    ...config,
    module: {
      rules: config.module.rules
    },
    resolve: config.resolve,
    plugins: [...config.plugins, new Dotenv()],
    output: {
      filename: config.filename,
      path: config.path,
      clean: true
    },
    resolveLoader: { symlinks: true },
    cache: config.cache,
    target: config.target,
    experiments: config.experiments,
    stats: config.stats,
    devtool: 'source-map',
    mode: 'development'
  };
};
