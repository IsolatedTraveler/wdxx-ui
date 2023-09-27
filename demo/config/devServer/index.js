module.exports = {
  port: 8081,
  https: true,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  proxy: {
    // "/api": {
    //   target: "http://192.168.0.241:8083/api/",
    //   pathRewrite: {'^/api': ''},
    //   changeOrigin: true,
    //   logLevel: "debug"
    // },
    "/api": {
      target: "http://192.168.0.217:8089/api/",
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
      logLevel: "debug"
    },
    "/mis-server": {
      target: "http://his.frp.cdjtwx.com/jtphis/mis-server/",
      pathRewrite: { '^/mis-server': '' },
      changeOrigin: true,
      logLevel: "debug"
    }
  }
}