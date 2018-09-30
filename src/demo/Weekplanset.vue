<template>
    <div>
        <van-nav-bar :title="title" left-text="返回" @click-left="goback"  right-text="保存" @click-right="onsave" left-arrow>
        </van-nav-bar>
         <div class="input_content">
             <textarea placeholder="请输入本周计划内容"></textarea>
        </div>
        <div class="titlediv">
            <label for="">标题：</label>
            <input type="text" placeholder="请输入计划标题">
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
             <div style="float:left;margin-left: 16px;width:50px;color:#38f;" @click="coloeendtime">取消</div>
             <div style="float:left;width:50%;">结束时间</div>
             <div style="float:right;margin-right: 16px;width:50px;color:#38f;"  @click="coloeendtime">确定</div>
        </div>
        <seedtime ref="child" v-on:returnparent="seedAlterParente"></seedtime>
        </van-popup>
          <div class="remind">
            <p class="p1">到期提醒</p>
            <img src="../assets/jiantou.png" alt="" @click="showRemindPopup">
            <p class="p2">{{remindpage}}</p>

        </div>
         <!-- 到期提醒弹窗 -->
        <van-popup v-model="showRemind" position="right" :overlay="false">
            <van-nav-bar :title="remindPopup" left-text="返回" @click-left="goWeekSet"  left-arrow>
            </van-nav-bar>
            <div class="radio" @click="radioIsShowClk">
                <p v-if="radioIsShow===true" style="color:#8abbff;">不提醒</p>
                  <p v-else>不提醒</p>
                <img src="../assets/dagou.png" v-show="radioIsShow" alt="">
            </div>
            <div class="radiolistdiv">
                <div class="radiolist" v-for="(item, index) in remindlist" :key="index"  @click="pitchon(index)" >
                    <p class="" v-if="item.show===true" style="color:#8abbff;">{{item.title}}</p>
                    <p class="" v-else >{{item.title}}</p>
                    <img src="../assets/dagou.png" v-show="item.show" alt="">
                </div>
            </div>
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
      endtimePopup: false,
      remindpage: '截止前一天',
      showRemind: false,
      radioIsShow: false,
      remindlist: [{ title: '', show: 'false' }],
      remindPopup: '到期提醒'

    }
  },
  created: function () {
    // 默认提前15分钟
    this.remindlist[0].show = true
    this.remindpage = '截止前8小时'
    // 请求数据赋值
    this.getRequest('/static/static1.json').then(res => {
      console.log(res)
      //   赋值
      this.remindlist = res.data.WeekSet
    })
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
    //
    /* 弹出到期提醒窗 */
    showRemindPopup: function () {
      this.showRemind = true
    },
    radioIsShowClk: function () {
      let th = this
      // 到期提醒的全部为false
      this.remindlist.forEach(function (item) {
        item.show = false
      })
      // 首先是默认选择“不提醒”
      if (th.radioIsShow === true) {
        // 到期提醒的全部为false
        this.remindlist.forEach(function (item) {
          item.show = false
        })
      } else {
        th.radioIsShow = true
        th.remindpage = '不提醒'
      }
    },
    goWeekSet: function () {
      this.showRemind = false
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
    },
    /* 到期时间提前提醒 */
    pitchon: function (e) {
      let th = this
      // 当点击到期提前提醒是传递index进来  将默认选择设置为false
      if (th.remindlist[e].show === false) {
        th.remindlist.forEach(function (item) {
          th.radioIsShow = false
          item.show = false
        })
        th.radioIsShow = false
        // 将所有的设置为false  最后以index为索引设置选择
        th.remindlist[e].show = true
        th.remindpage = th.remindlist[e].title
      } else {
        th.remindlist[e].show = false
      }
    },
    // 保存
    onsave: function () {
      alert('保存成功')
    }
  }
}
</script>
<style scoped>
.input_content{
    width: 100%;
    height: 227px;
}
.titlediv{
    margin-top: 10px;

    height: 40px;
    text-align: left;
    border-bottom: 1px solid #f2f2f2;
}
.titlediv label{
    line-height: 40px;
    margin-left: 10px;
}
.titlediv input{
    height: 35px;
    width: 80%;
    border: 1px solid #f1f1f1;
    border: none;
    border-radius: 3px;
}
.titlediv input:focus{border-color: #66afe9;
outline: 0;
-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
}
.input_content textarea{
    width: 96%;
    height: 200px;
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
    border-bottom: 1px solid #efefef;
}
.remind{
    height: 40px;
    width: 100%;
    background-color:#fff;
    border-bottom: 1px solid #e6e6e6;
}
.remind .p1{
    text-align: left;
    line-height: 40px;
    width: 23%;
    margin: 0;
    padding: 0 0 0 10px;
}
.remind .p2{
    float: right;
    margin-top: -32px;
    margin-right: 13%;

}
.remind img{
    height: 24px;
    width: 40px;
    float: right;
    margin-top: -32px;
    margin-right: 6px;
}
/* 重写vant 样式*/
.van-popup--right {
    top: 50%;
    right: 0;
    bottom: auto;
    left: auto;
    -webkit-transform: translate3d(0,-50%,0);
    transform: translate3d(0,-50%,0);
    width: 100%;
    height: 100%;
    background:#f7f7f7
}
.radio{
    margin-top: 23px;
    height: 40px;
    background: #fff;
    overflow: hidden;
}
.radio p{
    line-height: 10px;
    margin-left: 10px;
    float: left;
}
.radio img{
    width: 36px;
    float: right;
}
.radiolistdiv{
    margin-top: 10px;
}
.radiolist{
    height: 40px;
    background: #fff;
    overflow: hidden;
    border-bottom: 1px solid #e6e6e6;
}
.radiolist p{
    line-height: 10px;
    margin-left: 10px;
    float: left;
}
.radiolist img{
    width: 36px;
    float: right;
}
</style>
