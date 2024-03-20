import { computed, ref } from "vue"
import { bashRewriteFile } from "./bashRewriteFile"
import { fbdq } from "../data/"
interface FormData {
  fbd: string
  bbh: string
  configSite: string
  cordConfig: string
}
export function ydgwDb() {
  var formData = ref<FormData>({
    fbd: 'kbs',
    bbh: '1.1.1',
    configSite: 'E:\\jtGit\\vue\\ydgw\\src\\api\\config.js',
    cordConfig: 'E:\\cordova\\ydgw\\config.xml'
  }), code = computed(() => {
    const obj = formData.value, fbdV = obj.fbd, bbhV = obj.bbh,
      npm = [
        'E:',
        'cd E:\\jtGit\\vue\\ydgw',
        bashRewriteFile(obj.configSite, 'import \{[a-z ]+\}', `import { ${fbdV} as obj }`),
        bashRewriteFile(obj.cordConfig, 'version=\\\"[0-9.]+\\\"', `version=\\"${bbhV}\\"`),
        'npm run build'
      ].join('\n'), cord = [
        'E:',
        'cd E:\\cordova\\ydgw',
        'cordova build --release'
      ], copy = [
        'X:',
        `mkdir ${fbdV}`,
        `copy /Y E:\\cordova\\ydgw\\platforms\\android\\app\\build\\outputs\\apk\\release\\ydgw.${bbhV}.apk X:\\${fbdV}\\ydgw.${bbhV}.apk`,
        `copy /Y E:\\cordova\\ydgw\\platforms\\android\\app\\build\\outputs\\apk\\release\\ydgw.${bbhV}.apk X:\\${fbdV}\\ydgw.apk`
      ]
    return [
      {
        lx: 'bash',
        code: [npm, ...cord, ...copy].join(' && ')
      }
    ]
  })

  return {
    code, formData, fbdq
  }
}