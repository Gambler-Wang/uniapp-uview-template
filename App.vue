<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss">
@import '@/uni_modules/uview-ui/index.scss';
/*每个页面公共css */
page {
  background: #f4f6f8;
  /deep/.u-cell-item-box {
    &.u-border-top:after {
      border-top-width: 0;
    }
    &.u-border-bottom:after {
      border-bottom-width: 0;
    }
    .u-cell {
      &:nth-last-of-type(1) {
        &.u-border-bottom:after {
          border-bottom-width: 0;
        }
      }
    }
  }
}
</style>
