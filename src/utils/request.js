/*
 * @Author: gaominghao
 * @Date: 2020-11-06 15:57:36
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-11-09 10:25:49
 * @Description: none
 */
import axios from 'axios'
import Store from '@/store'
import Router from '@/router'
import Vue from '../main.js'

// create an axios instance
const service = axios.create({
	baseURL: process.env.BASE_API,
	timeout: 9000 // request timeout
})

// request interceptor
service.interceptors.request.use(
	(config) => {
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

// respone interceptor
service.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		return Promise.reject(error)
	}
)

export default service
