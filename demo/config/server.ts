import { ServerOptions } from "vite";

export const server: ServerOptions = {
  port: 8080,
  proxy: {
    '/api': {
      target: "http://10.33.77.31:7080/cloudapi/",
      rewrite: (path) => path.replace(/^\/api/, ''),
      changeOrigin: true
    },
    '/mis-server': {
      target: 'http://his.frp.cdjtwx.com/jtphis/mis-server/',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/mis-server/, '')
    }
  }
}