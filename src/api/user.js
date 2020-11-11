/*
 * @Author: gaominghao
 * @Date: 2020-11-06 16:26:58
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-11-06 16:43:47
 * @Description: none
 */
import request from '@/utils/request'

export default {
  /**
   * 登录
   * @param data
   */
  submitLogin(data) {
    return request({
      url: '/login',
      method: 'post',
      data: data
    })
  },
  
}
