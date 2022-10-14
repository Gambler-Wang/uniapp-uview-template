import Request from '@/uni_modules/luch-request/index.js'
import { httpBaseDomain } from '@/config/index.js'
import store from '@/store'
import { httpBasePrefix } from '../config/index.js'
const http = new Request({
  baseURL: httpBaseDomain + httpBasePrefix, //设置请求的base url
  timeout: 800,
  header: {},
})
//请求拦截器
http.interceptors.request.use(
  (config) => {
    console.log(config)
    const token = store.state.vuex_token
    const userQuery = ['get', 'delete'].includes(config.method.toLowerCase())
    let httpParams = userQuery ? config.params : config.data
    if (token) {
      httpParams = {
        token,
        ...httpParams,
      }
    }
    return userQuery
      ? {
          ...config,
          params: httpParams,
        }
      : {
          ...config,
          data: httpParams,
        }
  },
  (error) => {
    return Promise.resolve(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  (res) => {
    console.log(res)
    const { statusCode, data } = res
    if (statusCode === 200 || statusCode === 201) {
      return data
    } else {
      uni.showToast({
        title: '请求失败',
        duration: 1200,
      })
      return Promise.reject(data)
    }
  },
  (error) => {
    // if (error.statusCode == 401) {
    // 	store.commit('$uStore', {
    // 		name: 'vuex_token',
    // 		value: ''
    // 	})
    // 	uni.switchTab({
    // 		url: "/pages/home/home.vue"
    // 	})
    // }
    return Promise.resolve(error)
  }
)
export default http
