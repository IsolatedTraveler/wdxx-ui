import { defineStore } from "pinia";
interface User {
  jgid?: string
}
export const useUserStore = defineStore('user', {
  state: () => ({
    user: {} as User
  }),
  getters: {
    getUser: (state) => {
      return state.user
    },
    getIsUser: (state) => {
      return !!state.user.jgid
    }
  },
  actions: {
    setUser(v) {
      this.user = v
    }
  }
})