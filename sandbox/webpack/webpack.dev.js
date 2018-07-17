import webpack from 'webpack'
import dateTime from 'dayjs'
import path from 'path'

import { loadEnvs } from './environment'
import { name } from '../package.json'
import * as loaders from './loaders'
import plugins from './plugins'

const fromRoot = (_path) => path.resolve(__dirname, '../', _path)

module.exports = (() => {
  loadEnvs()

  return {
    // TODO: Determine how to handle sourcemaps for production.
    devtool: __DEV__ ? 'source-map' : false,

    entry: ['./src/index.js'],

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, `../public/${name}`)
    },

    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules']
    },

    externals: {
      // TODO: More externals.
      react: 'React',
      'react-dom': 'ReactDOM',
      ramda: 'ramda'
    },

    devServer: {
      // noInfo: true,
      progress: true,
      contentBase: path.resolve(__dirname, '../public/'),
      publicPath: '/',
      // For sharing localhost.
      disableHostCheck: true,
      compress: true,
      port: 5000,
      hot: true,
      hotOnly: true,
      historyApiFallback: true,
      // TODO: Remove proxy.
      proxy: {
        '/api/*': {
          target: 'https://c-ops-qa4.copart.com',
          secure: false
        }
      }
    },

    module: {
      rules: [
        loaders.stringReplaceLoader,
        loaders.javaScriptLoader,
        loaders.cssLoader,
        loaders.fontLoader,
        loaders.fileLoader,
        loaders.svgLoader,
        loaders.urlLoader,
        loaders.scssLoader
      ]
    },

    plugins: plugins()
  }
})()
