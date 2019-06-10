<template>
    <div class="app">
        <h1>医疗预约</h1>
        <mt-field label="姓名" placeholder="请输入姓名" v-model="username"></mt-field>
<mt-radio
  v-model="value"
  :options="['男', '女']">
</mt-radio>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>    
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field label="微信号" placeholder="请输入微信号" type="wechat" v-model="wechat"></mt-field>        
        <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
        <mt-field label="情况简介" placeholder="情况简介" type="textarea" rows="4" v-model="introduction"></mt-field>
        <h3>上传文件</h3>
        <el-upload
        class="upload-demo"
        name="uploadData"
        action="http://www.dryht.cn/tpregister/public/index/index/handlepic"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :on-success="success"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
        </el-upload>
        <mt-button @click="submit" type="primary">提交</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:'',
            email:'',            
            phone:'',                        
            wechat:'',
            birthday:'',
            introduction:'',
            value:'',
            pic:'',
            options : [
            {
                label: '被禁用',
                value: '1',
            },
            {
                label: '选项A',
                value: '2'
            },            
            ],
            fileList: []
        }
    },
    methods: {
     handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      success(response, file, fileList) {
        if(response)
        {
            this.$toast({
           message: '上传成功',            
            duration: 2000
             })
             this.pic = response;            
        }
        else
        {
           this.$toast({
           message: '病例上传失败',            
            duration: 2000
             }) 
        }
      },
      submit(){
          var params = {
            username:this.username,
            email:this.email,            
            phone:this.phone,                
            wechat:this.wechat,
            birthday:this.birthday,
            introduction:this.introduction,
            pic:this.pic
          }
        this.$axios.post('/yht/index/index/handle',params,  
        {
            headers: {
              'Content-Type':'.application/json',
               "Access-Control-Allow-Origin":"*" ,
               "Access-Control-Allow-Headers": "X-Requested-With,Content-Type",
               "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS",               
            }
        }).then(res=>{                            
                this.newlist = res.data;                
          }) 
      var that = this;  
      setTimeout(function(){ 
          that.$toast({
           message: '上传成功3秒后关闭',            
            duration: 3000
      })},3000)

       this.$router.go(-1);
      }    
    },
}
</script>
<style scoped>
.app{
    width: 90%;
    margin-left: 5%;
    margin-top: 2rem;
}
.app button{
    width: 100%;
}

</style>
<style>
input,textarea{
    border: 1px solid #000 !important;
}
</style>
