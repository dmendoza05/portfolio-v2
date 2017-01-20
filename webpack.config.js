var path = require('path');
var webpack = require('webpack');
var plugins = require('webpack-load-plugins')();
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.join(__dirname + '/js'),
  entry: {
    app: './main.js',
    vendor: [
              'angular', 
              'angular-ui-router', 
              'angular-css'
            ]
  },
  output: {
    filename: 'main.bundle.js',
    path: path.join(__dirname + '/js')
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ "vendor", /* filename= */ "vendor.bundle.js"),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, compress: { warnings: false }}),
    new webpack.NoErrorsPlugin()
    // new webpack.DefinePlugin({ 'process.env.NODE_ENV': `"${config.env}"` })
  ]
};