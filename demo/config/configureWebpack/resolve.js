const path = require('path')
module.exports = {
  alias: {
    '@': path.resolve('src'),
    '@store': path.resolve('src/store'),
    '@api': path.resolve('src/api'),
    '@router': path.resolve('src/router'),
    '@assets': path.resolve('src/assets/js'),
    '@img': path.resolve('src/assets/img'),
    '@com': path.resolve('src/components'),
    '@extend': path.resolve('src/extend'),
    '@view': path.resolve('src/views'),
    '@base': path.resolve('src/views/base'),
    '@dzph': path.resolve('src/views/dzph/view'),
    '@demo': path.resolve('src/views/demo/view'),
    '@yyhsglxt': path.resolve('src/views/yyhsglxt/view')
  },
  fallback: {
    process: require.resolve('process/browser'),
    crypto: require.resolve('crypto-browserify'),
    constants: require.resolve('constants-browserify'),
    stream: require.resolve('stream-browserify'),
    // assert: require.resolve('assert/'),
    buffer: require.resolve('buffer/')
  },
  extensions: ['.ts', '.js']
}