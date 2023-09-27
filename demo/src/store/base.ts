import { defineStore } from "pinia";

export const useBaseStore = defineStore('load', {
  state: () => ({
    load: [],
    back: null,
    from: []
  }),
  getters: {
    getLoad: (state) => state.load.length,
    getBack: (state) => state.back,
    getFrom: (state) => {
      let item = state.from[0] || {}
      delete item.to
      return item
    }
  },
  actions: {
    setLoad(v) {
      v ? this.load.push(v) : this.load.pop()
    },
    setBack(v) {
      this.back = v
    },
    setFrom(val: any) {
      let from = this.from, judge = true
      if (val.name) {
        if (val.to === 'home') {
          from = []
        } else {
          from = from.filter(item => {
            if (item.name === val.to) {
              judge = false
            }
            return item.name !== val.to
          })
          judge && from.unshift(val)
        }
      }
      this.from = from
    }
  }
})