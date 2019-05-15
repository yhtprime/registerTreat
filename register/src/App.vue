<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <router-link to="/mobile">跳转到mobile</router-link>
    <router-link to="/auto">跳转到auto</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
