// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import  VueQuillEditor from 'vue-quill-editor'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import animate from 'animate.css';
import {WOW} from 'wowjs';

new WOW({live: false}).init();
Vue.config.productionTip = false
Vue.use(animate);
Vue.use(ElementUI);
Vue.use(axios)
Vue.use(VueQuillEditor)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})



