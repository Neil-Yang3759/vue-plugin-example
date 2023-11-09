<template>
  <div v-if="active">
    <img src="https://media.tenor.com/77MyaRgkYowAAAAC/%E4%B8%A6%E6%B2%92%E6%9C%89-%E5%9F%BA%E5%BE%B7.gif" alt="">
    <button @click="close">close</button>
  </div>
</template>

<script>
import { events } from '@/components/Plugin/Events.js'
export default {
  data () {
    return {
      active: false
    }
  },
  async created () {
    events.$on('hi', this.open)
  },
  methods: {
    open (options) {
      this.active = true
    },
    close () {
      this.active = false
    }
  }
}
</script>
