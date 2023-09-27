
const {maxSize, minSize, minSizeReduction} = require('./var')
module.exports = {
  usedExports: true,
  minimize:true,
  concatenateModules:true,
  splitChunks: {
    chunks: 'all',
    maxAsyncRequests: 25,
    maxInitialRequests: 15,
    minChunks: 1,
    hidePathInfo: true,
    minSize,
    minSizeReduction,
    maxSize,
    cacheGroups: {
      defaultVendors: {
        priority: 1,
        reuseExistingChunk: true,
        name() {
          return ''
        }
      }
    }
  }
}