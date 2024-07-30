import { magicPost } from "@/api"

export function getPrody(tj: string, fwq: string = '') {
  return magicPost(fwq + '/magic/jcgl/other/exportPrody', { tj }).then(res => {
    return res.data
  })
}