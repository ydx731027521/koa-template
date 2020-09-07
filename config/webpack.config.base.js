const path = require('path');
const WebpackNodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Webpack = require('webpack');

const { APP_PATH, DIST_PATH } = require('./utils');

const webpackBaseConfig = {
  entry: {
    server: path.join(APP_PATH, 'index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: DIST_PATH,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: [path.join(__dirname, '/node_modules')]
      }
    ]
  },
  externals: [
    WebpackNodeExternals()
  ],
  plugins: [
    new CleanWebpackPlugin(),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: process.env.NODE_ENV === 'production' ? "'production'" : "'development'"
      }
    })
  ],
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: true,
    path: true
  }
};

module.exports = webpackBaseConfig;
