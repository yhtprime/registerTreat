<template>
  <div id="footer">
      <ul>
        <li><div><img src="/static/img/首页.png"></div><p>首页</p></li>
        <li><div><img src="/static/img/圈子.png"></div><p>圈子</p></li>
        <li><div><img src="/static/img/灯泡.png"></div><p>知识</p></li>
        <li><div><img src="/static/img/医疗.png"></div><p>海外医疗</p></li>
      </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
#footer{
  height: 2.2rem;    
  width: 100%;  
  position: absolute;
  bottom: 10px;
}
#footer ul{
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
}

</style>

