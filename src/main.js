import Vue from 'vue'
import router from './router'
import axios from 'axios'
// import VueAxios from 'vue-axios'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'
// import env from './env'
// mock开关
const mock = true;
if(mock){
  require('./mock/api');
}
// 根据前端的跨域方式做调整 /a/b
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/#/login';
  }else{
    alert(res.msg);
  }
});

// Vue.use(VueAxios.axios);
Vue.prototype.axios = axios;
Vue.config.productionTip = false
// Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
