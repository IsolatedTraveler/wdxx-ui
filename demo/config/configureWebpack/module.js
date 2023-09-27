module.exports = {
  rules: [
    {
      test: /\.svg$/,
      exclude: [/node_modules/],
      use: [{
        loader: 'svg-sprite-loader',
        options: { SymbolId: 'icon-[name]' }
      }]
    }
  ]
}