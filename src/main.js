import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import { router } from './router'
import store from './Vuex/store'

import { getRequest, postRequest } from './libs/api'// 导入
Vue.prototype.getRequest = getRequest// 注入到vue对象
Vue.prototype.postRequest = postRequest// 注入到vue对象

Vue.use(Vant)
Vue.config.productionTip = false

// 定义全局alert提醒
Vue.prototype.remind = function () {
  let rmtime = 0

  // 定好方法 在页面创建加载时使用定时器进行定时刷新   表中应该增加提醒次数
  rmtime = getRequest('/static/static1.json').then(res => {
    rmtime = res.data.Remindday.minute
    if (rmtime < 16) { // 提前15分钟提醒
      alert('距离任务' + rmtime + '分钟')
    }
    if (rmtime > 15 && rmtime < 61) { // 提前一个小时提醒
      alert('倒计时' + rmtime + '分钟')
    }
    if (rmtime > 60 && rmtime < 181) { // 提前三个小时提醒
      let oclok = Math.floor(rmtime / 60)
      rmtime = rmtime - (oclok * 60)
      alert('倒计时' + oclok + '小时' + rmtime + '分钟')
    }
    if (rmtime > 180 && rmtime < 60 * 24) { // 提前三个小时提醒
      let oclok = Math.floor(rmtime / 60)
      rmtime = rmtime - (oclok * 60)
      alert('倒计时' + oclok + '小时' + rmtime + '分钟')
    }
    return res.data.Remindday.minute
  })
  return rmtime
  /*
    1请求后台，返回计划表中对应的计划任务
    2根据返回的数据计算与当前时间的间隔
    3当时间间隔到规定时间进行弹窗提醒（提醒：设置间隔时间、提醒次数）

    4、看看是否能满足：vue中的生命周期在页面为挂载时开始执行该方法，一直到页面注销

  */

  // let self = this
  // // let number = 0
  // console.log(planendtime)
  // console.log(RdNumber)
  // console.log(ISRemind)
  // //  let timer =
  // setInterval(function () {
  //   let nowTime = new Date(new Date()) // 当前时间
  //   let endTime = new Date(new Date(planendtime)) // 任务结束时间 要到毫秒
  //   let t = endTime.getTime() - nowTime.getTime() // 间隔毫秒
  //   let min = Math.floor((t / 60000) % 60)
  //   // let sec = Math.floor((t / 1000) % 60)
  //   min = min < 10 ? '0' + min : min
  //   self.content = min // 间隔时间
  //   // 返回时间
  //   console.log(min)
  //   return min

  // if (min < 4) {
  //   alert('距离XX任务还有' + min + '分' + sec + '秒')
  // }

  // if (min > 0 && number === 0) {
  //   console.log('提醒间隔时间为:' + min + '分' + sec + '秒')
  //   // 到时间提醒
  //   alert('提醒间隔时间为:' + min + '分' + sec + '秒')
  //   number++
  // }

  // else {
  //   clearInterval(timer) // 停止计算
  // }
  // })
}

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
