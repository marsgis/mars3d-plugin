const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

//写入
const outputConfig = require('./outputConfig.js')

function resolve(dir) {
  return path.join(__dirname, '../', dir)
}

module.exports = function(env) {
  let minimize, jsfilename, cssfilename
  if (env.min) {
    minimize = true
    jsfilename = outputConfig.jsFileName
    cssfilename = outputConfig.cssFileName
  } else {
    minimize = false
    jsfilename = outputConfig.jsSrcFileName
    cssfilename = outputConfig.cssSrcFileName
  }

  let plugins = [new MiniCssExtractPlugin({ filename: cssfilename, allChunks: minimize }), new webpack.BannerPlugin({ banner: outputConfig.banner })]

  if (minimize) {
    plugins.push(
      new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
        canPrint: true
      })
    )
    plugins.push(new webpack.NoEmitOnErrorsPlugin())

  }

  return {
    entry: './src/index.js',
    devtool: 'none',
    optimization: {
      minimize: minimize // true 为开启压缩，为了缩短打包时间，一般在开发环境不开启，
    },
    mode: 'production',
    stats: 'errors-only',
    output: {
      library: outputConfig.library,
      libraryTarget: 'umd',
      umdNamedDefine: true,
      path: path.resolve(__dirname, '../', outputConfig.outputPath),
      filename: jsfilename
    },
    externals: {
      //依赖的公共包，不一起打包
      cesium: {
        commonjs2: 'mars3d-cesium', //if(typeof exports === 'object' && typeof module === 'object')
        amd: 'mars3d-cesium', //	else if(typeof define === 'function' && define.amd)
        commonjs: 'mars3d-cesium', //else if(typeof exports === 'object')
        root: 'Cesium'
      },
      mars3d: 'mars3d'
    },
    module: {
      unknownContextCritical: false,
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/transform-runtime'],
            compact: false,
            ignore: ['checkTree']
          }
        },
        {
          test: /\.(css|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: 'img/[name].[ext]'
          }
        },
        {
          test: /\.glsl$/,
          loader: 'webpack-glsl-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.json', '.css'],
      alias: {
        '@': resolve('src'),
        entry: './src/index.js'
      }
    },
    plugins
  }
}
