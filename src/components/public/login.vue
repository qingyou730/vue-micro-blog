<template>
    <div class="login-wrapper">
        <div class="login-user">
            <h5 style="padding: 0; font-size: 24px;">登陆</h5>
            <span class='span-login'>没有账号，<span  @click="linkToReg"  style="cursor: pointer;color:#398FD3;">点此处注册</span></span>
            <el-input v-model="acountNum" placeholder="手机/邮箱" style="margin: 5px 0;"></el-input>
            <el-input placeholder="请输入密码" v-model="password" show-password style="margin: 5px 0;"></el-input>
            <div class="clearfix" style='margin: 0 0 4px 0;'>
                <el-checkbox v-model="mermory" @change="mermoryFun">记住我</el-checkbox>
            </div>
            <el-button  style="width: 100%;margin-bottom: 6px;background:#C1945D;" @click="login">登陆</el-button>
            <span style="display: block; width:100%;text-align: center; font-size:12px;margin-bottom: 4px;">已有账号，忘记密码</span>
            <div style="width: 100%; height: 80px"></div>
            <div class="other-login-w">———其他登录方式———</div>
            <div class="other-login">
                <el-button class="back-image" style="width:40px;height:40px" circle></el-button>
                <el-button class="back-image" style="width:40px;height:40px" circle></el-button>
                <el-button class="back-image" style="width:40px;height:40px" circle></el-button>
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
             mermory: false
        }
    },
    methods:{
        linkToReg() {
            this.$router.push('/public/user/register');
        },
        memoryFun() {
           
        },
        mermoryFun() {
            if(!this.acountNum || !this.password) {
                this.$error('请先输入账号和密码')
                return;
            }else{
                localStorage.setItem('acountNum', this.acountNum);
                localStorage.setItem('password', this.password);
            }
        },
        login() {
            // if(!this.acountNum) {
            //     this.$error('请输入账号')
            //     return;
            // }
            // if(this.password.length < 6) {
            //     this.$error('密码长度不能小于6');
            //     retur;
            // }
            // if(!this.password) {
            //     this.$error('请输入6-16的密码');
            //     return;
            // }
            let url = '/personal/blogger/deploy'
            let param = {
                bloggerTitle: 123,
                bloggerConten: 'JAVA',
                bloggerCategory: 'code',
                userId: 4
            }
            this.$axios.get(url, {
                params: param,
            }).then((response) => {
                console.log(response)
        //         let data = response.data;
        //         if (data.code != 200) {
        //           console.log("接口有错返回");
        //           console.log(response);
        //         }
        //         this.selectList = data.data;
        //         this.selects = this.selectList[0].value;
              })
              .catch((error) => {
                this.$error("接口请求失败");
              });
        },
    },
    mounted() {
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
.login-wrapper{
    width:100vw;
    height: 100vh;
    background: url('/static/images/page/login/bg.png') no-repeat center;
    background-size: cover;
}
.other-login-w{
    text-align: center;
    color: dimgrey;
    font-size: 12px;
    margin: 15px 0;
}
</style>