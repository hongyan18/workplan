<template>
    <div>
        <div>
            <!-- 头部 -->
            <van-nav-bar title="任务详情" left-text="返回" left-arrow  @click-left="onClickLeft"/>
        </div>
        <div>
            <img src="../assets/方框.png" alt="">
            <!-- 内容 -->
            <div class="contenscript">
               <!-- 这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作..... -->
                 这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.....
                <!-- 内容描述 -->

            </div>
            <div class="contentuser">给自己的</div>
            <div class="contenttime">9月12号 15:54</div>
            <div class="fengeline">
                <!-- 分隔线 -->
            </div>
            <div>
                <!-- 时间 -->

            </div>
            <div>
                <!-- 提醒方式 -->
            </div>
        </div>
        <div>
            <!-- 底部 -->
        </div>
    </div>
</template>
<script>
export default{
  methods: {
    onClickLeft: function () {
      this.$router.push({ path: '/todayplan' })
    }
  }
}
</script>
<style scoped>
.contenscript{
    width: 85%;
    min-height:150px;
    max-height: 300px;
    float: left;
    margin-left: 10%;
    overflow: auto;
    font-size: 15px;
    text-align: left;
    margin-top: 20px;
}
.contentuser{
    float: left;
    margin-left: 10%;
    color: #2c3e50;
    font-size: 14px;
}
.contenttime{
    float: right;
    margin-right: 38%;
    color: #979797;
    font-size: 15px;
}
.fengeline{
    width: 95%;
    height: 1px;
    background-color: #b4b4b4;
    float: left;
    margin-top: 8px;
    margin-left: 10%;
}
</style>
