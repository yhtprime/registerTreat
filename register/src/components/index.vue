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
            <div class="card">
                <div class="photo"><img src="/static/img/uphoto.png">
                    <div><p class="username">是你是我</p></div>
                    <div><p>肺腺癌</p></div>
                </div>
                <div class="cardtitle">
                    国产特罗凯30片一盒的价格，印度特罗凯多少钱一盒 
                </div>
                <div class="cardtext">
                    文|印信国际医疗特罗凯又称厄洛替尼。是由上海罗氏制药有限公司生产的一种治疗非小细胞肺癌的第一代EGFR抑制剂，也是一种疗效非常好的靶向药物。在治疗非小细胞肺癌时不会产生明显的副作用，在目前靶向药治疗对肺癌患者是最有效的一种方式。因此特罗凯(厄洛替尼)获得了很多肺癌患者的肯定。
                    <div class="cardbottom">
                    <div class="left">
                        <span>发布于</span>
                    </div>
                    <div class="right">
                        <img src="/static/img/eye.png">
                        <span>11</span>
                    </div>
                    </div>
                </div>
                
            </div>
            <div class="stitle">
                <span>前沿咨询</span>                
            </div>
            <div class="consult">
                <div class="citem">
                    <div class="item_pic"><img src="/static/img/item1.jpg"></div>
                    <div class="item_text">
                        <div class="text"><p> 曙光乍现！新广谱抗癌药临床试验火热招募中！（涵盖全癌种）</p></div>
                        <div class="left">
                        <span>发布于</span>
                        </div>
                        <div class="right">
                            <img src="/static/img/eye.png">
                            <span>11</span>
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
        };
    },
    methods:{
    }
}
</script>
<style scoped>
    .swi{
        width: 100%;
        height: 5rem;
    }
    .index{
        width: 100%;        
    }
    .index .textbody{
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        overflow: hidden;
        position: relative;
    }
   .top4{
       width: 100%;
       height: auto;       
   }
   .top4 div{
        width: 25%;
        height: auto;
        float: left;
   }
   .top4 div img{
       width: 70%;
       margin-left: 15%;
   }
   .top4 div p {
       text-align: center;
       font-size: .6rem;
       color: gray;
   }
   .stitle{
       font-size: .8rem;       
       margin-top: .6rem;
       line-height: .8rem;
   }
   .stitle .small{
       font-size: .6rem;
       line-height: .8rem;
       position: absolute;
       right: 0;
       color: gray;
   }
   .card{
       border: 1px solid #f6f6f6;
       width: 100%;
       height: auto;       
   }
   .card .photo{
       width: 100%;
       height: auto;
   }
   .card .photo img{
       width: 15%;
   }
   .card .photo div{
       height: 30%;
       display: inline-block;
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
   .consult{
       width: 100%;
       height: auto;
       margin-top: .2rem;
   }
   .consult .citem{       
       width: 100%;
       height: auto;
       display: flex;
       flex-flow: row nowrap;
       position: relative;
   }
   .consult .citem .item_pic{
       width: 30%;
       height: auto;       
   }
   .consult .citem .item_pic img{
       width: 100%;
       height: auto;
   }
   .consult .citem .item_text{
       padding-left: .2rem;
       width: 70%;
       height: auto;
       position: relative;
   }
   .consult .citem .item_text .left{
       position: absolute;
       left: .2rem;
       bottom: 0;
   }
   .consult .citem .item_text .right{
       position: absolute;
       right: 1rem;
       bottom: 0;
   }
   .consult .citem .item_text .text{
       font-size: .45rem;
       line-height: .5rem;
       display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
   }
   .consult .citem .item_text .right img{
       width: .4rem;
       height: auto;
   }
     
</style>
