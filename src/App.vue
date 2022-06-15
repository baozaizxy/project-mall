<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
//import {storage} from'./storage'
//import {axios} from 'axios'

export default {
  name: 'App',
  components: {
    
  },
  data(){
  },
  mounted(){
    this.getUser();
    this.getCartCount();
  },
  methods:{
    getUser(){
      this.axios.get('/user').then(()=>{
        // to-do 保存到vuex
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then(()=>{

      })

    }
  }
}
</script>

<style>
@import './assets/scss/reset.scss';
@import './assets/scss/button.scss';
@import './assets/scss/config.scss'

</style>

<script type="text/javascript"> function load(){ 
  var ele = document.getElementsByTagName("div")[0]; 
  var content = ele.innerHTML; 
  console.log(content); } 
  window.onload = load;
  </script>
