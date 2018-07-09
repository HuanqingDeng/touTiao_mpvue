import Vue from 'vue'
import App from './App'
// import './weui.css'
import navList from './data/navList.vue'
// import ElementUI from 'element-ui'
// import "element-ui/lib/theme-chalk/index.css"
// Vue.use(ElementUI);

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)

Vue.prototype.NavList = navList
app.$mount()

Vue.prototype.getList=function(){
  wx.showLoading({
    title:'加载中'
  })
//   this.$http.get('sell#!method=get').then((res)=>{
//     this.restaurant = res.data.data.restaurant;  //商家数据
//     this.goods = res.data.data.goods; //商品数据
//     this.seller = res.data.data.seller; //商家详细数据
//     this.ratings= res.data.data.ratings //评论数据
//     wx.hideLoading();
//   }).catch((e)=>{
//   console.log(e)
// })

}
export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main','pages/addNav/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#FF4040',
      navigationBarTitleText: '今日头条',
      navigationBarTextStyle: '#ffffff'
    }
  }
}
