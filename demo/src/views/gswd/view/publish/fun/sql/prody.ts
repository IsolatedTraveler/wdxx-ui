import { magicPost } from "@/api"

export function getPrody(tj: string) {
  return magicPost('magic/jcgl/other/exportPrody', { tj }).then(res => {
    return res.data
  })
}