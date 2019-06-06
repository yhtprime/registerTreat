<template>
  <div id="footer">
      <!-- <ul>
        <li><div><img src="/static/img/首页.png"></div><p>首页</p></li>
        <li><div><img src="/static/img/圈子.png"></div><p>圈子</p></li>
        <li><div><img src="/static/img/灯泡.png"></div><p>知识</p></li>
        <li><div><img src="/static/img/医疗.png"></div><p>海外医疗</p></li>
      </ul> -->
      <mt-tabbar v-model="selected">
        <mt-tab-item id="1">
          <img slot="icon" src="/static/img/首页.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="2">
          <img slot="icon" src="/static/img/圈子.png">
          圈子
        </mt-tab-item>
        <mt-tab-item id="3">
          <img slot="icon" src="/static/img/灯泡.png">
          聊天
        </mt-tab-item>
        <mt-tab-item id="4">
          <img slot="icon" src="/static/img/医疗.png">
          海外医疗
        </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected:"4"
    };
  },
  methods: {    
  },
  watch: {
    selected(n,o){
        if(n==1)
          this.$router.push('/index');
        else if(n==2)
          this.$router.push('/quan');
        else if(n==3)
          this.$router.push('/chat');
        else
          this.$router.push('/register');
    }
  },
};
</script>
<style>
#footer{
  height: 1.8rem;    
  width: 100%;  
  position: fixed; 
  bottom: 0;   
}
.mint-tabbar{
  position: fixed !important;
  bottom: 0;
}
/* #footer ul{
  width: 100%;
  height: 100%;
}
#footer li{
  font-size: .6rem;
  width: 25%;
  text-align: center;
  float: left;
  height: 100%;
}
#footer li img{
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: 2px;
} */

</style>



