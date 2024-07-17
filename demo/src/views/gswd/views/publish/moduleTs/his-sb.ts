import { computed, ref } from "vue";
import { linux } from "../code";
import { fbdq, fbxt, fbxtObj, fbdqObj, FbxtId, InstitutionCode } from "../data";
export function useHisSb() {
  const formData = ref({
    bbly: 'wsq',
    fbdq: 'kbs',
    fbxt: 'app'
  }), code = computed(() => {
    const { bbly, fbdq, fbxt } = formData.value
      , { addr } = fbxtObj[fbxt as FbxtId]
      , { server_url } = fbdqObj[bbly as InstitutionCode]
      , { server_url: fbxx_server } = fbdqObj[fbdq as InstitutionCode]
    return [{
      lx: 'bash',
      code: addr.map(it => {
        return server_url.map((old, i) => {
          var n = fbxx_server[i]
          return linux.fileContentRepalce(it, old, n)
        }).join('\n')
      }).join('\n')
    }]
  })
  return { code, formData, fbdq, fbxt }
}