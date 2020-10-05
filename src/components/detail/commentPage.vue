<template>
    <div>
        <div style="margin: 20px 0"></div>
        <el-row>
            <el-col :span='14'>
                <div style="color:rgb(183, 183, 183);color: rgb(189, 149, 98);text-align:center;font-size:12px">
                    ————————CXBLOG————————</div>
                <p style="font-size: 18px; text-align:center; margin:24px">HOT BLOGARTICLE</p>
                <div v-for="item in hotData" :key='item.bloggerId' style="width:100%">
                    <div style="width:100%; background:#F2F2F2;height:500px;margin:8px 0">
                        <img src="#" alt="摄影图片" style="width:100%; height:100%">
                    </div>
                    <div style="width:100%; background:#F2F2F2;height:300px" @click="linkToPerson(item.bloggerId)">
                        <h5 style="text-align: center;padding:12px 0">{{ item.bloggerTitle }}</h5>
                        <p class="swiper-content">{{ item.bloggerContent }}</p>
                        <div class="swiper-footer clearfix">
                            <span class="left" style="margin: 0 5px">发表者:{{item.bloggerId}}</span>
                            <span class="left">浏览量{{item.bloggerPv}}</span>
                            <span class="rigth">发表时间：{{item.bloggerDate}}</span>
                        </div>
                    </div>
                </div>
                <div  class="comment">
                    <ul>
                        <p style="color: rgb(189, 149, 98);border-bottom:1px solid #ccc;padding-bottom:3px">最新评论</p>
                        <li v-for="comItem in commentList" :key="comItem.id" style="border-bottom:1px solid #ccc">
                            <div class="com-item">
                                <div class="image">
                                    <img src="static/images/myblogpage/head.png" alt="">
                                </div>
                                <div class="text">
                                    <div class="name">{{comItem.name}}</div>
                                    <p style="font-size:13px;margin-top:2px">{{comItem.text}}</p>
                                </div>
                            </div>
                            <div class="information">
                                {{comItem.info}}
                            </div>
                        </li>
                    </ul>
                </div>
                <div style="margin: 12px auto;text-align:center">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="pageSize"
                        layout=" prev, pager, next, jumper"
                        :total="total">
                    </el-pagination>
                </div>
                <div class="submit-opinion" >
                    <div style="padding: 6px 12px;border-bottom:1px solid #ccc">
                        <i class="el-icon-chat-dot-round"></i>
                    </div>
                    <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="textarea">
                    </el-input>
                    <div style="text-align: center; margin-top:12px">
                        <el-button type="warning" plain>发表评论</el-button>
                    </div>
                </div>
            </el-col>
            <el-col :span='2' style="color:transparent">.</el-col>
            <page-rigth></page-rigth>
        </el-row>
    </div>
</template>
<script>
import pageRigth from '@/components/public/pageRigth.vue'
export default {
    components: {
        pageRigth,
    },
    data() {
        return{
            currentPage: 1,
            pageSize: 1,
            total: 5,
            textarea: "",
            hotData: [
                {
                bloggerId: "ynn4",
                bloggerTitle: "hadoop",
                bloggerContent: "hadoop123",
                bloggerCategory: "hadoop",
                bloggerDate: "2020-09-11T12:00:45.000+0000",
                bloggerPv:15,
                userId: 2
                },
            ],
            commentList: [
                {
                    name: 'ding玉东',
                    text: '博客的风格真好看，爱了',
                    info: "山西省 运城市 2020/09/12 09.44",
                },
                {
                    name: 'ding玉东',
                    text: '博客的风格真好看，爱了',
                    info: "山西省 运城市 2020/09/12 09.44",
                },
                {
                    name: 'ding玉东',
                    text: '博客的风格真好看，爱了'
                },
                {
                    name: 'ding玉东',
                    text: '博客的风格真好看，爱了'
                },
                {
                    name: 'ding玉东',
                    text: '博客的风格真好看，爱了'
                },
            ],
        }
    },
    methods: {
         linkToPerson(userId) {
            this.$router.push({
                path: '/blogDetails?userId='+userId,
                params: {
                    userId: userId
                }
            })
        },
        getData() {
            let url = 'http://localhost:8081/'
            let param = {
                name: 123
            }
            this.$axios.get(url, {
                params: param,
            }).then((response) => {
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
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    },
    mounted() {

    }
}
</script>
<style scoped>
    .swiper-footer{
    padding: 3px 10px;
}
.swiper-footer span{
    font-size: 12px;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.swiper-footer .left{
    float: left;
}
.swiper-footer .rigth{
    float:right;
}
.swiper-content{
    display: -webkit-box;    
    -webkit-box-orient: vertical;    
    -webkit-line-clamp: 3;    
    overflow: hidden;
    width: 80%;
    height: 200px;
    box-sizing: border-box;
    text-indent: 28px;
    font-size: 14px;
    padding: 6px 0;
    margin: 0 auto;
  }
.comment{
    padding: 6px 8px;
    border-radius: 4px;
    width: 100%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 4px #ccc;
    margin: 16px 0;
    box-sizing: border-box;
}
.comment .information{
    text-align: right;
    font-size: 12px;
    color: #ccc;
}
.com-item{
    display: flex;
}
.com-item .image{
    margin: 5px 0;
    width: 45px;
}
.com-item .image img{
    width:100%
} 
.com-item .text{
    margin: 5px 8px 0;
}
.submit-opinion{
    width: 100%;
    box-shadow: 1px 1px 3px #ccc;
    min-height: 200px;
}
.submit-opinion .smile{
    background: url("/static/image/myblogpage/opinion/smile.png") center center ;
}
</style>