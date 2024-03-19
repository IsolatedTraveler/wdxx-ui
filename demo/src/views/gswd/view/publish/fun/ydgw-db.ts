import { computed, ref } from "vue"
import { bashRewriteFile } from "./bashRewriteFile"

export function ydgwDb() {
  var fbd = ref('kbs'), bbh = ref('1.1.1'), configSite = ref('E:\\jtGit\\vue\\ydgw\\src\\api\\config.js')
    , cordConfig = ref('E:\\cordova\\ydgw\\config.xml')
    , code = computed(() => {
      const fbdV = fbd.value, bbhV = bbh.value,
        npm = [
          'E:',
          'cd E:\\jtGit\\vue\\ydgw',
          bashRewriteFile(configSite.value, 'import \{[a-z ]+\}', `import { ${fbdV} as obj }`),
          bashRewriteFile(cordConfig.value, 'version=\\\"[0-9.]+\\\"', `version=\\"${bbhV}\\"`),
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
    code
  }
}