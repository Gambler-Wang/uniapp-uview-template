<template>
  <view class="my-container">
    <view class="top-nav">
      <u-navbar :is-back="false" title=" " :border-bottom="false">
        <view class="slot-wrap">
          <text class="title">我的</text>
          <view class="right-box"><u-icon name="scan" size="46" @click="clickScan"></u-icon></view>
        </view>
      </u-navbar>
    </view>
    <view class="my-content">
      <view class="head-box">
        <u-cell-group :border="false">
          <u-cell-item arrow-direction="right" :border-bottom="false" @click="handleClick">
            <view class="item-box">
              <u-avatar :src="user.user_pic" size="120" mode="square"></u-avatar>
              <view class="title-box" v-if="vuex_token">
                <view class="title">{{ user.user_name || '请设置用户名' }}</view>
                <view class="title-tip">{{ user.mobile || user.email }}</view>
              </view>
              <view class="title-box" v-else><view class="title">立即登录</view></view>
            </view>
          </u-cell-item>
        </u-cell-group>
      </view>
      <view class="main-box">
        <u-cell-group>
          <u-cell-item arrow-direction="right" @click="handleClick">
            <view class="item-box">
              <image src="../../static/img/set-icon.png"></image>
              <view class="title">设置</view>
            </view>
          </u-cell-item>
          <u-cell-item arrow-direction="right" @click="checkGlobalValue">
            <view class="item-box">
              <image src="../../static/img/set-icon.png"></image>
              <view class="title">测试全局变量</view>
            </view>
          </u-cell-item>
        </u-cell-group>
      </view>
    </view>
    <u-toast ref="uToast" />
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      show: false,
      content: '尊敬的用户，如果你确定提交“退出登录”申请，将退出当前登录状态？',
      user: {
        user_id: '',
        mobile: '',
        email: '',
        country: '',
        user_pic: '',
        user_name: '',
      },
    }
  },
  created() {},
  onShow() {
    this.user = Object.assign(this.user, this.vuex_user)
  },
  methods: {
    handleClick() {
      this.$refs.uToast.show({
        title: '点击了' + Math.floor(1000 * Math.random()),
        duration: 1200,
      })
    },
    checkGlobalValue() {
      this.$u.vuex('vuex_home_Data', '全局变量得到测试' + Math.floor(1000 * Math.random()))
      this.$refs.uToast.show({
        title: '全局变量改变了',
        duration: 1200,
      })
    },
    clickScan() {
      const that = this
      uni.scanCode({
        success: function (res) {
          console.log('条码类型：' + res.scanType)
          console.log('条码内容：' + res.result)
          console.log(res.result.length)
          if (res.result.length !== 25) {
            that.$u.toast('二维码错误')
            return
          }
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.my-container {
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
      }
    }
  }
  .my-content {
    padding: 32rpx;
    box-sizing: border-box;
    .head-box {
      margin-bottom: 32rpx;
      /deep/.u-cell-item-box {
        border-radius: 24rpx;
      }
      .item-box {
        display: flex;
        align-items: center;
        .title-box {
          margin-left: 30rpx;
          overflow: hidden;
          .title {
            font-size: 40rpx;
            color: rgba(0, 0, 0, 0.85);
            margin-bottom: 6rpx;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .title-tip {
            color: rgba(0, 0, 0, 0.65);
            font-size: 24rpx;
            text-align: left;
          }
        }
      }
    }
    .main-box {
      border-radius: 24rpx;
      overflow: hidden;
      margin-bottom: 32rpx;
      .item-box {
        display: flex;
        align-items: center;
        image {
          width: 58rpx;
          height: 58rpx;
          margin-right: 30rpx;
        }
        .title {
          font-size: 36rpx;
          color: rgba(0, 0, 0, 0.85);
        }
      }
    }
    .app_info {
      margin-top: 50rpx;
      display: flex;
      width: 100%;
      justify-content: center;
      align-content: center;
      color: rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
