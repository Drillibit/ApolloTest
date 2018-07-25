const { join } = require('path');

const cssnano = require('cssnano');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const { browserslist, version } = require('./package.json');

/*---------------------------------------
# Utilities
---------------------------------------*/

function createBabelOptions({ hot = false, optimize = false, react = false } = {}) {
  const presets = [];
  const plugins = [];

  presets.push([
    'env',
    {
      modules: false,
      targets: {
        browsers: browserslist,
        uglify: false
      },
      useBuiltIns: false
    }
  ]);
  presets.push('stage-2');

  if (react) {
    presets.push('react');

    if (hot) {
      plugins.push('react-hot-loader/babel');
    } if (optimize) {
      plugins.push(['transform-react-remove-prop-types', {
        removeImport: true
      }]);
    }
  }

  return { presets, plugins };
}

function wrapEnvironment(environment) {
  return Object.keys(environment).reduce((variables, variable) => {
    const value = environment[variable];

    // eslint-disable-next-line
    variables[`process.env.${variable}`] = JSON.stringify(value);

    return variables;
  }, {});
}

/*---------------------------------------
# Configuration
---------------------------------------*/

module.exports = (releaseStage) => {
  const isDevelopment = process.env.NODE_ENV !== 'production';
  const isServerUsed = process.argv.findIndex(arg => arg.includes('webpack-dev-server')) !== -1;

  /* Mode */
  const mode = isDevelopment ? 'development' : 'production';

  /* Bail */
  const bail = !isServerUsed;

  /* Context */
  const context = __dirname;

  /* Development Server */
  const devServer = {
    host: '0.0.0.0',
    port: 3003,
    contentBase: 'src',
    filename: './application.jsx',
    hot: true,
    inline: true,
    historyApiFallback: true
  };

  /* Development Tools */
  const devtool = isServerUsed ? 'cheap-module-eval-source-map' : 'source-map';

  /* Entry */
  const entry = {
    main: './src/index.jsx'
  };

  /* Rules */
  const rules = [];

  rules.push({
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: [
      {
        loader: 'babel-loader',
        options: createBabelOptions({ hot: isServerUsed })
      }
    ]
  });

  rules.push({
    test: /\.jsx$/,
    exclude: /node_modules/,
    loaders: [
      {
        loader: 'babel-loader',
        options: createBabelOptions({
          hot: isServerUsed,
          optimize: !isDevelopment,
          react: true
        })
      }
    ]
  });

  rules.push({
    test: /\.(eot|svg|ttf|otf|woff|woff2)$/,
    loader: 'file-loader',
    options: {
      name: isDevelopment ? 'fonts/[name].[ext]' : 'fonts/[name]-[hash].[ext]'
    }
  });

  rules.push({
    test: /\.(jpe?g|png|gif|svg)$/,
    include: join(__dirname, 'src/assets/img'),
    loader: 'file-loader',
    options: {
      name: isDevelopment ? 'images/[name].[ext]' : 'images/[name]-[hash].[ext]'
    }
  });

  rules.push({
    test: /\.css$/,
    loaders: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          minimize: false,
          sourceMap: true
        }
      },
      'postcss-loader'
    ]
  });

  rules.push({
    test: /\.scss$/,
    exclude: /node_modules/,
    loaders: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          minimize: false,
          sourceMap: true
        }
      },
      'postcss-loader',
      'sass-loader'
    ]
  });

  /* Output */
  const output = {
    path: join(__dirname, 'www'),
    pathinfo: isDevelopment,
    publicPath: '/',
    filename: isDevelopment ? '[name].js' : '[name]-[chunkhash].js'
  };

  /* Optimization */
  const optimization = {};

  optimization.minimizer = [
    new UglifyJSWebpackPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
      uglifyOptions: {
        safari10: true
      }
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano
    })
  ];

  optimization.splitChunks = {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor',
        chunks: 'initial'
      }
    }
  };

  optimization.runtimeChunk = {
    name: 'manifest'
  };

  /* Plugins */
  const plugins = [];

  plugins.push(
    new webpack.DefinePlugin(wrapEnvironment({
      RELEASE_STAGE: releaseStage,
      APP_VERSION: version
    })),
    new MiniCssExtractPlugin({
      filename: isDevelopment
        ? 'css/[name].css'
        : 'css/[name]-[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'head',
      title: 'React Starter Template',
      template: './src/index.html',
      releaseStage
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    })
  );

  if (isDevelopment) {
    if (isServerUsed) {
      plugins.push(
        new webpack.HotModuleReplacementPlugin()
      );
    }
  }

  /* Resolve */
  const resolve = {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  };

  /* Export */
  return {
    mode,
    bail,
    devServer,
    devtool,
    context,
    entry,
    module: { rules },
    output,
    optimization,
    plugins,
    resolve
  };
};
