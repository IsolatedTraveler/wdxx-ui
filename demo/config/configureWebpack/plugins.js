const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const { minChunkSize } = require('./var');
module.exports = [
  new webpack.ProvidePlugin({
    process: 'process/browser',
    Buffer: ['buffer', 'Buffer']
  }),
  new webpack.optimize.MinChunkSizePlugin({
    minChunkSize
  }),
  new NodePolyfillPlugin()
]