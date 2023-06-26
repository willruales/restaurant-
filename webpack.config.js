const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    skeleton: './src/pages/skeleton.js',
    printMe: './src/pages/printMe.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },
    ],
  },
};