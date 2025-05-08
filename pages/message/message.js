// pages/message/message.js
const app = getApp()

Page({

    /**
     * Page initial data
     */
    data: {
        conversations: []
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad(options) {
        // 获取消息列表
        this.setData({
            conversations: app.globalData.conversations
        })
        
        // 如果有卖家ID参数，跳转到对应的聊天窗口
        if (options.sellerId) {
            const sellerId = parseInt(options.sellerId)
            this.openChat(sellerId)
        }
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

    // 打开聊天窗口
    onConversationTap: function(e) {
        const conversationId = e.currentTarget.dataset.id
        this.openChat(conversationId)
    },

    // 打开聊天窗口的通用方法
    openChat: function(id) {
        const conversation = this.data.conversations.find(item => item.id === id)
        if (!conversation) return
        
        wx.showModal({
            title: '提示',
            content: `与${conversation.user.name}的聊天窗口功能待开发`,
            showCancel: false
        })
    }
})