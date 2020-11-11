<template>
  <div class="head_wrap">
    <div class="head_main clear">
      <span class="return_icon fl" @click="back" v-if="iconOff">
				<img :src="'./assets/image/return_iconhei.png'" alt="">
			</span>
      <h3 class="weui-flex_item">
        {{title}}
      </h3>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      iconOff: { //返回按钮 黑色
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: ''
      },
    },
    data() {
      return {}
    },
    methods: {
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .head_main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 88px;
    // background: #222e66;
    background: #ffffff;
    z-index: 1000;
    border-bottom: 1PX solid #e5e5e5;

    .return_icon {
      padding: 28px 30px;
      position: relative;
      z-index: 5;

      img {
        height: 32px !important;
        pointer-events: none;
      }
    }
  }
</style>
