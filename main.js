import Vue from 'vue'
import App from './App'
// 引入全局uView
import uView from '@/uni_modules/uview-ui'
import store from './store'
// 引入uView提供的对vuex的简写法文件
let vuexStore = require('@/store/$u.mixin.js')
import globalFunc from '@/method/index.js'
import api from '@/api/index.js'
Vue.prototype.$http = api
Vue.mixin(vuexStore);
Vue.config.productionTip = false
App.mpType = 'app';
Vue.use(uView);
const app = new Vue({
	store,
	...App
})
Vue.use(globalFunc, app)
app.$mount();
