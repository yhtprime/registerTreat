<template>
    <div class="notfound">
         <el-row>
            <div><h1>404😭页面没找到点击</h1>  <el-button @click="tohome" type="danger">返回首页</el-button></div>
        </el-row>
        <h2 @click="getnews">获取数据</h2>
        <h3>{{msg}}</h3>
        <ul>
            <li v-for="(v,i) in msg" :key="i">
                <img :src="v.thumb">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:[]
        };
    },
    methods:{
        tohome(){
            this.$router.push({name:'index'});
        },
        getnews(){
            var url = '/yht'; // 这里就是刚才的config/index.js中的/api            
  		    	 //下面是全局axios的调用方式，如果是本地导入axios，直接用导入的名称即可
                   this.$axios.get(url).then(response=>{ 
                    	  console.log(response)
                        this.msg=response.data;                       
                    })
                    .catch(error=>{
                        console.log(error);
                    })
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
