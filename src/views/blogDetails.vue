<template>
    <div>
        <!-- CX-bg -->
        <cx-blog></cx-blog>
        <el-row>
            <el-col :span='4' style="color: transparent">.</el-col>
            <el-col :span='16'>
                 <comment-page></comment-page>
            </el-col>
            <el-col :span='4' style="color: transparent">.</el-col>
        </el-row>
    </div>
</template>

<script>
import cxBlog from '@/components/public/cxBlog.vue'
import swiperBlog from '@/components/home/swiperBlog.vue'
import commentPage from '@/components/detail/commentPage.vue'


export default {
    props: [],
    components: {
      cxBlog,
      swiperBlog,
      commentPage
    },
    data() {
      return{

      }
    }
}
</script>
<style scoped>
    .cx-blog-logo-bj{
        width: 100%;
        height: 60px;
        background:#F2F2F2;
    }
</style>
