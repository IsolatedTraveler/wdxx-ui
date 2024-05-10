import { ref } from "vue"
import { getSqlCode } from "../fun/sql"

export function ydgwJq() {
  const code = ref('')
  getSqlCode('app_config_cssm', '1=1', ['id']).then(({ i, d }) => {
    code.value = [d, i].join('\n')
  })
  return {
    code
  }
}