const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const devMode = process.env.NODE_ENV == 'development'

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  devtool: devMode ? 'eval-source-map' :'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /(node_modules)/    // 最好设置，性能提升25%左右
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', 
          { loader: 'less-loader', options: { javascriptEnabled: true } },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: {
        process: function (css) {
          return require('cssnano').process(css, { /* options */ })
            .then(function (cssnanoResult) {
              return require("autoprefixer").process(cssnanoResult); // Assuming mqpacker is similar to cssnano interface
            });
        },
        canPrint: false
      }
    })
  ],
  devServer: {
    contentBase: './dist',
    port: 9000,
    proxy: {
      '/api/*': {
        target: 'http://rap2api.taobao.org/app/mock/19489',
        changeOrigin: true,
        secure: false
      }
    }
  }
}