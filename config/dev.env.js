/*
 * @Author: gaominghao
 * @Date: 2020-11-06 15:26:44
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-11-06 16:48:50
 * @Description: none
 */
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  Mock: true,
  API_ROOT: '"http://(开发环境请求地址)"'
})
