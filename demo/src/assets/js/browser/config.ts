const system: any = window.wdphisJsObject?.wdphis
export function zzjConfig() {
  let config = {
    jgid: "110", jgmc: "成都天府新区华阳社区卫生服务中心", jgjc: "华阳社区卫生服务中心", ryid: "1848",
    ptjgdm: "45081243-6", zzjgdm: "450812436", ptyhid: "", dm: "00038", xm: "自助缴费", ksid: "973",
    ksmc: "财务科", jglb: "B1", yhm: "zizhujiaofei", jgxzqh: "510116003", sfcz: "0", gljgid: "1",
    gljgmc: "天府新区", dlsj: "2020-10-23 11:12:37", bz: 1, ypjgkcglms: "1", tyshxydm: "125101104508124362",
    ssyq: "", tccxm: '13579', hisApi: {}, magicApi: {}, jkkUrl: ''
  }
  if (system) {
    config = JSON.parse(system.varget('0', 'ryxx'))
    config.ssyq = JSON.parse(system.readstring('ssyq')).data
    config.tccxm = JSON.parse(system.readstring('tccxm')).data
    config.jkkUrl = JSON.parse(system.readstring('CMP_JKK_URL')).data
    config.hisApi = {
      servers: JSON.parse(system.getmainurl()).data
    }
    config.magicApi = JSON.parse(system.readstring('magicApi')).data
  }
  return config
}