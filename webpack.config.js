

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PostCSSFlexBugsFixes = require('postcss-flexbugs-fixes');

const paths = require('./paths');

const publicPath = '/';
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || '0.0.0.0';
const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode: mode || 'development',
  devtool: mode === 'development' ? 'cheap-module-source-map' : false,
  entry: ['@babel/polyfill', paths.indexSrc],
  output: {
    filename: 'js/bundle.[hash:10].js',
    path: paths.distSrc,
    publicPath
  },
  devServer: {
    host: HOST,
    port: PORT,
    contentBase: paths.appSrc,
    open: true,
    watchContentBase: true,
    hot: true,
    historyApiFallback: true,
    noInfo: true,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/graphql': 'http://localhost:3000',
      '/ws': 'ws://localhost:3000'
    }
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: [/\.jpe?g$/, /\.gif$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'assets/[name].[hash:10].[ext]'
        }
      },
      {
        test: [/\.ico$/, /\.svg$/],
        loader: require.resolve('file-loader'),
        options: {
          name: 'assets/[name].[hash:10].[ext]'
        }
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: paths.appSrc,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
          babelrc: true,
          presets: [
            [
              '@babel/preset-env',
              { targets: { browsers: 'last 2 versions' } } // or whatever your project requires
            ],
            '@babel/preset-typescript',
            '@babel/preset-react'
          ],
          plugins: [
            // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            'react-hot-loader/babel'
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                PostCSSFlexBugsFixes,
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 11'
                  ],
                  flexbox: 'no-2009'
                })
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.htmlSrc
    }),
    new webpack.HotModuleReplacementPlugin({})
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  performance: {
    hints: mode === 'development' ? false : 'warning'
  }
};
