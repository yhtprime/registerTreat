<template>
  <div class="app">    
    <div class="pic">
      <img src="/static/img/logo.png">
    </div>
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
      <van-field
        v-model="password1"
        type="password"
        label="RePass"
        placeholder="RePassword"
        right-icon="question-o"
        required
        @click-right-icon="$toast('请重复输入密码')"
      />
    </van-cell-group>
    <van-button @click="reg" type="primary" size="large">注册</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      password1: ""
    };
  },
  methods: {
    reg() {
      if (this.password == this.password1) {
        var params = {
          username: this.username,
          password: this.password
        };
        this.$axios
          .post(
            "/yht/index/index/reg",
            params,
            {
              headers: {
                "Content-Type": ".application/json"
              }
            }
          )
          .then(res => {
            if (res.data == 0)
              this.$toast({
                message: "该ID已经被注册",
                duration: 2000
              });
            else {
              this.$toast({
                message: "注册成功",
                duration: 2000
              });              
              this.$router.push("/");
            }
          });
      }
    }
  }
};
</script>
<style scoped>
.app {
  width: 80%;
  margin: 10%;
  height: auto;
}
.pic{
    width: 100%;
    height: auto;
    margin-top: 2rem;
    margin-bottom: 1rem;
}
button{    
    margin-top: 2rem;
}

</style>

