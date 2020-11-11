/*
 * @Author: gaominghao
 * @Date: 2020-11-09 13:28:53
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-11-09 13:33:40
 * @Description: none
 */
import Vue from 'vue'

// 秒转化为分钟
Vue.filter('secondToMinute', function(sec) {
	let mm = Math.round(sec / 60)
	return mm
})
