import babelrc from '../.babelrc.js'

export const stringReplaceLoader = {
  test: /\.js$/,
  loader: 'string-replace-loader',
  exclude: /node_modules/,
  options: {
    multiple: [
      // TODO: Find out what to do with this.
      { search: '<OPS_SERVER>', replace: 'https://where-is-ops-server' }
    ]
  }
}

export const javaScriptLoader = {
  test: /\.(js|jsx)$/,
  exclude: /(node_modules)/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        ...babelrc
      }
    }
  ]
}

export const scssLoader = {
  test: /\.(scss)$/,
  use: [
    {
      loader: 'style-loader',
      options: {}
    },
    {
      loader: 'css-loader'
    },
    {
      loader: 'sass-loader',
      options: {
        includePaths: ['../node_modules']
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: false
      }
    }
  ]
}

export const cssLoader = {
  test: /\.(pcss|css)$/,
  exclude: /\.(scss)$/,
  use: [
    {
      loader: 'style-loader',
      options: {}
    },
    {
      loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 1,
        localIdentName: '_[name]-[local]'
      }
    },
    {
      loader: 'sass-loader',
      options: {
        includePaths: ['../node_modules']
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true
      }
    }
  ]
}

export const fontLoader = {
  test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  exclude: /node_modules/,
  loader: 'url-loader?limit=10000&mimetype=application/font-woff'
}

export const fileLoader = {
  exclude: /node_modules/,
  test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  loader: 'file-loader'
}

export const svgLoader = {
  test: /\.svg$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader'
    },
    {
      loader: 'react-svg-loader',
      options: {
        jsx: true
      }
    }
  ]
}

export const urlLoader = {
  test: /\.png/,
  loader: 'url-loader'
}
