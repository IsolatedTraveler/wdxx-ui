import { defineStore } from "pinia";
import { temp } from "./temp";
import menu from './menu'
interface User {
  jgid?: string
}
interface UserMenu { }
export const useUserStore = defineStore('user', {
  state: () => ({
    user: (temp('user') || {}) as User,
    menu: (temp('user-menu') || []) as UserMenu[]
  }),
  getters: {
    getUser: (state) => {
      return state.user
    },
    getIsUser: (state) => {
      return !!state.user.jgid
    },
    getMenu: (state) => {
      return state.menu
    }
  },
  actions: {
    setUser(v: User) {
      temp('user', v)
      this.user = v
    },
    async setMenu() {
      setTimeout(() => {
        temp('user-menu', menu)
        this.menu = menu
      }, 3000)
    }
  }
})