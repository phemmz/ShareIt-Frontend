const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const baseWebpack = require('./webpack.base.config');

module.exports = merge(baseWebpack, {
  devtool: "eval",
  devServer: {
    contentBase: path.join(__dirname, "../src"),
    historyApiFallback: true,
    compress: true,
    port: 9000,
    hot: true,
    publicPath: "http://localhost:9000/",
    watchContentBase: true,
    watchOptions: {
      poll: true,
      ignored: /node_modules/
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});
