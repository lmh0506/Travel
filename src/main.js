// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端300毫秒点击事件延迟
import fastClick from 'fastclick'
// 重置css样式
import 'styles/reset.css'
// 解决移动端1像素边框问题
import 'styles/border.css'
// 引入icon
import 'styles/iconfont.css'
// 引入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import store from './store/index'

Vue.use(VueAwesomeSwiper /* { default global options } */)

fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
