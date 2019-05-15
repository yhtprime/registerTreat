import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import mi from '@/components/mi'
import huawei from '@/components/huawei'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path: '/huawei/:came',
          name :'huawei',
          component: huawei
        },
        {
          path: '/xiaomi',
          name :'xiaomi',
          component: mi
        }
      ]
    },
    // {
    //   path: '/header',
    //   name: 'header',
    //   component: header,
    //   children:[]
    // },
    // {
    //   path: '/footer',
    //   name: 'footer',
    //   component: footer,
    //   children:[]
    // }
  ]
})

