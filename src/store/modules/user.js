/*
 * @Author: gaominghao
 * @Date: 2020-04-23 16:33:19
 * @LastEditors: gaominghao
 * @LastEditTime: 2020-11-06 16:06:07
 * @Description: none
 */
const user = {
  namespaced: true,
  state: {
    info: {
      accreditedInvestorSwitch: 0,
      cardTemplate: 1,
      id: '',
      investorCertifiedStatus: null,
      isFollowWechat: 0,
      orgName: '',
      teamName: null,
      uiCompanyAddressMp: '',
      uiCompanyLogo: '',
      uiCompanyMp: '',
      uiEmailMp: '',
      uiHeadimgMp: '',
      uiHeadimgMpBase64: null,
      uiHeadimgWx: '',
      uiHeadimgWxBase64: null,
      uiHonor: '',
      uiIndustryMp: null,
      uiIntroductionMp: '',
      uiMobilephoneMp: '',
      uiMpStyle: 0,
      uiPositionMp: '',
      uiRzstatus: 0,
      uiShenfen: '',
      uiTelphoneMp: '',
      uiTypeMp: '',
      uiUsernameMp: '',
      uiWechatQrcode: '',
      uiWechatQrcodeBase64: null,
      uiWechatXcxQrcode: '',
      uiWechatXcxQrcodeBase64: null,
      uiWxNickname: '',
      uieHbimg: '',
      userName: '',
      yyhzUserShenfen: '',
      uiTelphone: '', // 购买课程填写手机号
      storeName: '', // 微店名称

      level: 0, //0游客，1注册用户，2理财师
      isFill: -1, // 0:未填写 1: 已填写
      checkStatus: -1, // 0：待审核，1：通过，2：驳回
    },
    // 权限
    funcArr: [],
    // 名片头像二维码
    uiHeadimgMpBase64: '',
    // 微信头像二维码
    uiHeadimgWxBase64: '',
    // 微信账号二维码
    uiWechatQrcodeBase64: '',
    // 小程序二维码
    uiWechatXcxQrcodeBase64: '',
  },

  mutations: {
    // 初始化信息
    initUserInformation: (state, obj) => {
      // state.info = Object.assign({}, obj);
      Object.keys(obj).forEach((keyName) => {
        // console.log(keyName);
        state.info[keyName] = obj[keyName];
      })
      state.info.uiShenfen = '2' // uiShenfen字段废弃，现在固定为2
    },
    // 设置权限
    setUserFuncArr: (state, arr) => {
      state.funcArr = [].concat(arr)
    },
    // 更改某个属性
    setUserInformationByKey: (state, obj) => {
      state[obj.keyName] = obj.valueName
    },
    changeUserInfomatino: (state, obj) => {
      Object.keys(obj).forEach((item) => {
        state.info[item] = obj[item]
      })

    },
  },

  actions: {},
}

export default user
