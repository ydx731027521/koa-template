const { merge } = require('webpack-merge');

const webpackBaseConfig = require('./webpack.config.base');

const webpackDevConfig = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  stats: { children: false }
});

module.exports = webpackDevConfig;