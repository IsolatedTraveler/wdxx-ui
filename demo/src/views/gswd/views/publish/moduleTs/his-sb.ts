import { computed, ref } from "vue";
import { linux } from "../code";
import { fbdq } from "../data";
export function useHisSb() {
  const fileSite = '/home/jt-mis/static-resource/app/public/data/config.json'
    , fileSite1 = '/home/jt-mis/static-resource/appnew/webs/common/printUrl.json'
    , fileSite2 = '/home/jt-mis/static-resource/appnew/webs/common/serviceUrl.json'
    , formData = ref({
      old: 'http://10.33.77.29:7080/cloudapi',
      fbdq: 'kbs',
      title: '通川区朝阳社区卫生服务中心',
      nw: 'http://10.33.77.29:7080/cloudapi'
    }), code = computed(() => {
      var obj = formData.value, old = obj.old, nw = obj.nw
      return [{
        lx: 'bash',
        code: [
          linux.fileContentRepalce(fileSite, old, nw)
          , linux.fileContentRepalce(fileSite1, old, nw)
          , linux.fileContentRepalce(fileSite2, old, nw)
        ].join('\n')
      }]
    })
  return { code, formData, fbdq }
}