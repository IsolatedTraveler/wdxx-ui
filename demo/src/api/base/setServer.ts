import axios from 'axios'
const errorCode = {
  '000': '操作太频繁，请勿重复请求',
  401: '当前操作没有权限',
  403: '当前操作没有权限',
  424: '当前操作没有权限',
  404: '资源不存在',
  417: '未绑定登录账号，请使用密码登录后绑定',
  423: '演示环境不能操作，如需了解联系冷冷',
  426: '用户名不存在或密码错误',
  428: '验证码错误,请重新输入',
  429: '请求过频繁',
  479: '演示环境，没有权限操作',
  default: '系统未知错误,请反馈给管理员'
}
function dealRes({ status = 200, data = null, config: { checkLogin: judge = false } = {} } = {}) {
  if (status == 200) {
    if (data.code == 1) {
      return data
    }
    return Promise.reject({ code: -1, message: data.message || data.msg })
  } else {
    if (!judge) {
      // 校验是否登录系统，并处理数据
    }
    if (data?.code == 1 && data?.data == 'unauthorized') {
      return Promise.reject({ message: errorCode[401] })
    } else {
      return Promise.reject({ code: -1, message: errorCode[status] || errorCode.default })
    }
  }
}
export function setServer(baseURL: string, headers: any = null) {
  const server = axios.create({ baseURL })
  setServerConfig(server, headers)
  return server
}
export function setServerConfig(server: any, headers: any = null) {
  headers && server.interceptors.request.use((config: any) => {
    config.headers = Object.assign(headers, config.headers)
    return config
  })
  server.interceptors.response.use(
    dealRes,
    ({ response }) => dealRes(response)
  )
}