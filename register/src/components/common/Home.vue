<template>
    <div id="home">
        <v-header></v-header>
        <div class="headerreplace"></div>        
        <router-view/>
        <v-footer></v-footer>
    </div>    
</template>
<script>
import vFooter from './footer'
import vHeader from './header'
export default {
    data(){
        return {};
    },
    methods:{

    },
    components:{
        vFooter,
        vHeader
    },
    mounted() {
       this.$router.push({path:'/register'});
    },
}
</script>
<style>
#home{    
    height: 100%;
    margin-bottom: 1.8rem;
}
.headerreplace{
    padding-bottom: 1.7rem;
}
</style>

