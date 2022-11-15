const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
  mode: "development",

  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js"
  },

  module: {
    rules: [
      {
        test: /\.[c|le]ss$/,
        use: ['style-loader', 'css-loader', "less-loader","testcb-loader", "testcbAsync-loader" ,"test-loader" ]
      },
      // {
      //   test: /\.js/,
      //   use: ["reslove-js"]
      // }
    ]
  },

  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')],
  },

  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],

  devtool: "source-map",

  devServer: {
    open: false, //启动后自动打开页面
  },
};