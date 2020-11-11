<!--
 * @Author: gaominghao
 * @Date: 2020-11-06 15:26:44
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-11-09 15:38:59
 * @Description: none
-->
<template>
  <div class="hello">
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    <div class="parent">
      父文本
      <div class="child">
        子文本
      </div>
    </div>

    <div class="width_test"></div>
  </div>
</template>

<script>
  import apiUser from '@/api/user.js'

  export default {
    name: 'HelloWorld',
    data() {
      return {

      }
    },
    methods: {

      // 登录
      login() {
        apiUser.submitLogin({
          name: 'zhangsan',
          password: 123
        }).then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        });
      }
      
    },
    created() {
      this.login();

      this.$store.commit('changeOpenid1', 11111)
      this.$store.commit('changeOpenid2', 22222)

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .parent {
    color: red;
    font-size: 34px;

    .child {
      color: green;
    }
  }

  .width_test {
    width: 750px;
    height: 50px;
    background: black;
  }
</style>
