import { syncGetConfig } from "../server/local"

export function dealData(params) {
  var config = syncGetConfig()
  params.datasource_sjly = '03'
  params.jgid = params.jgid || config.jgid
  params.czryid = params.czryid || config.ryid
  params.czryxm = params.czryxm || config.xm
  params.czryksid = params.czryksid || config.ksid
  params.czryksmc = params.czryksmc || config.ksmc
  params.ssyq = params.ssyq || config.ssyq
  return params
}