//尽量插件在上，组件在下
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import App from './App.vue'
import VueCookie from 'vue-cookie'
//import env from './env'


//根据前端的跨域方式做调整/a/b:/api/a/b=> /a/b
//axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5dc7afee2b69d9223b633cbb/mimall';
axios.defaults.baseURL='/api';
axios.defaults.timeout=8000;
//根据不同环境变量获取不同的请求地址
//axios.defaults.baseURL = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function(response){
  let res=response.data;
  let path =location.hash;
  if(res.status==0){
    return res.data;
  }else if(res.status==10){
    if(path!=='#/index'){
    window.location.href='/#/login';
    }
  }else{
    alert(res.msg);
    return Promise.reject(res);
  }
})

Vue.use(VueAxios,axios);
Vue.use(VueCookie);
Vue.use({
  loading:'/imgs/loading-svg/loading-bars.svg'
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

