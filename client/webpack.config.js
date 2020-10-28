const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  name: 'issue-tracker',
  mode: 'development',
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    host: 'localhost',
    overlay: true,
    port: 8000,
    stats: 'errors-only',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
    ],
  },
  entry: {
    app: ['./src/hello'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
  plugins: [
    new Dotenv({
      path: './.env',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};
