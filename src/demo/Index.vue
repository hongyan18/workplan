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
        <van-tabbar-item icon="chat">记事本</van-tabbar-item>
        <van-tabbar-item icon="contact" @click="gotime">会议记录</van-tabbar-item>
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
      endtime: '2018-9-25 18:30:00', // 传递的结束时间
      // TXnumber: 1, // 提醒次数
      // ISRemind: true,
      Remindfun: { planendname: '', minute: '', ISRemind: '' }
    }
  },
  created: function () {
    // 设置定时器  执行的main.js中的函数 刷新的时间30秒

    // setInterval(this.remind, 1000)
  },
  methods: {

    godateplan: function () {
      this.$router.push({ path: '/dateplan' })
    },
    gotime: function () {
      this.$router.push({ path: '/Time' })
    }
  }
}
</script>
 <style src="../demo_css/pulic.css">
