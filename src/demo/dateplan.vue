<template>
    <div>
        <!-- 头部 -->
        <van-nav-bar :title="title" left-text="返回" @click-left="goback" left-arrow>
        </van-nav-bar>
        <!-- 提醒栏 -->
        <div class="today">
            <span>今日计划提醒</span>
            <van-notice-bar style="top:15px;"
            :text="todaytext"
            left-icon="https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"
            />
        </div>
        <!-- 选择按钮 -->
        <div class="timebt">
            <van-button type="default" @click="gotodayplan">{{textthree}}</van-button>
            <van-button type="primary" @click="gotodayplan">{{texttwo}}</van-button>
            <van-button type="warning"  @click="gotodayplan">{{textone}}</van-button>
        </div>
    </div>
</template>
<script>
export default{
  data () {
    return {
      title: '日程计划',
      todaytext: '2018年9月6日任务：xxx项目进度需提高，客户急需xxx项目进度需提高，客户急需',
      textone: '今日计划',
      texttwo: '本周计划',
      textthree: '本月计划'
    }
  },
  methods: {
    goback: function () {
      window.history.back()
    },
    gotodayplan: function () {
      this.$router.push({ path: '/todayplan' })
    }
  }
}
</script>
<style scoped>
.today{
    margin-top: 20%;
}
.today span{
    color: rgb(219, 102, 102);
}
.timebt{
    margin-top: 30%;
    width: 100%;
}

.van-button--normal {
    padding: 0 24px;
    font-size: 14px;
    margin: 0 5px;
}
</style>
