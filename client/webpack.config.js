const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = function (env = {}) {
  const config = {}

  // ENTRY
  config.entry = [
    'regenerator-runtime/runtime',
    resolve(__dirname, 'src/index.js'),
  ]

  // OUTPUT
  config.output = {
    filename: 'index.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  }

  // DEVELOPMENT SERVER
  config.devServer = {
    historyApiFallback: true,
    proxy: {
      '/parse': {
        target: 'http://localhost:8081'
      }
    }
  }

  // PERFORMANCE
  config.performance = {
    hints: false
  }

  // RULES
  config.module = {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.svg$/,
        use: ['babel-loader', 'svg-react-loader']
      }
    ]
  }

  // PLUGINS
  config.plugins = [
    new CopyWebpackPlugin([
      { from: 'public' }
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      },
      template: 'src/index.html'
    })
  ]

  // ANALYZE MODE
  if (env.analyze) {
    config.plugins.push(new BundleAnalyzerPlugin())
  }

  return config
}
