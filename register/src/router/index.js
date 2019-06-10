import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home';
import header from '@/components/common/header';
import footer from '@/components/common/footer';
import error from '@/components/404.vue';
import register from '@/components/register.vue';
import index from '@/components/index.vue';
import chat from '@/components/chat.vue';
import quan from '@/components/quan.vue';
import msg from '@/components/msg.vue';
import msg1 from '@/components/msg1.vue';
import yuyue from '@/components/yuyue.vue';
import login from '@/components/login.vue';
import reg from '@/components/reg.vue';
Vue.use(Router)
export default new Router({

  routes: [    
    {
      path: '/index',
      name: 'index',
      component: Home,
      children:[
        {
          path: '/index',
          name: 'index',
          component: index,
          children:[]
        },
        {
          path: '/register',
          name: 'register',
          component: register,
          children:[]
        },
        {
          path: '/chat',
          name: 'chat',
          component: chat,
          children:[]
        },
        {
          path: '/quan',
          name: 'quan',
          component: quan,
          children:[]
        },       
      ]
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
    {
      path:'*',
      component: error
    },
    {
      path:'/msg',
      name:'msg',
      component: msg,
      children:[]
    },
    {
      path:'/msg1',
      name:'msg1',
      component: msg1,
      children:[]
    },
    {
      path:'/yuyue',
      name:'yuyue',
      component: yuyue,
      children:[]
    },
    {
      path:'/',
      name:'login',
      component: login,
      children:[]
    },
    {
      path:'/reg',
      name:'reg',
      component: reg,
      children:[]
    },
  ]
})

