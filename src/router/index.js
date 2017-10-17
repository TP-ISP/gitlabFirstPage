import Vue from 'vue'
import Router from 'vue-router'
import Navigator from '@/components/Navigator'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Navigator',
      component: Navigator
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    }
  ]
})
