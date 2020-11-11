/*
 * @Author: gaominghao
 * @Date: 2020-11-06 15:26:44
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-11-06 16:49:26
 * @Description: none
 */
'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  ENV_CONFIG: '"test"',
  Mock: false,
  API_ROOT: '"http://(线上测试环境请求地址)"'
})
