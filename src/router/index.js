import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // kcy选择页面
    {
      path: '/kcyChoose',
      component: () => {
        return import('@/views/kcy/choose.vue')
      }
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/homePage',
      component: () => {
        return import('@/views/homePage/homePage')
      },
    },
  ]
})
