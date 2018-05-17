const path = require('path');
const { cleanWebpack, definePlugin } = require('./webpack.plugins');

module.exports = {
  entry: path.join(__dirname, '..', 'src', 'index.tsx'),
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      pages: path.resolve(__dirname, 'src/pages/'),
      components: path.resolve(__dirname, 'src/components/')
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  plugins: [htmlWebpack, cleanWebpack, definePlugin]
};
