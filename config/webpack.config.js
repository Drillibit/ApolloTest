'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PostCSSFlexBugsFixes = require('postcss-flexbugs-fixes');

const paths = require('./paths');

const publicPath = '/';

module.exports = (mode) => {
  return {
    mode: mode || 'none',
    devtool: mode === 'development' ? 'cheap-module-source-map' : false,
    entry: ['@babel/polyfill', paths.indexSrc],
    output: {
      filename: 'js/bundle.[hash:10].js',
      publicPath
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
            cacheDirectory: true
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
};
