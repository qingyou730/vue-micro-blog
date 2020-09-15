<template>
    <div>
        <div style="margin: 20px 0"></div>
        <el-row>
            <el-col :span='14'>
                <div style="color:rgb(183, 183, 183);text-align:center;font-size:12px">
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
                <div style="margin: 12px auto">
                    <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="pageSize"
                        layout=" prev, pager, next, jumper"
                        :total="total">
                    </el-pagination>
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


</style>