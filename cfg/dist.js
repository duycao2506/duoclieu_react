'use strict';

let path = require('path');
let webpack = require('webpack');

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  entry: path.join(__dirname, '../src/index'),
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          unused: false
        }
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: defaultSettings.getDefaultModules(),
  // output: {
  //   publicPath: '/'
  // },
  devServer: {
    contentBase: path.join(__dirname, '/'),
        compress: true,
        watchContentBase: true,
        watchOptions: {
            poll: true
        },
        historyApiFallback: true,
        historyApiFallback: {
            // rewrites: [
            //     { from: /^\/tacos/, to: '/index.html' },
            // ],
            index: '/index.html'
        },
        proxy: {
            '/*': {
                target: 'http://localhost',
                pathRewrite: { '^/tacos': '' }
            }
        }
        
  }
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
