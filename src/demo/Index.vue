<template>
    <div>
        <!-- 头部 -->
        <div class="header">
            <div class="nav">
                <div class="nav_bar nav_bar_title">主页</div>
            </div>
        </div>
        主页面
        <!-- 底部菜单 -->
        <van-tabbar v-model="active">
        <van-tabbar-item icon="records" @click="godateplan">日程计划</van-tabbar-item>
        <van-tabbar-item icon="chat" @click="test">记事本</van-tabbar-item>
        <van-tabbar-item icon="contact">会议记录</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default{
  data () {
    return {
      title: '主页',
      titleleftbak: false,
      active: 0,
      test1: '测试是否能传递',
      endtime: '2018-9-25 18:30:00', // 传递的结束时间
      // TXnumber: 1, // 提醒次数
      // ISRemind: true,
      Remindfun: { planendtime: '', RdNumber: '', ISRemind: '' }

    }
  },
  created: function () {
    // 设置定时器  设置执行的函数以及 刷新的时间
    setInterval(this.ceshi, 1000)
  },
  mounted () {
    console.log('页面加载完成')
    // window.setInterval(alert(1), 1000)
    this.getRequest('/static/static1.json').then(res => {
      // console.log(res)
      //   赋值
      // console.log(res)
    })
  },
  methods: {
    // 定好方法 在页面创建加载时使用定时器进行定时刷新
    ceshi: function () {
      // 请求获取用户设置的预定时间
      this.getRequest('/static/static1.json').then(res => {
        // 获取相关数据
        this.Remindfun = res.data.Remind
        this.endtime = res.data.Remind.planendtime
        // this.remind(this.Remindfun.planendtime, this.Remindfun.RdNumber, this.Remindfun.ISRemind))
        // console.log(this.Remindfun)
      })
      // 计算时间差
      let nowTime = new Date(new Date()) // 当前时间
      let endTime = new Date(new Date(this.endtime)) // 任务结束时间 要到毫秒
      let t = endTime.getTime() - nowTime.getTime() // 间隔毫秒
      let min = Math.floor((t / 60000) % 60)
      min = min < 10 ? '0' + min : min
      // 时间计算第一个出现的不是分（number类型的，而是string类型的 所以判断是否为正确的分数）
      if (typeof min === 'number') {
        alert('当前倒计时为:' + min + '分')
        return min
      }
      console.log(min)
    },
    godateplan: function () {
      this.$router.push({ path: '/dateplan' })
    },
    test: function () {
      this.remind(this.endtime, this.TXnumber, this.ISRemind)
    }

  }
}
</script>
 <style src="../demo_css/pulic.css">
