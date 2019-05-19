<template>
    <div id="app">
        <v-header></v-header>
        <h1>这是首页1</h1>
        <router-view></router-view>
        <v-footer></v-footer>
    </div>    
</template>
<script>
import vFooter from './footer'
import vHeader from './header'
export default {
    data:{

    },
    methods:{

    },
    components:{
        vFooter,
        vHeader
    }
}
</script>
