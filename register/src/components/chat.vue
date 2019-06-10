<template>
    <div class="chat">
        <div class="chatbar">
            <img src="/static/img/jqr.png">
            <span>智能聊天预约(吴旭)</span>
        </div>
        <div class="chatbody">
            <ul>
                <li class="robot">
                    <img src="/static/img/jqr.png"><div class="box"><span>hello,我是智能聊天机器人：吴旭。我能帮助你进行简单的处理操作</span></div>
                </li>
                <li  v-for="(item,index) in list" :key="index" :class="index%2==0 ? 'human':'robot'" ><img :src="index%2==0?null:'/static/img/jqr.png'"><div class="box">{{item}}</div><img :src="index%2==0?'/static/img/uphoto.png':null"></li>
                <!-- <li class="robot" v-show="index%2 ==1">
                    <img src="/static/img/jqr.png"><div class="box"><span>{{item}}</span></div>
                </li>     -->
            </ul>
        </div>
        <div class="chatsubmit">
            <input v-model="text" type="text" placeholder="请输入话语"><mt-button @click="submit()" type="primary" size="small">发送</mt-button>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            text:'',
            list:[],            
            item:'',
            key:0
        }
    },
    methods: {
        submit(){                   
          var params = {
            "reqType":0,
            "perception": {
                "inputText": {
                    "text": this.text
                },
                // "inputImage": {
                //     "url": "imageUrl"
                // },
                "selfInfo": {
                    "location": {
                        "city": "大连",
                        "province": "辽宁",
                        "street": "贵州路"
                    }
                }
            },
            "userInfo": {
                "apiKey": "7bda332baf264c9a83668138d58da701",
                "userId": "2"
            }

            
        }   
        this.$axios.post('/api/api/v2',//http://openapi.tuling123.com/openapi/api/v2
        {
            "reqType":0,
            "perception": {
                "inputText": {
                    "text": this.text
                },
            },
            "userInfo": {
                "apiKey": "7bda332baf264c9a83668138d58da701",
                "userId": "97c82a4011bb5136"
            }   
        },  
        {
            headers: {
              'Content-Type':'x-www-form-urlencoded',
               "Access-Control-Allow-Origin":"*" ,
               "Access-Control-Allow-Headers": "X-Requested-With,Content-Type",
               "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS",               
            }
        }).then(res=>{            
              this.list.push(this.text);
              this.list.push(res.data.results[0].values.text);
              this.text="";              
          })
            
        }
    },
    updated:function(){  this.$nextTick(function(){ var div = document.getElementsByClassName('chatbody')[0]; div.scrollTop = div.scrollHeight; }) }
}
</script>
<style scoped>
    .chatbar{
        width: 100%;
        height: 10vh;
    }
    .chatbar img{
        width: 15%;
        height: 6vh;
        margin-top: 2vh;
        border-radius: 500px;
        margin-left: 5%;
    }
    .chatbar span{
        width: 80%;
        font-size: .6rem;
        text-align: center;
        vertical-align: -30%;
        padding-left: 10%;
    }
    .chatbody{
        height: 66vh;
        width: 100%;
        overflow-y: auto;
    }
    .chatbody .human{
        width: 95%;
        margin-right: 5%;
        height: auto;        
        float: right;
    }
    .chatbody .robot{
        width: 95%;
        margin-left: 5%;
        height: auto;        
        float: left;        
    }
    .chatbody .robot img{
        width: 10%;
        border-radius: 1rem;
        height: auto;
    }
    .chatbody .human img{
        width: 10%;
        border-radius: 1rem;        
        height: auto;
    }
    .chatbody li{
        margin-bottom: .45rem;
    }
    .robot .box{
        width: 65%;
        padding-left: 5%;
        height: auto;
        display: inline-block;
        background: #f6f6f6 !important;
        border: 1px solid #f6f6f6;
        border-radius: 1rem;
        word-wrap: break-word;
    }
    .human .box{
        width: 65%;
        margin-left: 10%;
        height: auto;
        display: inline-block;
        background: #f6f6f6 !important;
        border: 1px solid #f6f6f6;
        border-radius: 1rem;
        word-wrap: break-word;
    }
    .chatsubmit{
        width: 100%;
        height: 10vh;
        background: #f6f6f6;
    } 
    .chatsubmit input{
        width: 70%;
        margin-left: 5%;
        margin-right: 5%;
        height: 5vh;
        margin-top: 1vh;
        border-radius:10px; 
        outline: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    .chatsubmit button{
        width: 20%;
        height: 5vh;
        margin-top: 1vh;
    }
</style>
<style>

</style>




