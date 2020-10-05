<template>
    <div>
        <!-- CX-bg -->
        <cx-blog></cx-blog>
        <div style="text-align:center;margin:12px 0;color:#C1945D">——————  CXBLOG  ——————</div>
        <p style="text-align:center;margin:10px 0 12px 0">沟通交流，拉近你我</p>
        <el-row>
            <el-col :span='4' style="color: transparent">.</el-col>
            <el-col :span='16'>
                <div class="submit-opinion" >
                    <div style="padding: 6px 12px;border-bottom:1px solid #ccc">
                        <i class="el-icon-chat-dot-round"></i>
                    </div>
                    <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        ref="textarea"
                        v-model="textarea">
                    </el-input>
                    <div style="text-align: center; margin-top:12px">
                        <el-button type="warning" plain>发表留言</el-button>
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
            </el-col>
            <el-col :span='4' style="color: transparent">.</el-col>
        </el-row>
    </div>
</template>

<script>
import cxBlog from '@/components/public/cxBlog.vue'
import swiperBlog from '@/components/home/swiperBlog.vue'
import hotBlog from '@/components/home/hotBlog.vue'


export default {
    props: [],
    components: {
      cxBlog,
      swiperBlog,
      hotBlog
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
        changSize() {
            console.log(this.$refs.textarea, '------11');
            this.$refs.textarea.$el.style.minHeight='100px';
            var input = document.querySelector('.el-textarea textarea');
            console.log(input, 'input==');
            input.style.height='100px';
            // input.style.color='red'

        },
        handleSizeChange() {},
        handleCurrentChange() {},
    },
    mounted() {
        this.changSize();
    },
}
</script>
<style scoped>
.cx-blog-logo-bj{
        width: 100%;
        height: 60px;
        background:#F2F2F2;
    }
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