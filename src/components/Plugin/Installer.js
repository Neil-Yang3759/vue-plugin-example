import Dialog from '@/components/Plugin/Dialog.vue'
import Hi from '@/components/Plugin/Hi.vue'
import { events } from '@/components/Plugin/Events.js'

class Installer {
  constructor () {
    this.isInstalled = false
  }
  install (Vue, options) {
    if (this.isInstalled) return
    this.isInstalled = true

    Vue.component('VueDialogPlugin', Dialog)
    Vue.component('HiPlugin', Hi)

    Vue.prototype.$dialog = (options) => {
      events.$emit('dialog', options)
    }

    Vue.prototype.$hi = () => {
      events.$emit('hi')
    }
  }
}

export default new Installer()
