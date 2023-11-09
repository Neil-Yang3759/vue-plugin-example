<template>
<!--   <div>
    <h1>Demo Page 123</h1>
    <button @click="open">open</button>
  </div> -->

  <router-view/>

  <VueDialogPlugin/>
</template>

<script>
import Vue from 'vue'
import Dialog from '@/components/Plugin/Installer.js'
Vue.use(Dialog)

export default {
  name: 'App'
}
</script>

