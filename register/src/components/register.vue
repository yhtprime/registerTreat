<template>
    <div class="register">
        <div class="white"></div>
        <mt-navbar v-model="selected">
        <mt-tab-item id="1">海外医疗</mt-tab-item>
        <mt-tab-item id="2">远程咨询</mt-tab-item>
        </mt-navbar>
        <div class="white"></div>
        <div class="white"></div>        
        <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
            <div><img style="width:100%; height: 4.5rem;" src="/static/img/4h.jpg"></div>
            <div class="content">                            
                <p class="mtop">你也许因为这些问题而困扰？</p>
                <div><img style="width:100%; height: 6rem; margin-top:20px;" src="/static/img/4b.jpg"></div>
                <p class="mtop">国外关于肺癌的治疗差异在哪里？</p>
                <div class="grayb">
                    <img src="/static/img/vs1.jpg" style="width:90%; margin-left:5%;">
                    <div class="text">
                        <p>&nbsp; &nbsp;&nbsp;&nbsp;好消息是国内现在在渐渐引进国外的新药，但在用药经验上稍有欠缺。比如nivolumab即将引入国内市场，而这个药物在美国及欧洲国家已经有了4年的临床用药经验。</p>                        
                        <br>
                    </div>
                </div>
                <p class="mtop">海外就医，其实并没有那么麻烦</p>
                <p class="mtop" style="font-size:.6rem; color: #6c6c6c;">海外就医流程以及步骤解析</p>
                <div class="tutut">
                    <img src="/static/img/tutut.jpg">
                </div>
                <p class="mtop">合作医院</p>
                <div class="hospital">
                    <div class="item">
                        <div class="left"><img src="/static/img/h1.jpg"></div>
                        <div class="right">
                            <a>MD安德森癌症中心</a>
                            <p>癌症专科排名:<span>1</span></p>
                            <p class="line3">MD安德森癌症中心是全美少数几个拥有联邦政府资助的肺癌SPORE研究项目的中心之一。作为享誉世界的癌症研究中心之一，MD安德森在肺癌诊断和治疗的新方法研究领域处于领先地位。每一位肺癌患者都会得益于最先进的研究，研究成果将被尽快转化为临床治疗。</p>
                        </div>
                    </div>
                    <div v-for="(v,index) in list" :key="index" class="item">
                        <div class="left"><img :src="'http://dryht.cn/registerTP/public/static/'+v.hpic"></div>
                        <div class="right">
                            <a>{{v.hname}}</a>
                            <p>癌症专科排名:<span>{{v.rank}}</span></p>
                            <p class="line3">{{v.hintro}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">            
            <div class="y2">
                <img src="/static/img/yczx1.jpg">
            </div>
            <div class="y2text">
                <div class="biao"><img src="/static/img/biao_t1.jpg"></div>
                <div class="yidi"><img src="/static/img/yidi.jpg"></div>
                <mt-button @click="yuyue" type="primary">联系我们</mt-button>
            </div>
        </mt-tab-container-item>        
        </mt-tab-container>    
    </div>
</template>
<script>
export default {
    data(){
        return {
            selected: "1",
            list:[]
        };
    },    
    methods: {
        yuyue(){
            this.$router.push('yuyue');
        }
    },
    mounted() {
        this.$axios.get('http://www.dryht.cn/tpregister/public/index/index/gethos').then(res=>{
                console.log(res.data);     
                for(let i =0 ; i<=res.data.length-1;i++)
                {
                    for(let j=0 ; j<res.data.length-1-i;j++)
                    {
                        if(res.data[j].rank>res.data[j+1].rank)
                        {                            
                            var temp = res.data[j];
                            res.data[j] = res.data[j + 1];
                            res.data[j + 1] = temp;
                        }
                    }
                }                           
                this.list = res.data;
                 
        })
    },
    
}
</script>
<style>
@import '../../static/css/register.css'; 
</style>
<style scoped>

</style>

