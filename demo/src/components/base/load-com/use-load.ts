import { defineAsyncComponent } from "vue";
import { LoadEmits, LoadProps } from "./load";

export function useLoad(props: LoadProps, _emit: LoadEmits) {
  function loadComponent() {
    var id = props.modelValue, path = `./module/${id}.vue`, path1 = `./module/${id}/index.vue`, com: any = props.com
      , m = com[path] || com[path1] || com['./module/def.vue']
    return defineAsyncComponent(() => m().then((c: any) => c.default));
  }
  return {
    loadComponent
  }
}