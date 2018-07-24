import Vue from 'vue'
import App from './index'
const app = new Vue(App)//创建一个vue实例
app.$mount()//当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；
// 假如需要延迟挂载，可以在之后手动调用vm.$mount()方法来挂载
// el属性：el:'#app'
