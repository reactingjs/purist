module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      ['@babel/preset-stage-0', { decoratorsLegacy: true }],
      [
        '@babel/preset-env',
        {
          modules: false,
        },
      ],
      '@babel/preset-react',
      '@babel/preset-flow',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-export-default-from',
      'react-hot-loader/babel',
      'babel-plugin-jsx-control-statements',
      'babel-plugin-dev-expression',
      [
        'babel-plugin-module-resolver',
        {
          root: ['./src'],
          alias: {
            '#components': './src/components',
            '#utilities': './src/utilities',
            '#styles': './src/styles',
            '#tools': './src/tools',
          },
        },
      ],
      [
        '@babel/plugin-transform-runtime',
        {
          helpers: false,
          polyfill: false,
          regenerator: true,
          moduleName: 'babel-runtime',
        },
      ],
      [
        'babel-plugin-react-css-modules',
        {
          generateScopedName(name, file, css) {
            const path = file
              .split('/src/')[1]
              .split('/')
              .join('_')
              .replace('.css', '--')
            return path + name
          },
          handleMissingStyleName: 'warn',
          webpackHotModuleReloading: false,
          context: '.${PWD}/src',
          exclude: 'node_modules',
        },
      ],
    ],
  }
}
