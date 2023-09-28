import { defineStore } from "pinia";

export const useBaseStore = defineStore('load', {
  state: () => ({
    load: []
  }),
  getters: {
    getLoad: (state) => !!state.load.length,
    getRoot: () => window['wdphisJsObject'] ? '/' : ''
  },
  actions: {
    setLoad(v) {
      this.load.push(v)
    },
    closeLoad(v) {
      this.load = this.load.filter(it => it != v)
    }
  }
})