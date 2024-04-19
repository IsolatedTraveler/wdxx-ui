import { ServerOptions } from "vite";

export const server: ServerOptions = {
  port: 8080,
  host: '0.0.0.0',
  proxy: {
    '/jtmis/242': {
      target: "http://192.168.0.242:8080/jtmis/",
      rewrite: (path) => path.replace(/^\/jtmis\/242/, ''),
      changeOrigin: true
    },
    '/jtmis': {
      target: "http://loc.frp.cdjtwx.com:81/233-7080/jtphis/",
      rewrite: (path) => path.replace(/^\/jtmis/, ''),
      changeOrigin: true
    },
    '/mis-server': {
      target: 'http://his.frp.cdjtwx.com/jtphis/mis-server/',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/mis-server/, '')
    }
  }
}