const path = require('path');
const TerserPlugin = require('terser-webpack-plugin')  //ES6+ 的 JavaScript 解析器 和 mangler/压缩 工具包 

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './lib'),
    publicPath: '/lib/',
    filename: 'vue.common.js',
    
    /* 兼容 script 使用方式 */
    library: 'vue.common.js',      // 指定使用 require(name) 方式时 name = 'vue.commond'
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devServer: {
    contentBase: path.join(__dirname, "doc"),
    compress: true,
    port: 9000
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  }
}