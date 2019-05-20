import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home';
import header from '@/components/common/header';
import footer from '@/components/common/footer';
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
      children:[]
    },
    {
      path: '/header',
      name: 'header',
      component: header,
      children:[]
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer,
      children:[]
    },
    // {
    //   path:'*',
    //   component: error
    // }
  ]
})

