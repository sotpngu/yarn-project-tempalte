/*
 * @Author: gaominghao
 * @Date: 2020-11-09 13:28:53
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-11-09 13:36:50
 * @Description: none
 */
import Vue from 'vue'

//点击空白区域绑定事件
Vue.directive('click-outside', {
	bind (el, binding, vNode) {
		if (typeof binding.value !== 'function') {
			return
		}

		const bubble = binding.modifiers.bubblez
		const handler = (e) => {
			if (bubble || (!el.contains(e.target) && el !== e.target)) {
				binding.value(e)
			}
		}
		el.__vueClickOutside__ = handler

		document.addEventListener('click', handler)
	},
	unbind (el, binding) {
		document.removeEventListener('click', el.__vueClickOutside__)

		el.__vueClickOutside__ = null
	}
});
