<template>
  <div id="app">
    <mt-button @click="back" icon="back">back</mt-button>
    <div class="bodytext">
      <h3>{{info1.aname}}</h3>
      <div class="label">
        <p>发布于{{info1.atime}}</p>
        <div class="img">
          <img src="/static/img/eye.png">{{info1.awatch}}
        </div>
      </div>
      <div
        class="text"
      >{{info1.aintro}}</div>
      <div class="submit">
        <textarea v-model="introduction" rows="auto" placeholder="请输入评论"></textarea>
        <mt-button @click="submit" type="primary">提交</mt-button>
      </div>
      <div v-for="(item,index) in info" :key="index" class="commit">
        <div class="card">
          <div class="photo">
            <img src="/static/img/uphoto.png">
            <div>
              <p class="username">{{item.uname}}</p>
            </div>
          </div>
          <div class="cardtext">{{item.contant}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      introduction: "",  
      info:[],
      info1:''
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    get() {
      let params={aid:this.$route.params.aid};      
      this.$axios.get('http://www.dryht.cn/tpregister/public/index/index/singleart',{params}).then(res=>{          
          this.info = res.data;          
          this.info1 = this.info[0];
          this.$axios.get('http://www.dryht.cn/tpregister/public/index/index/comments',{params}).then(res=>{          
          this.info = res.data;             
      })
      })      
    },
    submit() {
      let params={intro:this.introduction,aid:this.$route.params.aid,uid:sessionStorage.getItem('uid')};      
      this.$axios.get('http://www.dryht.cn/tpregister/public/index/index/comsub',{params}).then(res=>{          
          if(1==res.data){
              this.$toast({
              message: '上传成功',            
              duration: 2000
            })            
          }
          else{
            this.$toast({
              message: '上传失败',            
              duration: 2000
            })
          }
          
      })      
    },
  },
   mounted() {
      this.get();
   }
};
</script>
<style scoped>
@import '../../static/css/msg.css';
</style>

<style>
</style>