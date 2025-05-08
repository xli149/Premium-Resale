// pages/profile/profile.js
const app = getApp()

Page({
  data: {
    userInfo: {
      name: '刘小姐',
      id: '10086724',
      avatar: 'https://randomuser.me/api/portraits/women/42.jpg'
    },
    stats: [
      { name: '关注', value: 28 },
      { name: '粉丝', value: 156 },
      { name: '发布', value: 32 }
    ],
    menuItems: []
  },

  onLoad(options) {
    this.setData({
      menuItems: app.globalData.menuItems
    })
  },

  onReady() {

  },

  onShow() {

  },

  onHide() {

  },

  onUnload() {

  },

  onPullDownRefresh() {

  },

  onReachBottom() {

  },

  onShareAppMessage() {
    // 用户点击分享
    return {
      title: '二手交易小程序',
      path: '/pages/index/index'
    }
  },

  // 点击设置按钮
  onSettingsTap() {
    wx.showModal({
      title: '提示',
      content: '设置功能待开发',
      showCancel: false
    })
  },

  // 点击统计数据
  onStatsTap(e) {
    const index = e.currentTarget.dataset.index
    const stat = this.data.stats[index]
    wx.showToast({
      title: `查看${stat.name}列表功能待开发`,
      icon: 'none'
    })
  },

  // 点击菜单项
  onMenuItemTap(e) {
    const id = e.currentTarget.dataset.id
    const menuItem = this.data.menuItems.find(item => item.id === id)
    wx.showToast({
      title: `${menuItem.name}功能待开发`,
      icon: 'none'
    })
  }
})