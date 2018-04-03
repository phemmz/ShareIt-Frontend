const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: [
    './src/App.jsx'
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg|jpg|otf)$/i,
        loaders: ['file-loader', 'image-webpack-loader']
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'index.html'
    }),
    new ExtractTextPlugin("styles.css"),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
}
