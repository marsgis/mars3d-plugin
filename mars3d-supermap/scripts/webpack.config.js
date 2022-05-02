const path = require('path')
const webpack = require('webpack')
//写入
const outputConfig = require('./outputConfig.js')

function resolve(dir) {
  return path.join(__dirname, '../', dir)
}

module.exports = function (env) {
  let minimize, jsfilename
  if (env.min) {
    minimize = true
    jsfilename = outputConfig.jsFileName
  } else {
    minimize = false
    jsfilename = outputConfig.jsSrcFileName
  }

  let plugins = [new webpack.BannerPlugin({ banner: outputConfig.banner })]

  if (minimize) {
    plugins.push(new webpack.NoEmitOnErrorsPlugin())
  }

  return {
    entry: './src/index.js',
    devtool: 'none',
    optimization: {
      minimize: minimize, // true 为开启压缩，为了缩短打包时间，一般在开发环境不开启，
    },
    mode: 'production',
    stats: 'errors-only',
    output: {
      library: outputConfig.library,
      libraryTarget: 'umd',
      umdNamedDefine: true,
      path: path.resolve(__dirname, '../', outputConfig.outputPath),
      filename: jsfilename,
    },
    externals: {
      //依赖的公共包，不一起打包
      cesium: {
        commonjs2: 'mars3d-cesium', //if(typeof exports === 'object' && typeof module === 'object')
        amd: 'mars3d-cesium', //	else if(typeof define === 'function' && define.amd)
        commonjs: 'mars3d-cesium', //else if(typeof exports === 'object')
        root: 'Cesium',
      },
      mars3d: 'mars3d',
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
            ignore: ['checkTree'],
          },
        },
        {
          test: /\.glsl$/,
          loader: 'webpack-glsl-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': resolve('src'),
        entry: './src/index.js',
      },
    },
    plugins,
  }
}
