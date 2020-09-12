<template>
    <div class="login-user">
        <h5 style="padding: 0; font-size: 24px;">登陆</h5>
        <span class='span-login' @click="linkToReg">没有账号，此处登录</span>
        <el-input v-model="acountNum" placeholder="手机/邮箱" style="margin: 8px 0;"></el-input>
        <el-input placeholder="个人空间地址" v-model="personUrl" show-password style="margin: 5px 0;"></el-input>
        <el-input placeholder="密码不能少于六位" v-model="password" show-password style="margin: 5px 0;"></el-input>
        <div class="clearfix" style='margin: 0 0 4px 0;'>
            <el-checkbox v-model="mermory" @change="mermoryFun">我已阅读并同意使用条款及非活跃账号处理规范</el-checkbox>
        </div>
        <el-button type="primary" style="width: 100%;margin-bottom: 6px;" @click="login">登陆</el-button>
        <span style="display: block; width:100%;text-align: center; font-size:12px;margin-bottom: 4px;">已有账号，忘记密码</span>
        <el-divider></el-divider>
        <div class="other-login">
            <el-button type="info" style="width:40px;height:40px" circle></el-button>
            <el-button type="info" style="width:40px;height:40px" circle></el-button>
            <el-button type="info" style="width:40px;height:40px" circle></el-button>
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
        linkToReg() {

        },
        memoryFun() {
           
        },
        mermoryFun() {
            
        },
        login() {
            if(!this.acountNum) {
                this.$error('请输入账号')
                return;
            }
            if(this.password.length < 6) {
                this.$error('密码长度不能小于6');
                retur;
            }
            if(!this.password) {
                this.$error('请输入6-16的密码');
                return;
            }
        },
    },
    mounted() {
            console.log(localStorage.getItem('acountNum'), 2222)
            console.log(localStorage.getItem('password'));
            if(localStorage.getItem('acountNum')) {
                this.acountNum =  localStorage.getItem('acountNum');
                this.password =  localStorage.getItem('password');
            }
     },
}
</script>
<style scoped>
.login-user{
    width: 30vw;
    height:500px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    box-shadow: 1px 1px 19px #E2E2E2;
    border-radius: 5px;
    padding: 3vw;
    box-sizing: border-box;
    padding: 3vw;
}
.login-user .span-login{
    font-size: 12px;
    display: block;
    text-align: right;
    cursor: pointer;
}
.other-login{
    display: flex;
    justify-content: space-around;
    width: 100%;
    box-sizing: border-box;
    padding: 0 5vw;
    height: 60px;
}
</style>