const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const {
  namedModulesPlugin,
  htmlWebpack,
  hotModuleReplacementPlugin
} = require('./webpack.plugins');

module.exports = merge(config, {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  },
  plugins: [namedModulesPlugin, hotModuleReplacementPlugin]
});
