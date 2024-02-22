import { useUserStore } from "@/store"
import { ref } from "vue"
import { ObjAny } from '@ui/vars';
import router from '@/router';
export const useMenu = () => {
  const user = useUserStore(), alias = {
    id: 'name',
    mc: 'title',
    child: 'children'
  }, item = ref({} as ObjAny), url = ref([] as string[])
  user.setMenu()
  function changePage(it: any) {
    if (it.path) {
      if (it.lx === 'route') {
        router.push({ path: it.path })
        url.value.push(it.path)
      }
      item.value = it
    }
  }
  return {
    user,
    alias,
    item,
    changePage
  }
}