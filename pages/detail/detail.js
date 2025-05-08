// pages/detail/detail.js
const app = getApp()

Page({

    /**
     * Page initial data
     */
    data: {
        product: null,
        isLoading: true
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad(options) {
        // 根据传入的商品ID获取商品信息
        const productId = parseInt(options.id)
        const product = app.globalData.products.find(item => item.id === productId)
        
        // 模拟网络请求延迟
        setTimeout(() => {
            this.setData({
                product: product,
                isLoading: false
            })
        }, 300)
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

    // 返回上一页
    onBackTap: function() {
        wx.navigateBack({
            delta: 1
        })
    },

    // 联系卖家
    onContactTap: function() {
        if (!this.data.product) return
        
        const sellerId = this.data.product.seller.id
        wx.navigateTo({
            url: `/pages/message/message?sellerId=${sellerId}`
        })
    },

    // 立即购买
    onBuyTap: function() {
        if (!this.data.product) return
        
        wx.showModal({
            title: '确认购买',
            content: `确认购买 ${this.data.product.title}？将跳转到支付页面`,
            success: (res) => {
                if (res.confirm) {
                    wx.showToast({
                        title: '购买功能待开发',
                        icon: 'none'
                    })
                }
            }
        })
    }
})