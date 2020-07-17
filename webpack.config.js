const express = require('express');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rules = [
  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: '/node_modules/',
  },
];

module.exports = {
  target: 'web',
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: { rules },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    port: 9000,
    before: function (app, server) {
      app.use('/api', express.static(path.join(__dirname, 'data')));
    },
  },
};
