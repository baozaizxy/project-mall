<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
import storage from'./storage'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
    }
  },
  mounted(){
    let url="/activity/servicetime"
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
