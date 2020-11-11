/*
 * @Author: gaominghao
 * @Date: 2020-11-06 15:26:44
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-11-09 15:38:39
 * @Description: none
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './directives' // 指令
import './filters' // 过滤器
import globalfunction from './utils/global'
import 'lib-flexible/flexible'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import { Button } from 'vant'

Vue.use(Button); // vant组件

Vue.use(globalfunction); // 全局函数

Vue.use(VueLazyload) // 图片懒加载

process.env.Mock && require('./mock/index') // dev环境打开Mock

FastClick.attach(document.body);  // 移动端点击延迟

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
