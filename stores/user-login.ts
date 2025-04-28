// stores/userLogin.ts
import { defineStore } from 'pinia'

export const useUserLoginStore = defineStore('userLogin', {
  state: () => ({
    userLogin: false,
  }),

  actions: {
    setLoginTrue() {
      this.userLogin = true
    },
    setLoginFalse() {
      this.userLogin = false
    },
    isLoggedIn() {
      return this.userLogin
    },
  },
})
