
const { jc } = require('../../package.json');
module.exports = {
  entry: './src/main.ts',
  output: {
    charset: true,
    // compareBeforeEmit: true
    chunkLoadingGlobal: jc
  },
  resolve: require('./resolve'),
  externals: require('./externals'),
  performance: require('./performance'),
  optimization: require('./optimization'),
  plugins: require('./plugins'),
  module: require('./module')
}