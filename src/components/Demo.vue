<template>
  <div>
    <h1>Demo Page</h1>

    <input v-model="title" type="text">
    <input v-model="content" type="text">

    <button @click="open('dialog')">dialog</button>
    <button @click="open('hi')">hi</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'foo',
      content: 'bar'
    }
  },
  methods: {
    open (func) {
      if (func === 'dialog') {
        this.$dialog({
          title: this.title,
          content: this.content
        })
      } else if (func === 'hi') {
        this.$hi()
      }
    }
  }
}
</script>
