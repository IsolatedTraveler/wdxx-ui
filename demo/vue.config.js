const { defineConfig } = require('@vue/cli-service')
const IS_PROD = process.env.NODE_ENV === 'production'
module.exports = defineConfig({
  productionSourceMap: !IS_PROD,
  lintOnSave: 'warning',
  runtimeCompiler: true,
  transpileDependencies: [],
  publicPath: './',
  configureWebpack: require('./config/configureWebpack'),
  devServer: require('./config/devServer/index')
})
