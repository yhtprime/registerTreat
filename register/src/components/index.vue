<template>
  <div class="hello">
    <h1>这个是index页面！！！！</h1>
    <router-view/>
    <router-link :to="{name:'huawei',query:{'name':'123'}}">跳转到华为</router-link>
    <div @click="toMi">跳转到小米</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  methods: {
    toMi(){
      this.$router.push({
        name:'xiaomi',
        query:{cname:'xiaomi9',price:123}
      });
    }
  },
  comments:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
