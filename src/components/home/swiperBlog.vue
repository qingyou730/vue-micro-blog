<template>
    <div>
        <div style="margin: 32px 0 24px; text-align: center">LATEST BLOGARTICLE</div>
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in swiperData" :key="item.bloggerDate" @click.native="linkToPerson(item.userId)">
                <h5 style="text-align: center;margin:3px 0">{{ item.bloggerTitle }}</h5>
                <p class="swiper-content">{{ item.bloggerContent }}</p>
                <div class="swiper-footer clearfix">
                    <span class="left" style="margin: 0 5px">发表者:{{item.userId}}</span>
                    <span class="left">浏览量{{item.bloggerPv}}</span>
                    <span class="rigth">发表时间：{{item.bloggerDate}}</span>
                </div>
            </el-carousel-item>
        </el-carousel>
        <el-divider></el-divider>
    </div>
</template>
<script>
export default {
    data() {
        return{
            swiperData: [],
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
        }
    },
    mounted(){
        this.swiperData = [
        {
          bloggerId: "ynn7",
          bloggerTitle: "cloud",
          bloggerContent: "cloud123",
          bloggerCategory: "cloud",
          bloggerDate: "2020-09-12T07:12:00.000+0000",
          bloggerPv: 5,
          userId: 4
        },
        {
          bloggerId: "ynn6",
          bloggerTitle: "mvc",
          bloggerContent: "mvc123",
          bloggerCategory: "mvc",
          bloggerDate: "2020-09-12T07:11:31.000+0000",
          bloggerPv: 1,
          userId: 3
        },
        {
          bloggerId: "ynn5",
          bloggerTitle: "spring",
          bloggerContent: "spring123",
          bloggerCategory: "spring",
          bloggerDate: "2020-09-12T03:08:07.000+0000",
          bloggerPv: 12,
          userId: 2
        },
        {
          bloggerId: "ynn4",
          bloggerTitle: "hadoop",
          bloggerContent: "hadoop123",
          bloggerCategory: "hadoop",
          bloggerDate: "2020-09-11T12:00:45.000+0000",
          bloggerPv: 15,
          userId: 2
        },
        {
          bloggerId: "ynn3",
          bloggerTitle: "web",
          bloggerContent: "web123",
          bloggerCategory: "web",
          bloggerDate: "2020-09-11T11:59:56.000+0000",
          bloggerPv: 8,
          userId: 1
        }
      ]
    }
}
</script>
<style scoped>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .swiper-content{
    display: -webkit-box;    
    -webkit-box-orient: vertical;    
    -webkit-line-clamp: 3;    
    overflow: hidden;
    width: 80%;
    height: 120px;
    box-sizing: border-box;
    text-indent: 28px;
    font-size: 14px;
    padding: 6px 0;
    margin: 0 auto;
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

</style>
    