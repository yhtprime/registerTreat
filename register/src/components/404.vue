<template>
    <div class="notfound">
         <el-row>
            <div><h1>404😭页面没找到点击</h1>  <el-button @click="tohome" type="danger">返回首页</el-button></div>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return {};
    },
    methods:{
        tohome(){
            this.$router.push({name:'index'});
        }
    }
}
</script>
<style scoped>
    .notfound div{
        text-align: center;
        margin: 75px auto;
    }
    .notfound h1{
        margin-bottom: 50px;
    }
</style>
