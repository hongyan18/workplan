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
      active: 0
    }
  },
  methods: {
    godateplan: function () {
      this.$router.push({ path: '/dateplan' })
    }
  }
}
</script>
 <style src="../demo_css/pulic.css">
