<template>
    <div class="index">
        <div class="swi">
            <mt-swipe :auto="4000">
                <mt-swipe-item><img src="/static/img/byq.jpg"></mt-swipe-item>
                <mt-swipe-item><img src="/static/img/zjs.jpg"></mt-swipe-item>
                <mt-swipe-item><img src="/static/img/wxq.jpg"></mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="textbody">
            <div class="top4">
                <div><img src="/static/img/byq.jpg"><p>病友圈</p></div>
                <div><img src="/static/img/zjs.jpg"><p>专家说</p></div>
                <div><img src="/static/img/wxq.jpg"><p>微信群</p></div>
                <div><img src="/static/img/hwyl.jpg"><p>海外医疗</p></div>
            </div>                        
        </div>
        <div class="textbody">
            <div class="stitle">
                <span>病友圈子</span>
                <span class="small">非小细胞|小细胞</span>
            </div>
            <div v-for="(item) in artlist" :key="item.aid" @click="skipa(item.aid)" class="card">
                <div class="photo"><img src="/static/img/uphoto.png">
                    <div><p class="username">{{item.uname}}</p>                    
                    <p>{{item.sname}}</p></div>
                </div>
                <div class="cardtitle">
                    {{item.aname}} 
                </div>
                <div class="cardtext">
                    {{item.aintro}} 
                    <div class="cardbottom">
                    <div class="left">
                        <span>发布于{{item.atime}}</span>
                    </div>
                    <div class="right">
                        <img src="/static/img/eye.png">
                        <span>{{item.awatch}}</span>
                    </div>
                    </div>
                </div>
            </div>
            <div class="stitle">
                <span>前沿咨询</span>                
            </div>
            <div v-for="(item,index) in newlist" :key="index" @click="skipn(item.nid)" class="consult">
                <div class="citem">
                    <div class="item_pic"><img src="/static/img/item1.jpg"></div>
                    <div class="item_text">
                        <div class="text"><p>{{item.name}}</p></div>
                        <div class="left">
                        <span>发布于{{item.ndate}}</span>
                        </div>
                        <div class="right">
                            <img src="/static/img/eye.png">
                            <span>{{item.nwatch}}</span>
                        </div>                      
                    </div>                
                </div>
            </div>
        </div>
         
    </div>
</template>
<script>
export default {
    data(){
        return { 
            artlist:[],
            newlist:[]           
        };
    },
    methods:{
        skipa(aid){            
            this.$router.push({ name:'msg',   //把name改成path也行 /demo1  !
                                params:{aid:aid}});
        },
        skipb(aid){
            // this.$router.push({ name:'msg',   //把name改成path也行 /demo1  !
            //                     params:{nid:aid}});
        }
    },
    mounted() {
        this.$axios.get('http://www.dryht.cn/tpregister/public/',
        {},  
        {
            headers: {
              'Content-Type':'x-www-form-urlencoded',
               "Access-Control-Allow-Origin":"*" ,
               "Access-Control-Allow-Headers": "X-Requested-With,Content-Type",
               "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS",               
            }
        }).then(res=>{                            
                this.artlist = res.data;            
          })            
        this.$axios.get('http://www.dryht.cn/tpregister/public/index/index/index1',
        {},  
        {
            headers: {
              'Content-Type':'x-www-form-urlencoded',
               "Access-Control-Allow-Origin":"*" ,
               "Access-Control-Allow-Headers": "X-Requested-With,Content-Type",
               "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS",               
            }
        }).then(res=>{                            
                this.newlist = res.data;                
          })            
    },
}
</script>
<style scoped>
@import '../../static/css/index.css'; 
</style>
