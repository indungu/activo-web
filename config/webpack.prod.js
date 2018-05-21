const merge = require('webpack-merge');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const config = require('./webpack.config.js');
const { miniCssExtract } = require('./webpack.plugins');

module.exports = merge(config, {
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new uglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new optimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [miniCssExtract]
});
