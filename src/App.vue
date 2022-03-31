<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
import {storage} from'./storage'
import {axios} from 'axios'

export default {
  name: 'App',
  components: {
    
  },
  data(){
  },
  mounted(){
  }
}
</script>

<style>
@import'./assets/scss/reset.scss'
</style>
