<template>
    <div>
        <van-nav-bar :title="title" left-text="返回" @click-left="goback" left-arrow>
        </van-nav-bar>
         <div class="input_content">
             <textarea placeholder="请输入本周计划内容"></textarea>
        </div>
        <div class="starttime">
            <van-icon name="clock" style="float: left; left: 13%;line-height: 40px;"   color="black"  size="20px" />
            <div class="title">开始时间：<span style="color:#33a8ff;" @click="showStartPopup">{{startTime}}</span></div>
        </div>
        <div class="endtime">
            <van-icon name="clock" style="float: left; left: 13%;line-height: 40px;"   color="black"  size="20px" />
            <div class="title">结束时间：<span style="color:#33a8ff;" @click="showEndtPopup">{{endtime}}</span></div>
        </div>
       <!-- 开始时间 -->
        <van-popup v-model="starttimePopup" position="bottom" :overlay="false">
        <div style="overflow: hidden;">
             <div style="float:left;margin-left: 16px" @click="coloetime">取消</div>
             <div style="float:right;margin-right: 16px"  @click="coloetime">确定</div>
        </div>
        <seedtime ref="child" v-on:returnparent="seedAlterParents"></seedtime>
        </van-popup>
        <!-- 结束时间s -->
         <van-popup v-model="endtimePopup" position="bottom" :overlay="false">
        <div style="overflow: hidden;">
             <div style="float:left;margin-left: 16px" @click="coloeendtime">取消</div>
             <div style="float:right;margin-right: 16px"  @click="coloeendtime">确定</div>
        </div>
        <seedtime ref="child" v-on:returnparent="seedAlterParente"></seedtime>
        </van-popup>

        <div class="save">
            <button>保存</button>
        </div>
    </div>
</template>
<script>
import seedtime from './time.vue'
export default{
  components: { seedtime },
  data () {
    return {

      currentDate: new Date(),
      minDate: new Date(2013, 12, 1),
      title: '新增本周计划',
      contenttype: false,
      startTime: '2018-09-17',
      endtime: '2018-10-17',
      starttimePopup: false,
      endtimePopup: false

    }
  },
  methods: {
    // 接收子组件 time传来的值 改变开始时间 startTime
    seedAlterParents: function (data) {
      this.startTime = data
    },
    // 接收子组件 time传来的值 改变借宿时间 endTime
    seedAlterParente: function (data) {
      this.endtime = data
    },
    // 关闭开始时间子组件
    coloetime: function () {
      this.starttimePopup = false
    },
    coloeendtime: function () {
      this.endtimePopup = false
    },
    goback: function () {
      window.history.back()
    },
    /* 弹出开始日期选择控件 */
    showStartPopup: function () {
      if (this.starttimePopup === false) {
        this.starttimePopup = true
      } else {
        this.starttimePopup = false
      }
    },
    // 弹出结束日期选择控件
    showEndtPopup: function () {
      if (this.endtimePopup === false) {
        this.endtimePopup = true
      } else {
        this.endtimePopup = false
      }
    }
  }
}
</script>
<style scoped>
.input_content{
    width: 100%;
    height: 227px;
}

.input_content textarea{
    width: 96%;
    height: 227px;
    padding: 0 2%;
    border:none;
    overflow: auto;
    border-top: 11px solid #efefef;
    border-bottom: 11px solid #efefef;
    border-top-left-radius: 31px;
    border-top-right-radius: 31px;
    border-bottom-left-radius: 31px;
    border-bottom-right-radius: 31px;
    margin-top: 10px;
}
.save{
    margin-top:50px;
}
.save button{
    margin-top: 33px;
    width: 127px;
    height: 44px;
    background: #33a8ff;
    border-radius: 8px;
    border: 1px solid #33a8ff;
    color: white;
}
.starttime{
    height: 40px;
    width: 100%;
    background-color: #fff;
    margin-top: 50px;
}
.title{
    line-height: 40px;
    float: left;
    margin-left: 14%;
}
.endtime{
    height: 40px;
    width: 100%;
    background-color: #fff;
}
</style>
