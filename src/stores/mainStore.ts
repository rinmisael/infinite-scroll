// stores/counter.js
import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', {
  state: () => {
    return { count: 123 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})