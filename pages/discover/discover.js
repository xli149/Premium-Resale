// pages/discover/discover.js
const app = getApp()

Page({

    /**
     * Page initial data
     */
    data: {
        recommendProducts: []
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad(options) {
        // 获取全局产品数据并随机展示
        const products = app.globalData.products;
        
        // 随机排序产品
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        
        this.setData({
            recommendProducts: shuffled
        });
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

    // 点击商品进入详情页
    onProductTap(e) {
        const productId = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: `/pages/detail/detail?id=${productId}`
        });
    }
})