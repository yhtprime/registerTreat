<template>
    <div class="quan">
        <mt-navbar v-model="selected">
        <mt-tab-item id="1">全部</mt-tab-item>
        <mt-tab-item id="2">非小细胞</mt-tab-item>
        <mt-tab-item id="3">小细胞</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
           <div class="zhiding">
                <ul>
                    <li>
                        <p><mt-badge type="warning" size="normal">置顶</mt-badge>其实，很多癌症病人可以不死的</p>
                    </li>
                    <li>
                        <p><mt-badge type="warning" size="normal">置顶</mt-badge>我该拿什么来拯救您我的肺癌母亲——80后儿子助母抗癌心路历程</p>
                    </li>
                    <li>
                        <p><mt-badge type="warning" size="normal">置顶</mt-badge>ALK突变，在美国求医问诊之旅</p>
                    </li>
                </ul>
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
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
            <div class="zhiding">
                <ul>
                    <li>
                        <p><mt-badge type="warning" size="normal">置顶</mt-badge>其实，很多癌症病人可以不死的</p>
                    </li>
                    <li>
                        <p><mt-badge type="warning" size="normal">置顶</mt-badge>我该拿什么来拯救您我的肺癌母亲——80后儿子助母抗癌心路历程</p>
                    </li>
                    <li>
                        <p><mt-badge type="warning" size="normal">置顶</mt-badge>ALK突变，在美国求医问诊之旅</p>
                    </li>
                </ul>
           </div>          
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
            <div class="zhiding">
                <ul>
                    <li>
                        <p><mt-badge type="warning" size="normal">置顶</mt-badge>其实，很多癌症病人可以不死的</p>
                    </li>
                    <li>
                        <p><mt-badge type="warning" size="normal">置顶</mt-badge>我该拿什么来拯救您我的肺癌母亲——80后儿子助母抗癌心路历程</p>
                    </li>
                    <li>
                        <p><mt-badge type="warning" size="normal">置顶</mt-badge>ALK突变，在美国求医问诊之旅</p>
                    </li>
                </ul>
           </div>
        </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selected:"1",
            artlist:[]
        }
    },
    methods: {
        skipa(aid){            
            this.$router.push({ name:'msg',   //把name改成path也行 /demo1  !
                                params:{aid:aid}});
        },
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
                console.log(res);  
                this.artlist = res.data;
                console.log(this.artlist);
          })   
    },
    
}
</script>
<style scoped>
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #ffb03b;
    color: #ffb03b;
}
.zhiding{
    float: left;
    width: 94%;
    margin: 1rem 3% 0px 3%;
    background: #fff;
    box-shadow: 0px 1px 9px #dbdbdb;
    border-radius: 8px;
    height: auto;
    margin-bottom: .3rem;
}
.zhiding li{
    margin-bottom: .3rem;
    margin-top: .2rem
}
.zhiding p{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;        
    padding-left: .3rem; 
}
  .card{
       border: 1px solid #f6f6f6;
       width: 90%;
       margin-left: 5%;
       height: auto;   
       margin-bottom: .3rem;     
   }
   .card .photo{
       width: 100%;
       height: auto;
       position: relative;
   }
   .card .photo img{
       width: 15%;
       height: 50px;
   }
   .card .photo div{
       width: 70%;
       height: 30%;
       display: inline-block;
   }
   .card .photo .username{
       padding-top: 5px;
       margin-bottom: 5px;
       font-size: .5rem;
        color: #999999;
        line-height: .8rem
   }
   .card .cardtitle{
       color: #4c9696;
       font-size: .5rem;
       line-height: .5rem;
       padding-top: .3rem;
   }
   .card .cardtext{
       color: #666666;
       margin-top: .3rem;
       font-size: .45rem;
       line-height: .7rem;
       display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 6;
        overflow: hidden;
   }
   .cardbottom{
       margin-top: .3rem;
       margin-bottom: .2rem;
   }
   .cardbottom .left{
       float: left;
   }
   .cardbottom .right{
       float: right;
       padding-right: 1rem;
   }
   .cardbottom .right img{
       width: .4rem;
       height: auto;
   }
</style>
<style>

</style>




