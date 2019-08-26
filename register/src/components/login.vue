<template>
  <div class="app">    
      <div class="pic"><img src="/static/img/logo.png"></div>
      <van-cell-group>
        <van-field
            v-model="username"
            required
            clearable
            label="Username"
            right-icon="question-o"
            placeholder="Username"
            @click-right-icon="$toast('请登录')"
        />
        <van-field
            v-model="password"
            type="password"
            label="Password"
            placeholder="Password"
            right-icon="question-o"
            required
            @click-right-icon="$toast('请输入密码')"
        />
    </van-cell-group>    
    <div class="btn"><button @click="login">-></button></div>
    <p @click="reg">没有账号？点击注册</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
        username:'',
        password:''

    };
  },
  methods: {
    login(){      
      var params = {
          username:this.username,
          password:this.password
      }
      this.$axios.post('/yht/index/index/login',params,{
          headers: {
              'Content-Type':'.application/json',
          }
      }).then(res=>{                    
          if(res.data==0)
            this.$toast({
              message: '登录失败',            
              duration: 2000
            }) 
          else
          {
              this.$toast({
              message: '登录成功',            
              duration: 2000
            }) 
            sessionStorage.setItem('uid',res.data.uid);
             this.$router.push('/index');
          }
           
      })
  },
  reg(){
      this.$router.push('/reg');
  }
  }
}
</script>
<style scoped>
.app{
    width: 80%;
    height: auto;
    margin-left: 10%;
    margin-right: 10%;
}
.pic{
    width: 100%;
    height: auto;
    margin-top: 2rem;
    margin-bottom: 1rem;
}
.btn{
    width: 100%;
    margin: 0 auto;
    height: auto;
    text-align: center;
    margin-top: 1rem;
}
button{
    border-radius: 50%;border: none;
    height: 50px;
    color: white;
    font-size: .5rem;  
    width: 50px;        
    background: linear-gradient(#c559f7,#791c4a);
}
p{
    padding-top: 1rem;
    width: 100%;
    display: inline-block;
    text-align: center;
    font-size: .4rem;
}
</style>


