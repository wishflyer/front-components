// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

const webpack = require('atool-build/lib/webpack');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

module.exports = function (webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['antd', {
    style: 'css',  // if true, use less
  }]);

  //Enable this if you have to support IE8.
  webpackConfig.module.loaders.unshift({
    test: /\.jsx?$/,
    loader: 'es3ify-loader',
  });

  // Parse all less files as css module.
  webpackConfig.module.loaders.forEach(function(loader, index) {
    if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
      loader.test = /\.dont\.exist\.file/;
    }
    if (loader.test.toString() === '/\\.module\\.less$/') {
      loader.test = /\.less$/;
    }
  });

  webpackConfig.externals = {
    jquery: 'window.jQuery',
  };

  webpackConfig.entry = {
    dd:"./src/components/release-entry-min.js"
  };

  webpackConfig.output.library = 'components';
  webpackConfig.output.libraryTarget = 'umd2';

  return webpackConfig;
};
