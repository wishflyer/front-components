var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.project.js');
//var config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
	//contentBase: './static', //设置静态资源位置
  	publicPath: config.output.publicPath,
  	hot: true,
  	historyApiFallback: true
}).listen(3001, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});