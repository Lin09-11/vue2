// 文章相关的API接口，都封装到这个模块中

// 导入request组件
import request from '@/utils/request'

// 向外按需导出一个API函数
/*   这是一个Promise对象
   request.get('/articles', {
    params: {
      _page: this.page,
      _limit: this.limit
    }
  })
  */
export const getArticleListAPI = function (_page, _limit) {
  // console.log('调用了getArticleListAPI这个函数')

  return request.get('/articles', {
    params: {
      _page: _page,
      _limit: _limit
    }
  })
}
