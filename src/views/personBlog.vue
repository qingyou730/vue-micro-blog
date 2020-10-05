<template>
    <div class="person-blog">
        <el-row>
            <el-col :span="4" style="color:transparent">.</el-col>
            <el-col :span="16" style="color:#ccc">
                <div class="header-top" style="width:100%;display:flex;flex-direction: column;align-items: center;justify-content:center;padding:32px 0 0 6px">
                    <div style="margin: 16px 0; width:80px;height:80px">
                        <img src="/static/images/myblogpage/head.png" style="width:100%;" alt="头像">
                    </div>
                    <div class="name" style="font-size:16px">
                        徐贝贝
                    </div>
                    <div class="desc" style="font-size:12px;margin: 6px 0">
                        时间这么大我想去看看
                    </div>
                </div>

                <el-row class="person-desc">
                    <el-col :span="24" style="font-size:20px;color:#fff;margin:10px 0">个人介绍</el-col>
                    <el-row class="wrapper">
                        <el-col :span="16" class="col">
                            <ul class="person-ul" >
                                <li>姓名： </li>
                                <li>性别： </li>
                                <li>名族： </li>
                                <li>地址： </li>
                                <li>邮箱： </li>
                            </ul>
                        </el-col>
                        <el-col :span="8">
                            <img src="/static/images/myblogpage/desc-rigth.png" alt="" style="height:100%">
                        </el-col>
                    </el-row>
                </el-row>

                <el-row class="my-blog-text">
                    <div style="margin: 12px 0;font-size:20px">我的博文</div>
                    <div v-for="(item, index) in personList" :key="index" class="text-father">
                        <div class="text-title">
                            <h7 style="width:85%;border-bottom: 1px solid #D1C9B9;padding:0 0 12px 0">我的摄影图片</h7>
                            <h7 style="width:25%;
                                text-align:center">
                                <p style="color:#C98129;font-size:18px;">14</p>    
                                <p>2020-09-30</p>
                            </h7>
                        </div>
                        <div class="text-content">
                            <div class="content-left">
                                <img src="/static/images/myblogpage/content-left.png" alt="">
                            </div>
                            <div class="content-rigth">
                                {{item.text}}
                            </div>
                        </div>
                    </div>
                </el-row>  
            </el-col>
            <el-col :span="4" style="color:transparent">.</el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return{
            personList: [
                {
                    text: "的方向flex-direction属性决定主轴的方向（即项目的排列方向）lex-dn属性决定主轴的方向（即项目的排列方向）lex-dn属性决定主轴的方向（即项目的排列方向）lex-dn属性决定主轴的方向（即项目的排列方向）lex-dn属性决定主轴的方向（即项目的排列方向）lex-dn属性决定主轴的方向（即项目的排列方向）lex-dn属性决定主轴的方向（即项目的排列方向）lex-dn属性决定主轴的方向（即项目的排列方向）lex-direction属性决定主轴的方向（即项目的排列方向）lex-direction属性决定主轴的方向（即项目的排列方向）。有以下四个值：row（默认值，主轴为水平方向，起点在左端），row-reverse（主轴为水平方向，起点在右端），column（主轴为垂直方向，起点在上沿），column-reverse（主轴为垂直方向，起点在下沿），效果如下",
                },
                {
                    text: "的方向flex-direction属性决定主轴的方向（即项目的排列方向）lex-dn属性决定主轴的方向（即项目的排列方向）lex-dn属性决定主轴的方向（即项目的排列方向）lex-dn属性决定主轴的方向（即项目的排列方向）lex-dn属性决定主轴的方向（即项目的排列方向）lex-dn属性决定主轴的方向（即项目的排列方向）lex-dn属性决定主轴的方向（即项目的排列方向）lex-dn属性决定主轴的方向（即项目的排列方向）lex-direction属性决定主轴的方向（即项目的排列方向）lex-direction属性决定主轴的方向（即项目的排列方向）。有以下四个值：row（默认值，主轴为水平方向，起点在左端），row-reverse（主轴为水平方向，起点在右端），column（主轴为垂直方向，起点在上沿），column-reverse（主轴为垂直方向，起点在下沿），效果如下",
                }
            ]
        }
    }
}
</script>
<style scoped>
.person-blog{
    width: 100%;
    height: 100%;
    /* background: url("/static/myblogpage/bg-person.png") no-repeat center; */
    background: url('/static/images/myblogpage/bg-person.png') no-repeat center 0;
}
.person-desc .wrapper{
    border-radius: 8px;
}
.person-desc .wrapper .col{
    background:#A0A1A3  ;
}
.person-desc .wrapper ul li{
    padding: 13.5px 12px;
    box-sizing: border-box;
}
.text-father{
    width: 100%;
    margin: 12px 0;
    box-sizing: border-box;
    padding: 8px 6px;
    background-color: #fff;
}
.text-title{
    display: flex;
    justify-content: space-between;
    color: black;
}
.text-content{
    color: black;
    width: 100%;
    display: flex;
    height: 217px;
}
.content-left{
    height: 95%;
box-sizing: border-box;
padding: 12px 0;
}
.content-left img{
    /* width: 100%; */
    height: 100%;
}
.content-rigth{
    height: 150px;
    text-indent: 2rem;
    padding: 16px 6px;
    line-height: 24px;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
