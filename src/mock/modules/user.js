/*
 * @Author: gaominghao
 * @Date: 2020-11-06 16:53:30
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-11-09 10:25:38
 * @Description: none
 */
export default [
  {
    url: '/login',
    method: 'post',
    handler: function (data) {
      return {
        message: '登录成功'
      }
    }
  }
]