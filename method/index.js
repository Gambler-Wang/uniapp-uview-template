const install = (Vue, vm) => {
  let getUserInfo = function () {
    vm.$u.api
      .getUserInfo({})
      .then((res) => {
        vm.$u.vuex('vuex_user', Object.assign(vm.vuex_user, res.data))
      })
      .catch((e) => {
        console.log(e)
      })
  }

  let clearAllUserInfo = function () {
    vm.$u.vuex('vuex_token', '')
    vm.$u.vuex('vuex_user', {
      safe_level: 1,
      operate_code: '',
      user_pic: '',
      user_name: '',
      mobile: '',
      email: '',
      country: '',
    })
  }

  let logoutUser = function (lastPage) {}
}
export default {
  install,
}
