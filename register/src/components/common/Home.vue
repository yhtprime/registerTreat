<template>
    <div id="home">
        <v-header></v-header>
        <div class="headerreplace"></div>
        <h1>这是首页1</h1>
        <router-view></router-view>
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
    }
}
</script>
<style>
#home{    
    height: 100%;
}
.headerreplace{
    padding-bottom: 1.5rem;
}
</style>

