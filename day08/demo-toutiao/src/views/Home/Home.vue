<template>
  <div class="home-container">
    <van-nav-bar title="黑马头条" :fixed="true"/>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
    <h1>aaa</h1>
  </div>
</template>

<script>

// 导入request.js
import reuqest from '@/utils/request.js'

export default {
  name: 'Home',
  data () {
    return {
      // 页码值
      page: 1,
      // 每一页显示多少条数据
      limit: 10
    }
  },
  created () {
    this.initArticleList()
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList () {
      // 发起GET请求，获取文章的列表数据
      // 获取到的对象是Promise，所以要使用await和async
      const { data: res } = await reuqest.get('/articles', {
        // 请求参数
        params: {
          _page: this.page,
          _limit: this.limit
        }
      })

      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;

.van-nav-bar{
  background-color: #007bff;
}

/deep/ .van-nav-bar__title{
  color: white;
}

}

</style>
