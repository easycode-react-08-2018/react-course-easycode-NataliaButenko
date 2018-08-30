const path = require("path");

console.log('qwerty');
console.log(path.resolve(__dirname, './src/main'));

module.exports = {
  entry: path.resolve(__dirname, './src/main'),
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    publicPath: '/'
  }
};