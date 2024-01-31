import { defineStore } from "pinia";

export const useLoadStore = defineStore('load', {
  state: () => ({
    load: [] as string[]
  }),
  getters: {
    getLoad: (state) => !!state.load.length,
    getRoot: () => window.wdphisJsObject ? '/' : ''
  },
  actions: {
    setLoad(v: string) {
      this.load.push(v)
    },
    closeLoad(v: string) {
      this.load = this.load.filter(it => it != v)
    }
  }
})