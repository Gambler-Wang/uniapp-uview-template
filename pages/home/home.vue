<template>
  <view class="home-container">
    <view class="top-nav">
      <u-navbar :is-back="false" title=" " :border-bottom="false">
        <view class="slot-wrap"><text class="title">首页</text></view>
      </u-navbar>
    </view>
    <view class="main">
      <view class="btn-box">
        <u-button type="primary" @click="getRequest">测试get请求</u-button>
      </view>
      <view class="content-box">
        <u-input v-model="getValue" type="textarea" />
      </view>
      <view class="btn-box">
        <u-button type="primary" @click="postRequest">测试post请求</u-button>
      </view>
      <view class="content-box">
        <u-input v-model="postValue" type="textarea" />
      </view>
      <view class="content-box">
        <u-input v-model="vuex_home_Data" type="textarea" />
      </view>
      <u-row gutter="16">
        <u-col span="6">
          <u-button type="primary" @click="jumpToSearch">路由测试</u-button>
        </u-col>
        <u-col span="6">
          <u-button type="primary" @click="showPopup">自定义组件测试</u-button>
        </u-col>
      </u-row>
    </view>
    <login-register-popup ref="LoginRegisterPopupRefs" />
  </view>
</template>

<script>
import LoginRegisterPopup from '../../components/login-register-popup.vue'
export default {
  components: {
    LoginRegisterPopup,
  },
  data() {
    return {
      getValue: '',
      postValue: '',
    }
  },
  onReady() {},
  onLoad() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  async created() {},
  methods: {
    async getRequest() {
      // const res = await this.$u.api.queryArticle()
      const res = await this.$http.HOME.queryArticle()
      this.getValue = JSON.stringify(res)
    },
    async postRequest() {
      // const res = await this.$u.api.updateArticle({
      // 	userId: '6781',
      // 	title: '测试post',
      // 	body: '测试'
      // })
      const res = await this.$http.HOME.updateArticle({
        userId: '6781',
        title: '测试post',
        body: '测试',
      })
      this.postValue = JSON.stringify(res)
    },
    jumpToSearch() {
      uni.navigateTo({
        url: '/pages/device/device-search',
      })
    },
    showPopup() {
      this.$refs.LoginRegisterPopupRefs.show()
    },
  },
  beforeDestroy() {},
}
</script>

<style lang="scss" scoped>
.home-container {
  .top-nav {
    .slot-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
      padding: 0 30rpx;

      .title {
        font-size: 36rpx;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.9);
      }

      .right-box {
        color: #333333;

        view:nth-of-type(1) {
          margin-right: 24rpx;
        }
      }
    }
  }

  .main {
    .btn-box {
      padding: 24rpx 12rpx;
      text-align: center;
      background-color: #fff;
    }

    .content-box {
      padding: 24rpx 12rpx;
      background-color: #fff;
    }
  }
}
</style>
