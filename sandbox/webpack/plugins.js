import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin'
import WriteFilePlugin from 'write-file-webpack-plugin'
import HtmlPlugin from 'html-webpack-plugin'
import DotEnvPlugin from 'dotenv-webpack'
import WebpackBar from 'webpackbar'
import Jarvis from 'webpack-jarvis'
import webpack from 'webpack'
import dateTime from 'dayjs'
import path from 'path'

import { name } from '../package.json'

export default () => {
  let plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        SESSION_SECRET: JSON.stringify(process.env.SESSION_SECRET),
        SESSION_ID: JSON.stringify(process.env.SESSION_ID),
        AUTH_TOKEN: JSON.stringify(process.env.AUTH_TOKEN),
        ME_SERVICE: JSON.stringify(process.env.ME_SERVICE),
        DEBUG_MODE: JSON.stringify(process.env.DEBUG_MODE),
        APPLICATION_NAME: JSON.stringify(process.env.APPLICATION_NAME),
        CONFIG_SERVER_NAME: JSON.stringify(process.env.CONFIG_SERVER_NAME),
        CONFIGSERVER_NAME: JSON.stringify(process.env.CONFIGSERVER_NAME),
        CONFIG_FILE_NAME: JSON.stringify(process.env.CONFIG_FILE_NAME),
        CONFIG_PROFILES: JSON.stringify(process.env.CONFIG_PROFILES),
        PROFILES: JSON.stringify(process.env.PROFILES),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        BABEL_ENV: JSON.stringify(process.env.BABEL_ENV)
      }
    }),

    new HtmlPlugin({
      hash: true,
      publicPath: name + '/',
      template: path.resolve(__dirname, '../src/index.html'),
      alwaysWriteToDisk: false,
      title: process.env.APPLICATION_NAME
    })
  ]

  // if (__DEV__) {
  console.log('\n\n[ Webpack Plugins -> DEV ]\n\n')

  plugins = [
    ...plugins,

    new webpack.HotModuleReplacementPlugin(),

    // Webpack Dashboard @ localhost:1337
    new Jarvis({
      port: 1337
    }),

    new HtmlWebpackHarddiskPlugin(),

    new WebpackBar({
      done(sharedState, ctx) {
        setTimeout(() => {
          console.log(
            `[ webpack complete ∞ ${dateTime().format('dddd at H:mma')} ]`
          )
        }, 250)
      }
    })
  ]
  // }

  return plugins
}
