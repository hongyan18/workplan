<template>
    <div>
        <div>
            <!-- 头部 -->
            <van-nav-bar title="任务详情" left-text="返回" left-arrow  @click-left="onClickLeft"/>
        </div>
        <div class="content">
            <img src="../assets/方框.png" v-show="achieve" alt="" @click="select">
            <img v-if="achieve===false" src="../assets/选择-方框.png" @click="selecttwo" alt="">
            <!-- 内容 -->
            <div class="contenscript">

                <textarea>这一周将完成十个PSD的切图工作.... 这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.... 这一周将完成十个PSD的切图工作.这一周将完成十个PSD的切图工作.... 这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.... 这一周将完成十个PSD的切这一周将完成十个PSD的切图工作.... 这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.... 这一周将完成十个PSD的切这一周将完成十个PSD的切图工作.... 这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作.... 这一周将完成十个PSD的切....这一周将完成十个PSD的切图工作.... 这一周将完成十个PSD的切图工作.....这一周将完成十个PSD的切图工作....</textarea>

                <!-- 内容描述 -->

            </div>
            <div class="contentuser">给自己的</div>
            <div class="contenttime">9月12号 15:54</div>
            <div class="fengeline"></div>
            <div class="time">
                <img src="../assets/time.png" alt="">
                <span>{{endtime}}&nbsp;&nbsp; 截止</span>
                <!-- 时间 -->

            </div>
            <div class="fengeline"></div>
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
  data () {
    return {
      achieve: true, // true标记为未完成
      endtime: '9月19号  18:00'
    }
  },
  methods: {
    onClickLeft: function () {
      this.$router.push({ path: '/todayplan' })
    },
    select: function () {
      this.achieve = false
    },
    selecttwo: function () {
      this.$dialog.alert({
        showCancelButton: true,
        message: '该任务已完成，是否要将其标记为未完成吗？'
      }).then(() => { // 点击确认后执行方法
        this.achieve = true // true标记为未完成
      }).catch(() => { // 点击取消后执行方法

      })
    }
  }
}
</script>
<style scoped>
.contenscript{
    width: 85%;
    min-height:200px;
    max-height: 300px;
    margin-left: 35px;
    overflow: auto;
    font-size: 15px;
    text-align: left;
    margin-top: 20px;
}
.contenscript textarea{
    width: 100%;
    height: 200px;
    border: none;
    overflow: auto;
}
.contentuser{
    float: left;
    margin-left: 10%;
    color: #5987b4;;
    font-size: 14px;
    margin-top: 25px;
}
.contenttime{
    float: right;
    margin-right: 38%;
    color: #979797;
    font-size: 15px;
    margin-top: 25px;
}
.fengeline{
    width: 95%;
    height: 1px;
    background-color: #e5e4e4;;
    float: left;
    margin-top: 8px;
    margin-left: 10%;
}
.content img{
    width: 30px;
    height: 30px;
    float: left;
}
.time{
    margin-top: 61px;
    text-align: left;
}
.time span{
    line-height: 34px;
    margin-left: 10px;
}

</style>
