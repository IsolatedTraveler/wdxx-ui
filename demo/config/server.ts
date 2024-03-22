import { ServerOptions } from "vite";

export const server: ServerOptions = {
  port: 8080,
  host: '0.0.0.0',
  proxy: {
    '/api': {
      target: "http://loc.frp.cdjtwx.com:81/233-7080/jtphis/",
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