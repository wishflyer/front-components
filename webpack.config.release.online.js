module.exports = function(webpackConfig) {
  webpackConfig.module.loaders.forEach(function(loader) {
    if (loader.loader === 'babel') {
      // https://github.com/ant-design/babel-plugin-antd
      loader.query.plugins.push('antd');
    }
    return loader;
  });

  // Fix ie8 compatibility
  webpackConfig.module.loaders.unshift({
    test: /\.jsx?$/,
    loader: 'es3ify',
  });

  webpackConfig.externals = {
    jquery: 'window.jQuery',
  };

  webpackConfig.entry = {
    dd:"./src/components/release-entry.js"
  };

  webpackConfig.output.library = 'components'; //https://webpack.github.io/docs/library-and-externals.html
  webpackConfig.output.libraryTarget = 'umd2';

  return webpackConfig;
};
