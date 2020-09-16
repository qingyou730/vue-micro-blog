<template>
    <el-col :span='8'>
                <div style="color:#bd9562;text-align:center;font-size:12px">
                    ——————随机标签云——————</div>
                <p style="font-size: 18px; text-align:center; margin:24px;color:transparent">HOT BLOGARTICLE</p>
                <ul>
                    <li v-for="item in freeList" :key="item.id" class="free-style">
                        {{item.text}}<span style="color:#bd9562">({{item.count}})</span>
                    </li>
                </ul>
                <div style="height:150px;line-height:150px;color:#bd9562;font-size:12px">
                    ——————最近热门——————
                </div>
                <ul>
                    <li v-for='item in hotDataList' :key="item.bloggerId" class="hot-item">
                        <div class="hot-item-left">
                            <img src="/static/images/bg/login_bg.jpg" alt="">
                        </div>
                        <div class="hot-item-rigth">
                            <p style="text-align:center; font-size:18px">{{item.bloggerTitle}}</p>
                            <span>{{item.bloggerDate.split('+')[0]}}</span>
                        </div>
                    </li>
                </ul>
     </el-col>
</template>
<script>
export default {
    data() {
        return{
            hotDataList: [
                {
                bloggerId: "ynn4",
                bloggerTitle: "hadoop",
                bloggerContent: "hadoop123",
                bloggerCategory: "hadoop",
                bloggerDate: "2020-09-11T12:00:45.000+0000",
                bloggerPv: 15,
                userId: 2,
                },
                {
                bloggerId: "ynn2",
                bloggerTitle: "linux",
                bloggerContent: "linux123",
                bloggerCategory: "linux",
                bloggerDate: "2020-09-11T11:59:13.000+0000",
                bloggerPv: 12,
                userId: 1,
                },
                {
                bloggerId: "ynn5",
                bloggerTitle: "spring",
                bloggerContent: "spring123",
                bloggerCategory: "spring",
                bloggerDate: "2020-09-12T03:08:07.000+0000",
                bloggerPv: 12,
                userId: 2,
                },
                {
                bloggerId: "ynn1",
                bloggerTitle: "java",
                bloggerContent: "java123",
                bloggerCategory: "java",
                bloggerDate: "2020-09-11T08:03:41.000+0000",
                bloggerPv: 8,
                userId: 1,
                },
            ],
            freeList: [{id: 1, text: 'LifeStyle', count: 5},{id: 2, text: 'Travel', count: 9},
                {id: 3, text: 'Personal', count: 3},{id: 4, text: 'Music', count: 6},
                {id: 6, text: 'Food', count: 8}
            ],
        }
    }
}
</script>
<style scoped>
 .free-style{
      height: 90px;
      line-height: 90px;
      margin: 6px 0;
      font-family: serif;
      letter-spacing: 2px;
      color: #333333;
      border-bottom: 1px solid #d5d5d5;
  }
.hot-item{
    height: 176px;
    border-bottom: 1px solid #cccccc;
}
.hot-item-left{
    width: 30%;
   display: inline-block;
}
.hot-item-left img{
    width: 100%;
}
hot-item-rigth{
   display: inline-block;
    width: 60%;
}
</style>