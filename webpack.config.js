"use strict";

let path = require('path');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    root: path.resolve('./src'),
  },
  entry: {
    main: "entry",
  },
  output: {
    path: __dirname + "/dist",
    filename: "app.js",
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
};
