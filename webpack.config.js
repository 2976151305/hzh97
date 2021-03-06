const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 打包完成之后生成一个html文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 打包前执行删除原打包文件
/**
 * 简单配置流程
 * 1. mode 打包模式
 * 2. entry 打包文件路径
 * 3. output 生成文件路径
 * 4. module 模块规则
 */
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', // 模式为development时, devtool默认为source-map
  entry: {
    main: './src/main.js'
  },
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8088
  },
  module: {
    rules: [{
      test: /\.(jpg|jpeg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 10240 //图片小于10k时打包到js文件里面
        }
      }
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        }, {
          loader: 'sass-loader'
        }, {
          loader: 'postcss-loader'
        }
      ]
    }, {
      test: /\.(eot|ttf|svg)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'font/'
        }
      }
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html'
  }), new CleanWebpackPlugin()],
  output: {
    // publicPath: 'http://cdn.hzh97.com', // 静态资源放入cdn中
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
