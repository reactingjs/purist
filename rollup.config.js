import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import fileSize from 'rollup-plugin-filesize'
import progress from 'rollup-plugin-progress'

export default {
  // perf: true,
  input: './src/index.js',

  output: {
    file: './dist/index.js',
    format: 'cjs',
    sourcemap: true,
    globals: {
      react: 'React',
    },
  },

  external: ['react'],

  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        ['@babel/preset-stage-0', { decoratorsLegacy: true, pipelineOperator: 'minimal' }],
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-flow',
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-export-default-from',
        'babel-plugin-jsx-control-statements',
        'babel-plugin-dev-expression',
        [
          '@babel/plugin-transform-runtime',
          { helpers: false, polyfill: false, regenerator: true, moduleName: 'babel-runtime' },
        ],
      ],
    }),
    resolve({
      preferBuiltins: true,
      browser: true,
    }),
    commonjs({
      namedExports: {
        react: ['Component'],
      },
    }),
    fileSize(),
  ],
}
