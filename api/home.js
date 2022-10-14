import http from '@/utils/http.js'

export default {
  // 测试get请求
  queryArticle: (params) => {
    return http.request({
      url: '/2',
      method: 'get',
      params,
    })
  },
  // 测试post请求
  updateArticle: (data) => {
    return http.request({
      url: '',
      method: 'post',
      data,
    })
  },
}
