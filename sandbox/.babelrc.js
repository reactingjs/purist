const __DEV__ = (global.__DEV__ = process.env.NODE_ENV === 'development')

const PRESET_STAGE_0 = ['@babel/preset-stage-0', { decoratorsLegacy: true }]

const PLUGIN_RUNTIME = [
  '@babel/plugin-transform-runtime',
  {
    helpers: false,
    polyfill: false,
    regenerator: true
    // moduleName: '@babel/runtime'
  }
]

const PLUGIN_ALIAS = [
  'babel-plugin-module-resolver',
  {
    root: ['./src'],
    alias: {
      '@copart/lot-search-components': '../src',
      '#components': './src/components',
      '#utilities': './src/utilities',
      '#common': './src/common',
      '#scenes': './src/scenes',
      '#views': './src/views'
    }
  }
]

const PLUGIN_CSS_MODULES = [
  'babel-plugin-react-css-modules',
  {
    generateScopedName: '_[name]-[local]',
    handleMissingStyleName: 'warn',
    webpackHotModuleReloading: true,
    context: '.${PWD}/src',
    exclude: 'node_modules'
  }
]

const PRESET_REACT = [
  '@babel/preset-react',
  {
    development: __DEV__
  }
]

module.exports.plugins = [
  'babel-plugin-dev-expression',
  '@babel/plugin-syntax-dynamic-import',
  'babel-plugin-add-react-displayname',
  'babel-plugin-jsx-control-statements',
  '@babel/plugin-proposal-export-default-from',
  PLUGIN_CSS_MODULES,
  PLUGIN_ALIAS
]

module.exports.presets = [
  '@babel/preset-env',
  '@babel/preset-flow',
  PRESET_STAGE_0,
  PRESET_REACT
]

if (__DEV__) {
  module.exports.plugins.push('react-hot-loader/babel')
  module.exports.plugins.push(PLUGIN_RUNTIME)
}
