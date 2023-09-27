const IS_PROD = process.env.NODE_ENV === 'production'
const {maxSize} = require('./var')
module.exports = {
  assetFilter: function (assetFilename) {
    return assetFilename.endsWith('.js');
  },
  hints: IS_PROD ? 'warning' : false,
  maxEntrypointSize: maxSize,
  maxAssetSize: maxSize
}