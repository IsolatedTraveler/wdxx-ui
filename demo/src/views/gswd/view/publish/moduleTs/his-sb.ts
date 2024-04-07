import { computed, ref } from "vue";
import { linux } from "../code";
import { fbdq } from "../data";
export function useHisSb() {
  const fileSite = '/home/tomcat8/webapps/app/public/data/config.json',
    formData = ref({
      fbdq: 'kbs',
      title: '通川区朝阳社区卫生服务中心',
      magic: 'http://10.33.77.29:7080/cloudapi/',
      nw: 'http://10.33.77.29:7080/cloudapi/',
      ww: 'http://10.33.77.29:7080/cloudapi/'
    }), code = computed(() => {
      var obj = formData.value
      return [
        {
          lx: 'bash',
          code: linux.fileContentRepalceArr(fileSite, [
            { reg: '"inURL": "http:\\/\\/10.33.77.29:7080\\/cloudapi\\/"', rep: `"inURL": "${obj.nw}"` }
            , { reg: '"outURL": "http:\\/\\/10.33.77.29:7080\\/cloudapi\\/"', rep: `"outURL": "${obj.ww || obj.nw}"` }
            , { reg: '"serverurl": ["http:\\/\\/10.33.77.29:7080\\/cloudapi\\/"]', rep: `"serverurl": ${JSON.stringify([obj.nw, obj.ww].filter(it => it))}` }
            , { reg: '"defaulturl": "http:\\/\\/10.33.77.29:7080\\/cloudapi\\/"', rep: `"defaulturl": "${obj.ww}"` }
            , { reg: '"magicServer": "http:\\/\\/10.33.77.29:7080\\/cloudapi\\/"', rep: `"magicServer": "${obj.magic}"` }
            , obj.title ? { reg: '"title": "通川区朝阳社区卫生服务中心"', rep: `"title": "${obj.title}"` } : false
            , { reg: '"fbdq": "nm"', rep: `"fbdq": "${obj.fbdq}"` }
          ].filter(it => it) as any)
        }
      ]
    })
  return { code, formData, fbdq }
}