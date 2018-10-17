const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/app/index.html",
  filename: "./index.html"
});

module.exports = {
    entry: './src/app/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {extensions: ['.js', '.jsx']},
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          }
        },
      ] 
    },
    plugins: [htmlPlugin]
  };