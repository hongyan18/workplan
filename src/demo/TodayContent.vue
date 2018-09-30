<template>
    <div>
        <div>
            <!-- 头部 -->
            <van-nav-bar title="任务详情" left-text="返回" left-arrow  right-text="删除" @click-right="ondelete"  @click-left="onClickLeft"/>
        </div>
        <div class="content">
            <img :src="srcif" v-show="achieve" alt="" @click="select">
            <img v-if="achieve===false" :src="srcelse" @click="selecttwo" alt="">
            <!-- 内容 -->
            <div class="contenscript">
                <textarea v-model="content"></textarea>
                <!-- 内容描述 -->
            </div>
            <div class="writertime">
                <div class="contentuser">给自己的</div>
                 <div class="contenttime">{{contenttime}}</div>
            </div>
            <div class="titlediv">
                <img :src="titledivimg" alt="" style="margin-top: 5px;float: left;width: 30px;">
                <input type="text" :value="titlevalue" readonly>
            </div>

            <div class="time">
                <img src="../assets/time.png" alt="">
                <span>{{endtime}}&nbsp;&nbsp; 截止</span>
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
  data () {
    return {
      srcif: '',
      srcelse: '',
      content: '',
      contenttime: '',
      achieve: true, // true标记为未完成
      endtime: '',
      titlevalue: '',
      titledivimg: '/static/image/标题.png'
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
    },
    // 删除
    ondelete: function () {
      this.$dialog.alert({
        showConfirmButton: true,
        showCancelButton: true,
        message: '是否删除？'
      }).then(() => {
        // 点击确认后执行方法
        alert('点击了确认')
      }).catch(() => {
      // 点击取消后执行的方法
      })
    }
  },
  created () {
    this.getRequest('/static/static1.json').then(res => {
      console.log(res)
      //   赋值
      this.titlevalue = res.data.TodayContent.titlevalue
      this.srcif = res.data.TodayContent.srcif // 未完成icon
      this.srcelse = res.data.TodayContent.srcelse // 完成icon
      this.content = res.data.TodayContent.content // 内容
      this.contenttime = res.data.TodayContent.contenttime // 内容发表时间
      this.endtime = res.data.TodayContent.endtime // 截止时间
    })
  }
}
</script>
<style scoped>
.writertime{
    height: 40px;
}
.writertime .contentuser{
    float: left;
    margin-left: 10%;
    color: #5987b4;;
    font-size: 14px;
    line-height: 40px;

}
.writertime .contenttime{
    float: right;
    margin-right: 18%;
    color: #979797;
    font-size: 15px;
    line-height: 40px;
}
.titlediv{
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
}

.titlediv input{
    border:none;
    width: 80%;
    height: 38px;
}
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
    height: 261px;
    border: none;
    overflow: auto;
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
    height: 40px;
    line-height: 40px;
    text-align: left;
    border-bottom: 1px solid #f5f5f5;
}
.time img{
    width: 30px;
    margin-top: 5px;
}
.time span{
    line-height: 34px;
    margin-left: 9%;
}

</style>
