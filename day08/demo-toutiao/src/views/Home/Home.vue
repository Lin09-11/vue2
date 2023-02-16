<template>
  <div class="home-container">
    <van-nav-bar title="黑马头条" :fixed="true"/>
    <van-pull-refresh v-model="isLoading" :disabled="finished" @refresh="onRefresh">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" >
    <!-- 导入,注册,并使用ArticleInfo组件 -->
    <!-- 3.使用 ArticleInfo组件 -->
    <ArticleInfo v-for="item in artlist" :key="item.id"
    :title="item.title"
    :author="item.aut_name"
    :cmtCount="item.comm_count"
    :time="item.pubdate"
    :cover="item.cover"
    ></ArticleInfo>
  </van-list>
</van-pull-refresh>
  </div>
</template>

<script>

// 导入request.js
// import reuqest from '@/utils/request.js'

// 按需导入API接口
import { getArticleListAPI } from '@/api/articleAPI'

// 1.导入ArticleInfo组件
import ArticleInfo from '@/components/Article/ArticleInfo.vue'

export default {
  name: 'Home',
  data () {
    return {
      // 页码值
      page: 1,
      // 每一页显示多少条数据
      limit: 10,
      // 文章的数组
      artlist: [],
      // 是否正在加载下一页数据,如果loading为true 则不会反复触发load事件
      // 每当下一页数据请求回来之后,千万要记得,把loading从true改为false
      // 因为刚刚进入页面的时候,不需要触发onLoad事件,所以应该将loading初始化为true,才不会进行数据请求
      loading: true,
      // 所有数据是否加载完毕了,如果没有更多数据了,一定要把finished改为true
      finished: false,
      // 是否下拉刷新
      isLoading: false
    }
  },
  created () {
    this.initArticleList()
  },
  methods: {
    // 封装获取文章列表数据的方法
    // isRefresh--是传入要进行上拉刷新还是下拉刷新
    // 只有当下拉刷新的时候才需要在调用该函数的时候传参
    async initArticleList (isRefresh) {
      // 发起GET请求，获取文章的列表数据
      // 获取到的对象是Promise，所以要使用await和async
      const { data: res } = await getArticleListAPI(this.page, this.limit)

      // console.log(res)
      // this.artlist = res

      if (isRefresh) {
        // 证明是下拉刷新：新数据在前，旧数据在后
        this.artlist = [...res, ...this.artlist]
        this.isLoading = false
      } else {
      // 如果上拉加载更多,那么应该是
      // this.artlist=[旧数据在前,新数据在后]
        this.artlist = [...this.artlist, ...res]
      }

      // 当第一页渲染完,应该将loading改为false,等一下才可以访问第二页
      this.loading = false
      if (res.length === 0) {
        // 证明没有下一页数据了,直接把finished改为true,表示数据加载完了
        this.finished = true
      }
    },
    // 只要onLoad被调用,就应该请求下一页数据
    onLoad () {
      // console.log('触发了load事件')
      // 1.让页码值+1
      this.page++
      // 2.重新请求接口获取数据
      this.initArticleList()
    },
    // 下拉刷新的处理函数
    onRefresh () {
      // console.log('触发了下拉刷新')
      // 1.让页码值+1
      this.page++
      // 2.重新请求接口获取数据
      // 只有当下拉刷新的时候才需要在调用该函数的时候传参
      // async initArticleList (isRefresh) {
      this.initArticleList(true)
    }
  },
  // 2.注册组件
  components: {
    ArticleInfo
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
