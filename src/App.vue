<template>
  <div id="app">
    <router-view/>

    <VueDialogPlugin />
    <HiPlugin />
  </div>
</template>

<script>
import Vue from 'vue'
// eslint-disable-next-line import/no-duplicates
import Dialog from '../publish/dist/vue-plugin-example.js'
// eslint-disable-next-line import/no-duplicates
import Hi from '../publish/dist/vue-plugin-example.js'
Vue.use(Dialog)
Vue.use(Hi)

export default {
  name: 'App'
}
</script>

<style src="@/../publish/dist/vue-plugin-example.css"></style>
