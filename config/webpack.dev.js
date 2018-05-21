const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const path = require('path');
const {
  namedModulesPlugin,
  hotModuleReplacementPlugin
} = require('./webpack.plugins');

module.exports = merge(config, {
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../src'),
    publicPath: 'http://activo.andela.com:3000/',
    hot: true,
    overlay: true,
    port: 3000,
    host: 'localhost',
    open: true,
    watchContentBase: true,
    watchOptions: {
      poll: true,
      ignored: /node_modules/
    }
  },
  plugins: [namedModulesPlugin, hotModuleReplacementPlugin],
});
