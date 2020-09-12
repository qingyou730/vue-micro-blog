<template>
  <div>
  <el-row>
      <el-col :span="4" style="color: transparent">
          .
      </el-col>
      <el-col :span="16">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color=""
          text-color="#212529"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item  index="2">个人博客</el-menu-item>
          <el-menu-item index="3">博客详情</el-menu-item>
          <el-menu-item index="4">消息中心</el-menu-item>
          <el-menu-item index="5"></el-menu-item>
        </el-menu>
        <el-dropdown placement="bottom" class="login-logo">
          <img src="/static/images/avatar.png" style="width: 70%"/>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="/public/user/changePassword">修改密码</router-link>
            </el-dropdown-item>
            <el-dropdown-item><a href="javascript:;" @click="loginOut">退出</a></el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
      </el-col>
  </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        if(key == 2) {
          this.$router.push('/personblog');
        }
        console.log(key, keyPath);
      },
      loginOut() {
        
      },
    }
  }
</script>

<style>
  .login-logo{
    position: absolute;
    top: 8px;
    right: 17%;
    width: 60px;
    height: 60px;
    z-index: 20;
  }
</style>
