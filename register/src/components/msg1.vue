<template>
  <div class="app">
    <mt-button @click="back" icon="back">back</mt-button>
    <div class="bodytext">
      <h3>{{info.name}}</h3>
      <div class="label">
        <p>发布于{{info.ndate}}</p>
        <div class="img">
          <img src="/static/img/eye.png">
          {{info.nwatch}}
        </div>
      </div>
      <div class="pic"><img :src="'/yht/static/img/'+info.npic"></div>
      <div class="text">{{info.nintro}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        info:[],

    };
  },
  methods: {
      back() {
      this.$router.go(-1);
    },
  },
  mounted() {
      let params={nid:this.$route.params.nid};      
      this.$axios.get('http://www.dryht.cn/tpregister/public/index/index/info',{params}).then(res=>{                    
          this.info = res.data;                
      })
  },
};
</script>
<style scoped>
@import '../../static/css/msg.css';
.pic{
    width: 100%;
    height: auto;
}
.pic img{
    width: 100%;
    height: auto;
    margin-top: 1rem;
}
</style>


