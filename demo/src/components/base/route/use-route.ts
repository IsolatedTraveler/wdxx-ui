import { Ref, SetupContext, ref, watch } from "vue";
import { RouteEmits, RouteProps } from "./route";
import { getXtm } from "@/router";
import { useRoute } from "vue-router";

export default (props: RouteProps, _emit: SetupContext<RouteEmits>['emit']) => {
  const tabsName: Ref<Array<string>> = ref([])
  watch(() => props.tabsName, (v) => {
    if (v && v.length) {
      tabsName.value = v as string[]
    } else {
      import(`@view/${getXtm(useRoute())}/router/index.ts`).then(({ default: res }) => {
        res().then(res => {
          tabsName.value = res.map(it => it.name)
        })
      })
    }
  }, { immediate: true })
  return {
    tabsName
  }
}
