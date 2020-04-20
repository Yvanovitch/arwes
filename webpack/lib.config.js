const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [
{
  target: 'node',
  name: 'lib',
  entry: {
    'index': './src/index.js'
  },
  output: {
    path: path.resolve('lib'),
    filename: 'index.js',
    library: 'webpackNumbers',
    libraryTarget: 'umd',
  },
  resolve: {
    modules: ['node_modules']
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      use: {
        loader: 'babel-loader',
      },
      test: /.js$/,
      exclude: /(node_modules)/,
    }, {
      test: /\.md$/,
      use: 'raw-loader'
    }]
  },
  devtool: 'inline-source-map',
  watchOptions: {
    poll: true
  },
}];


