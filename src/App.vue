<template>
  <div id="app">
    <el-row style="background: #333333">
      <el-col :span="4" style="color:transparent;background: #333333">
        .
      </el-col>
      <el-col :span="16">
        <div class="nav-box">
          <div class="nav-list">
            <i class="el-icon-search" style="color:#BDBDBD; font-size: 18px "></i>
            <router-link to="/home">HOME</router-link>
            <router-link to="/personblog">ABOUT ME</router-link>
            <router-link to="/message">MESSAGE</router-link>
            <router-link to="/blogDetails">DETAILS</router-link>
            <!--<router-link to="/activity">社区</router-link>--> 
          </div>
          <div class="logo">
            <router-link to="/public/user/login">登录</router-link>
            <span style="dispay: inline-block; padding: 0 18px"> | </span>
            <router-link to="/public/user/register">注册</router-link>
          </div>
        </div>
      </el-col>
      <el-col :span="4" style="color:transparent;">
        .
      </el-col>
    </el-row>

    <el-row>
        <el-col :span="24">
          <div class="container">
            <router-view></router-view>
          </div>
        </el-col>
        <!--<el-col :span="4" style="color:transparent">
          .
        </el-col>-->
    </el-row>
    
  </div>
  
</template>

<script>

export default {
  name: 'app',
  data() {
    return{
      searchVal: '',
      pathUrl: ''
    }
  },
  components: {
  },
  methods: {
    goFristPage() {
      console.log(this.$router);
      this.$router.push('/home');
      console.log(this.$route);
    },
  },
  mounted() {
    console.log(this.$route, '===');
  }
}
</script>

<style>
.nav-box {
  display: flex;
  justify-content: space-between;
  height: 70px;
  line-height: 70px;
  background-color: #333333;
  border-radius: 5px;
}

.nav-box .logo {
  color: #BDBDBD;
  font-size: 18px;
}
.logo a{
  color: #BDBDBD;
  text-decoration: none;
  font-size: 18px;
}
.nav-list a {
  margin-left: 40px;
  color: #BDBDBD;
  text-decoration: none;
  font-size: 18px;
}

 a.router-link-active {
  font-weight: bold;
  font-size: 24px;
  color: white;
}

@media screen and (max-width: 1230px) {
    .nav-list a {
      margin-left: 20px;
      font-size: 14px;
    }
  .logo a{
    color: #BDBDBD;
    text-decoration: none;
    font-size: 14px;
  }
  a.router-link-active {
      font-weight: bold;
      font-size: 18px;
      color: white;
    }
}

.container {
  width: 100%;
}







html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    /*background: transparent;*/
}
table {
    border-collapse:collapse;
    border-spacing:0;
}
fieldset, img {    border:0;}
address, caption, cite, code, dfn, em, strong, th, var {
    font-style:normal;
    font-weight:normal;
}
ol, ul { list-style:none; }
caption, th { text-align:left; }
h1, h2, h3, h4, h5, h6 {
    font-size:200%;
    font-weight:normal;
}
:focus { outline: 0;}
a{ text-decoration:none;}
a:hover img{ border:none;}

/*清除浮动*/
.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.clearfix {display: inline-block;}
/* Hides from IE-mac \*/
* html .clearfix { height: 1%;}
.clearfix {display: block;}
/* End hide from IE-mac */

/*png css hack for ie6*/
 
</style>