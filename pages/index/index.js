// pages/index/index.js
const app = getApp()

Page({

    /**
     * Page initial data
     */
    data: {
        searchValue: '',
        categories: [],
        products: []
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad(options) {
        this.setData({
            categories: app.globalData.categories,
            products: app.globalData.products
        })
    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady() {

    },

    /**
     * Lifecycle function--Called when page show
     */
    onShow() {

    },

    /**
     * Lifecycle function--Called when page hide
     */
    onHide() {

    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload() {

    },

    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh() {

    },

    /**
     * Called when page reach bottom
     */
    onReachBottom() {

    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage() {

    },

    onSearchInput: function(e) {
        this.setData({
            searchValue: e.detail.value
        })
    },

    onSearchConfirm: function(e) {
        // 实际应用中这里会进行搜索过滤
        wx.showToast({
            title: `搜索: ${this.data.searchValue}`,
            icon: 'none'
        })
    },

    // 点击类别
    onCategoryTap: function(e) {
        const categoryId = e.currentTarget.dataset.id
        const category = this.data.categories.find(item => item.id === categoryId)
        wx.showToast({
            title: `选择了分类: ${category.name}`,
            icon: 'none'
        })
    },

    // 点击商品进入详情页
    onProductTap: function(e) {
        const productId = e.currentTarget.dataset.id
        wx.navigateTo({
            url: `/pages/detail/detail?id=${productId}`
        })
    },

    // 点击发布按钮
    onPublishTap: function() {
        wx.showModal({
            title: '提示',
            content: '发布新商品功能待开发',
            showCancel: false
        })
    }
})