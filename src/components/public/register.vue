<template>
    <div class="login-wrapper">
        <div class="login-user">
        <h5 style="padding: 0; font-size: 24px;">注册</h5>
        <span class='span-login'>已有账号，<span @click="linkToLogin"  style="cursor: pointer;color: #398FD3;">点此处登录</span></span>
        <el-input v-model="acountNum" placeholder="手机/邮箱" style="margin: 8px 0;"></el-input>
        <el-input placeholder="个人空间地址" v-model="personUrl"  style="margin: 8px 0;"></el-input>
        <el-input placeholder="密码不能少于六位" v-model="password" show-password style="margin: 8px 0;"></el-input>
        <div class="clearfix" style='margin: 4px 0 4px 0;'>
            <el-checkbox v-model="mermory" @change="mermoryFun">我已阅读并同意使用条款及非活跃账号处理规范</el-checkbox>
        </div>
        <el-button type="primary" style="width: 100%;margin: 8px 0;background:#C1945D" @click="login">注册</el-button>
        <span style="display: block; width:100%;text-align: center; font-size:12px;margin: 8px 0;">已有账号，忘记密码</span>
        <el-divider></el-divider>
        <div class="other-login">
            <el-button type="info" class="back-image" style="width:40px;height:40px" circle></el-button>
            <el-button type="info" class="back-image" style="width:40px;height:40px" circle></el-button>
            <el-button type="info" class="back-image" style="width:40px;height:40px" circle></el-button>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
             acountNum: '',
             password: '',
             mermory: false,
             personUrl: '',
        }
    },
    methods:{
        linkToLogin() {
            this.$router.push('/public/user/login');
        },
        memoryFun() {
           
        },
        mermoryFun() {
            console.log(this.mermory);
        },
        login() {
            if(!this.acountNum) {
                this.$error('请输入账号')
                return;
            }
            if(this.password.length < 6) {
                this.$error('密码长度不能小于6');
                return;
            }
            if(!this.password) {
                this.$error('请输入6-16的密码');
                return;
            }
            if(!this.mermory) {
                this.$error('请先阅读使用条款');
                return;
            }
            let param = {
                
            }
            this.$axios
              .post("/mmp/model/base/object_type_list", param)
              .then((response) => {
                let data = response.data;
                if (data.code != 200) {
                  console.log("接口有错返回");
                  console.log(response);
                }
                this.selectList = data.data;
                this.selects = this.selectList[0].value;
              })
              .catch((error) => {
                this.$error("接口请求失败");
              });
        },
    },
    mounted() {
            
     },
}
</script>
<style scoped>
.login-wrapper{
    width:100vw;
    height: 100vh;
    background: url('/static/images/page/login/bg.png') no-repeat center;
    background-size: cover;
}
.login-user{
     width: 30vw;
    height:500px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-40%);
    border-radius: 5px;
    padding: 3vw;
    box-sizing: border-box;
    padding: 3vw;
    background: #F2F2F2;
}
.login-user .span-login{
    font-size: 12px;
    display: block;
    text-align: right;
}
.other-login{
    display: flex;
    justify-content: space-around;
    width: 100%;
    box-sizing: border-box;
    padding: 0 5vw;
    height: 60px;
}
.back-image{
    padding:0;
    margin: 0;
    background-size: cover;
    background: url('/static/images/page/login/wx.png') no-repeat center;
}
</style>