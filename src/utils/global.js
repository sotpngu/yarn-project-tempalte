/*
 * @Author: gaominghao
 * @Date: 2020-02-17 11:22:22
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-11-09 13:39:49
 * @Description: none
 */
import Store from '@/store/index'
import request from '@/utils/request'
import Router from '@/router/index'
export default {
	install(Vue, options) {

		// 解决移动端，输入框有文字时，点击后光标定位到文字尾部
		Vue.prototype.focusToTextEnd = function (e) {
			let obj = e.srcElement;
			obj.focus();
			const len = obj.value.length;
			//光标定位要加上 setTimeOut，不然就会重新光标定位失败
			setTimeout(() => {
				obj.selectionStart = obj.selectionEnd = len;
			}, 60)
		}

		// 解决ios软键盘点开收起后，页面错位
		Vue.prototype.scrollwindow = function () {
			window.scroll(0, 0);
			console.log('执行scroll滚动')
		}

		// 隐藏右上角分享按钮
		Vue.prototype.hideWeixinShare = function () {
			wx.ready(function () {
				setTimeout(() => {

					console.log("hide weixin share")
					wx.hideAllNonBaseMenuItem();

				}, 300);
			});
		}

		// 显示右上角分享按钮
		Vue.prototype.showWeixinShare = function () {
			wx.ready(function () {
				setTimeout(() => {

					console.log("show weixin share")
					wx.showAllNonBaseMenuItem();

				}, 500);
			});
    }
    

	}

}
