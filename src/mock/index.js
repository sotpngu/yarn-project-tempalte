/*
 * @Author: gaominghao
 * @Date: 2020-11-06 16:53:05
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-11-06 16:58:38
 * @Description: none
 */
import user from './modules/user'

const MockList = [
  ...user,
]

// 引入mockjs
const Mock = require('mockjs')

MockList.forEach((item) => {
  // 拦截ajax请求，配置mock的数据
  Mock.mock(item.url, item.method, item.handler)
})

