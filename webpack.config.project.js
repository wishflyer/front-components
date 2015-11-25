var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:3001',
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      './static/project/love/index.jsx' // Your appʼs entry point
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'dd.js',
        publicPath: '/onlineStatic/',
        library: 'project', //https://webpack.github.io/docs/library-and-externals.html
        libraryTarget: 'umd2'
    },
    externals: {
        // 'react': {
        //   root: 'React',
        //   commonjs2: 'react',
        //   commonjs: 'react',
        //   amd: 'react'
        // },
        'project':'project',
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
                include: path.join(__dirname, 'static/project/'),
                loader: 'react-hot!babel-loader'
            },
            {
                test: /\.js$/,
                //exclude: /node_modules/,
                //exclude: path.join(__dirname, 'node_modules'),
                include: path.join(__dirname, 'static/project/'),
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