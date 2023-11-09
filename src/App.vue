<template>
  <div id="app">
    <router-view/>

    <VueDialogPlugin />
    <HiPlugin />
  </div>
</template>

<script>
import Vue from 'vue'
import Dialog from '@/components/Plugin/Installer.js'
import Hi from '@/components/Plugin/Installer.js'
Vue.use(Dialog)
Vue.use(Hi)

export default {
  name: 'App'
}
</script>
