"use strict";

let path = require('path');
let CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: "entry",
  },

  output: {
    path: __dirname + "/dist",
    filename: "app.js",
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: 'static/index.html' },
    ]),
  ],

  resolve: {
    extensions: ['', '.ts', '.tsx', '.js'],
    root: path.resolve('./src/js'),
    path: path.resolve('node_modules'),
  },

  alias: {
    react: 'react',
  },

  //devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
      },
    ],
  },
};
