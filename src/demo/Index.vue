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
      TXnumber: 1, // 提醒次数
      ISRemind: true

    }
  },
  methods: {
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
