// app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('登录成功', res)
      }
    })
  },
  globalData: {
    userInfo: null,
    categories: [
      { id: 1, name: '手机数码', icon: 'mobile-alt', color: '#3498db', bgColor: '#f0f7ff' },
      { id: 2, name: '服饰鞋包', icon: 'tshirt', color: '#e84393', bgColor: '#fff0f5' },
      { id: 3, name: '家居日用', icon: 'home', color: '#00b894', bgColor: '#f0fff4' },
      { id: 4, name: '图书文具', icon: 'book', color: '#fdcb6e', bgColor: '#fff9f0' },
      { id: 5, name: '游戏设备', icon: 'gamepad', color: '#6c5ce7', bgColor: '#f0f0ff' },
      { id: 6, name: '运动户外', icon: 'bicycle', color: '#0984e3', bgColor: '#f0faff' }
    ],
    products: [
      {
        id: 1,
        title: 'iPhone 12 Pro 256GB 深空灰 九成新',
        price: 4999,
        location: '上海',
        time: '2天前',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
        description: '2021年1月购买，使用8个月，无磕碰无进水，电池健康度92%。\n全套配件（充电头、数据线、耳机、说明书、包装盒）都在，送一个全新手机壳。\n因换新机出售，可当面交易验机，上海地区可面交，其他地区可闲鱼寄送。',
        parameters: '存储容量：256GB / 颜色：深空灰 / 购买渠道：官方旗舰店',
        views: 328,
        seller: {
          id: 1,
          name: '陈先生',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          rating: 4.5
        }
      },
      {
        id: 2,
        title: 'Nike Air Jordan 1 美国代购 全新',
        price: 1299,
        location: '北京',
        time: '1天前',
        image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
      },
      {
        id: 3,
        title: '索尼 PlayStation 5 游戏机 保修内',
        price: 3800,
        location: '广州',
        time: '3天前',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 4,
        title: '村上春树《挪威的森林》精装本 书角微磨',
        price: 35,
        location: '深圳',
        time: '4天前',
        image: 'https://images.unsplash.com/photo-1544117519-31a4a51f8cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
      },
      {
        id: 5,
        title: 'Polaroid 宝丽来 OneStep 2 拍立得相机',
        price: 499,
        location: '成都',
        time: '5天前',
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 6,
        title: 'IKEA 宜家 POÄNG 扶手椅 自取',
        price: 350,
        location: '杭州',
        time: '1周前',
        image: 'https://images.unsplash.com/photo-1486946255434-2466348c2166?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
      }
    ],
    conversations: [
      {
        id: 1,
        user: {
          name: '陈先生',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        lastMessage: '您好，iPhone还在出售吗？可以便宜一点吗？',
        time: '14:23'
      },
      {
        id: 2,
        user: {
          name: '李女士',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        lastMessage: '好的，明天下午方便面交吗？',
        time: '昨天'
      },
      {
        id: 3,
        user: {
          name: '王先生',
          avatar: 'https://randomuser.me/api/portraits/men/68.jpg'
        },
        lastMessage: '请问这个相机有没有使用过？',
        time: '周二'
      },
      {
        id: 4,
        user: {
          name: '张女士',
          avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
        },
        lastMessage: '收到货了，非常满意，谢谢！',
        time: '上周'
      }
    ],
    menuItems: [
      { id: 1, name: '我的订单', icon: 'shopping-bag' },
      { id: 2, name: '我的收藏', icon: 'heart' },
      { id: 3, name: '我的商品', icon: 'box' },
      { id: 4, name: '钱包', icon: 'wallet' },
      { id: 5, name: '地址管理', icon: 'address-card' },
      { id: 6, name: '联系客服', icon: 'headset' }
    ]
  }
}) 