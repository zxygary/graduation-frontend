import Vue from 'vue'
import router from './router'
import App from './App.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: { Swiper, SwiperSlide }
}
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
