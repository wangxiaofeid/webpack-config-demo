const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const devMode = process.env.NODE_ENV == 'development'

const baseConfig = {
  mode: process.env.NODE_ENV || 'production',
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader?cacheDirectory=true'
        }
      },
      {
        test: /\.less$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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
    new webpack.DllReferencePlugin({    // 效果显著
      context : __dirname,
      manifest: path.resolve(__dirname, './dist/dll', 'manifest.json')
    }),
    new HardSourceWebpackPlugin()    // 效果显著-提升一半左右
  ]
}

if (devMode) {
  module.exports = merge(baseConfig, {
    optimization: {
      minimize: false,   // 效果显著
      splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'module_verdor',
            chunks: 'all'
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    },
    devtool: 'eval-source-map',
    devServer: {
      contentBase: './dist',
      port: 9000,
      hot: true,
      proxy: {
        '/api/*': {
          target: 'http://rap2api.taobao.org/app/mock/19489',
          changeOrigin: true,
          secure: false
        }
      }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ]
  })
} else {
  module.exports = merge(baseConfig, {
    cache: true,   // 作用不大
    devtool: 'source-map',
    optimization: {
      minimize: true,
      minimizer: [
        new UglifyJsPlugin({
          cache: true,   // 作用不大
          parallel: true   // 多线程
        })
     ]
    },
    plugins: [
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
    ]
  })
}