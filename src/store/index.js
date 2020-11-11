/*
 * @Author: gaominghao
 * @Date: 2020-11-06 16:04:46
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-11-09 13:11:50
 * @Description: none
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		openid1: '',
		openid2: '',
	},
	mutations: {
		changeOpenid1: (state, str) => {
			state.openid1 = str;
		},
		changeOpenid2: (state, str) => {
			state.openid2 = str;
		}
	},
	actions: {
		
	},
	modules: {
		user,
	},
	plugins: [createPersistedState({
		paths: [ // 写在这个里面的将被存在localStorage
			'openid1',
			'user.info.id',
			'user.info.cardTemplate',
		]
	})]
})

export default store
