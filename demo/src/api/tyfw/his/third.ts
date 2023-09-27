import { hisPost, syncGetConfig } from "@/api/server"

export function ChengDuHealthCard(data) {
  data.data.rzfs = '05'
  data.data = JSON.stringify(data.data)
  return hisPost(syncGetConfig('jkkUrl') + 'cdjkkApiCommon', data).then(res => {
    try {
      if (res.respCode === '10000') {
        return JSON.parse(JSON.parse(res.respData).bizContent)
      } else {
        return Promise.reject(res.respDesc)
      }
    } catch (e) {
      return Promise.reject(new Error('数据处理失败'))
    }
  })
}
export function ChengDuYdHealthCard(data) {
  data.data.rzfs = '05'
  data.data = JSON.stringify(data.data)
  return hisPost(syncGetConfig('jkkUrl') + 'cdjkkTermCommon', data).then(res => {
    try {
      if (res.respCode === '10000') {
        return JSON.parse(JSON.parse(res.respData).bizContent)
      } else {
        return Promise.reject(res.respDesc)
      }
    } catch (e) {
      return Promise.reject(new Error('数据处理失败'))
    }
  })
}