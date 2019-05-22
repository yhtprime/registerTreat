<template>
    <div class="register">
        <div class="white"></div>
        <mt-navbar v-model="selected">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
        </mt-navbar>
        <div class="white"></div>
        <div class="white"></div>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
            <div><img style="width:100%; height: 4.5rem;" src="/static/img/4h.jpg"></div>
            <div class="content">                            
                <p class="mtop">你也许因为这些问题而困扰？</p>
                <div><img style="width:100%; height: 6rem; margin-top:20px;" src="/static/img/4b.jpg"></div>
            </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">            

            <h1>123</h1>
        </mt-tab-container-item>        
        </mt-tab-container>


    </div>
</template>
<script>
export default {
    data(){
        return {
            selected: "1"
        };
    },    
    methods: {
        
    },
    
}
</script>
<style scoped>
    .register .content{
        width: 80% ;
        margin-left: 10% ;    
    }
    .register .content p{
        text-align: center;
        font-weight: 400;
        font-size: .7rem;
    }
    .register .mtop{
        margin-top: 30px;
    }
</style>

