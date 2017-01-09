var webpack = require('webpack');
module.exports = {
  context: __dirname + '/js',
  entry: {
    app: './main.js',
    vendor: ['angular', 'angular-ui-router']
  },
  output: {
    path: __dirname + '/js',
    filename: 'main.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ "vendor", /* filename= */ "vendor.bundle.js")
  ]
};
