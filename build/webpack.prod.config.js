const webpack = require('webpack');
const merge = require('webpack-merge');

const baseWebpack = require('./webpack.base.config');

module.exports = merge(baseWebpack, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
});
