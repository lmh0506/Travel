// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端300毫秒点击事件延迟
import fastClick from 'fastclick'
// 重置css样式
import './assets/styles/reset.css'
// 解决移动端1像素边框问题
import './assets/styles/border.css'

fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
