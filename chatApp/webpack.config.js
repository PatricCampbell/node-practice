var path = require('path');
var webpack = require('webpack');

var plugins = [];
var devPlugins = [];

module.exports = {
  entry: './public/javascripts/index.js',
  output: {
    filename: './public/javascripts/dist/bundle.js',
  },
  plugins: plugins,
  module: {
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};