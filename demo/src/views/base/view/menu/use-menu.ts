import { useUserStore } from "@/store"
import { onMounted, ref } from "vue"
import { ObjAny } from '@ui/vars';
import router from '@/router';
export const useMenu = () => {
  const user = useUserStore(), alias = {
    id: 'name',
    mc: 'title',
    child: 'children'
  }, item = ref({} as ObjAny), url = ref([] as string[])
    , def = ref('')
  user.setMenu()
  function changePage(it: any) {
    def.value = it.name
    if (it.path) {
      if (it.lx === 'route') {
        router.push({ path: it.path })
        url.value.push(it.path)
      }
      item.value = it
    }
  }
  onMounted(() => {
    def.value = (router.currentRoute.value.name) as string
    if (def.value !== 'baseMenu') {
      item.value.lx = 'route'
    }
  })
  return {
    user,
    alias,
    item,
    changePage,
    def
  }
}