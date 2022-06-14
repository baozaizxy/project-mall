//尽量插件在上，组件在下
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
//import env from './env'

//import Express from 'express'
let express = require('express')
let app = express()
let cors = require('cors')
let bodyParser = require('body-parser')
let Router = require('./router')

app.use(bodyParser.json());  //配置解析，用于解析json和urlencoded格式的数据
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())              //配置跨域
app.use(Router)              //配置路由

app.listen(80, () => {
    // eslint-disable-next-line no-console
    console.log('服务器启动成功');
})



//根据前端的跨域方式做调整/a/b:/api/a/b=> /a/b
//axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5dc7afee2b69d9223b633cbb/mimall';
axios.defaults.baseURL='/api';
axios.defaults.timeout=8000;
//根据不同环境变量获取不同的请求地址
//axios.defaults.baseURL = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function(response){
  let res=response.data;
  if(res.status==0){
    return res.data;
  }else if(res.status==10){
    window.location.href='/#/login';

  }else{
    alert(res.msg);
  }
})

Vue.use(VueAxios,axios);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

