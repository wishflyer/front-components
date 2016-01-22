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
    project:"./src/static/project/love/index.jsx"
    //project:"./src/static/project/example/router/index.jsx"
  };

  return webpackConfig;
};
