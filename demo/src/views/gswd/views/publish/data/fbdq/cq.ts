import { FbdqObj } from "./type"
const url_ip = '10.124.3.162'
export const cq: FbdqObj = {
  mc: '重庆',
  qh: 'cq',
  url_ip,
  server_ip: '100.122.0.118',
  database_ip: '100.122.0.123',
  database_url_ip: '10.33.77.144',
  server_url: [url_ip + ':8080/jtmis', '10.124.3.162:8080/jtmis'],
  id: 'cq'
}
export const cqOld: FbdqObj = {
  mc: '重庆旧版',
  qh: 'cq',
  url_ip: '10.122.34.115',
  server_ip: '100.122.0.118',
  database_ip: '100.122.0.123',
  database_url_ip: '10.33.77.144',
  server_url: ['10.122.34.115:7060/cloudapi', '10.0.8.115:7060/cloudapi'],
  id: 'cqOld'
}