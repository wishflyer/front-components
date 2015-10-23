var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      './components/release-entry.js' // Your appʼs entry point
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'dd.js',
        publicPath: '/static/',
        library: 'components', //https://webpack.github.io/docs/library-and-externals.html
        libraryTarget: 'umd2'
    },
    externals: {
        // 'react': {
        //   root: 'React',
        //   commonjs2: 'react',
        //   commonjs: 'react',
        //   amd: 'react'
        // },
        'components':'components',
        'jquery': {
          root: 'jQuery',
          commonjs2: 'jquery',
          commonjs: 'jquery',
          amd: 'jquery'
        }
      },

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                //exclude: path.join(__dirname, 'node_modules'),
                include: path.join(__dirname, 'components'),
                loader: 'react-hot!babel-loader'
            },
            {
                test: /\.js$/,
                //exclude: /node_modules/,
                //exclude: path.join(__dirname, 'node_modules'),
                include: path.join(__dirname, 'components'),
                loader: 'react-hot!babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
              test: /\.less$/,
              loader: ExtractTextPlugin.extract(
                'css?sourceMap&-minimize!' + 'autoprefixer-loader!' + 'less?sourceMap'
              )
            }, {
              test: /\.css$/,
              loader: ExtractTextPlugin.extract(
                'css?sourceMap&-minimize!' + 'autoprefixer-loader'
              )
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('dd.css')
    ],
    devtool: 'source-map'
}