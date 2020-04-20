const path = require('path');

module.exports = [
{
  target: 'node',
  name: 'webApp',
  entry: {
    'play': './play/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js'
  },
  resolve: {
    modules: ['node_modules']
  },
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


