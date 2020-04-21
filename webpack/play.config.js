const path = require('path');

module.exports = [
{
  target: 'web',
  name: 'play',
  entry: {
    'play': './play/index.js'
  },
  output: {
    path: path.resolve('play'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: [
      path.resolve('play'), 
      path.resolve(),
    ],
    port: 7100,
  },
  module: {
    rules: [{
      use: {
        loader: 'babel-loader',
      },
      test: /.js$/,
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
