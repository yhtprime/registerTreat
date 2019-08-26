import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = { //要设置的全局访问的state对象
    showFooter: 1,
    changableNum: 0,
    //要设置的初始属性值
  };
  var store = new Vue.Store({
    state:{
        url:"http://192.168.43.215:8080/mall",
    }
  })
  export default store;