import { ServerOptions } from "vite";

export const server: ServerOptions = {
  port: 8080,
  host: '0.0.0.0',
  proxy: {
    '/jtmis/242': {
      target: 'http://192.168.0.242:8080/jtmis/',
      rewrite: path => path.replace(/^\/jtmis\/242/, ''),
      changeOrigin: true,
      bypass: (req, res) => {
        const url = req.url || '';
        res.setHeader('X-Proxy-Target', 'http://192.168.0.242:8080/jtmis/' + url.replace(/^\/jtmis\/242/, ''));
      }
    },
    '/jtmis/cs242': {
      target: 'http://192.168.0.242:8080/jtmis/',
      rewrite: path => path.replace(/^\/jtmis\/cs242/, ''),
      changeOrigin: true,
      bypass: (req, res) => {
        const url = req.url || '';
        res.setHeader('X-Proxy-Target', 'http://192.168.0.242:8080/jtmis/' + url.replace(/^\/jtmis\/cs242/, ''));
      }
    },
    '/jtmis/235': {
      target: 'http://192.168.0.235:8080/jtmis/',
      rewrite: path => path.replace(/^\/jtmis\/235/, ''),
      changeOrigin: true,
      bypass: (req, res) => {
        const url = req.url || '';
        res.setHeader('X-Proxy-Target', 'http://192.168.0.235:8080/jtmis/' + url.replace(/^\/jtmis\/235/, ''));
      }
    },
    '/jtmis/smq': {
      target: 'http://smq.frp.cdjtwx.com:81/jtphis/',
      rewrite: path => path.replace(/^\/jtmis\/smq/, ''),
      changeOrigin: true,
      bypass: (req, res) => {
        const url = req.url || '';
        res.setHeader('X-Proxy-Target', 'http://smq.frp.cdjtwx.com:81/jtphis/' + url.replace(/^\/jtmis\/smq/, ''));
      }
    },
    '/jtmis': {
      target: 'http://loc.frp.cdjtwx.com:81/233-7080/jtphis/',
      rewrite: path => path.replace(/^\/jtmis/, ''),
      changeOrigin: true,
      bypass: (req, res) => {
        const url = req.url || '';
        res.setHeader('X-Proxy-Target', 'http://loc.frp.cdjtwx.com:81/233-7080/jtphis/' + url.replace(/^\/jtmis/, ''));
      }
    },
    '/mis-server': {
      target: 'http://his.frp.cdjtwx.com/jtphis/mis-server/',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/mis-server/, ''),
      bypass: (req, res) => {
        const url = req.url || '';
        res.setHeader('X-Proxy-Target', 'ttp://his.frp.cdjtwx.com/jtphis/mis-server/' + url.replace(/^\/mis-server/, ''));
      }
    }
  }
};