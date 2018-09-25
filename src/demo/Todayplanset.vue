<template>
    <div class="container">
        <van-nav-bar :title="title" left-text="返回" @click-left="goback" left-arrow>
        </van-nav-bar>
        <textarea class="setcontent" placeholder="请点击输入文字">

        </textarea>

        <!-- 日期控件 -->
        <div class="starttime">
            <van-icon name="clock" style="float: left; left: 13%;line-height: 40px;"   color="black"  size="20px" />
            <div class="title">开始时间：<span style="color:#33a8ff;" @click="showStartPopup">{{startTime}}</span></div>
        </div>
        <div class="endtime">
            <van-icon name="clock" style="float: left; left: 13%;line-height: 40px;"   color="black"  size="20px" />
            <div class="title">结束时间：<span style="color:#33a8ff;" @click="showEndtPopup">{{endtime}}</span></div>
        </div>
            <!-- 第一个弹出层 开始时间-->
            <van-popup v-model="starttimePopup" position="bottom" :overlay="false">
                <van-datetime-picker title="选择开始时间"  @change="getStartTimeValue" @cancel="closestart" @confirm="closestart"
                v-model="currentDate"
                type="datetime"
                :min-date="minDate"
                :max-date="maxDate"
                />
            </van-popup>
            <!-- 第2个弹出层 结束时间-->
            <van-popup v-model="endtimePopup" position="bottom" :overlay="false">
                <van-datetime-picker title="选择结束时间"  @change="getEndTimeValue" @cancel="closeend" @confirm="closeend"
                v-model="currentDate"
                type="datetime"
                :min-date="minDate"
                :max-date="maxDate"
                />
            </van-popup>
        <div class="remind">
            <p class="p1">到期提醒</p>
            <p class="p2">{{remindpage}}</p>
            <img src="../assets/jiantou.png" alt="" @click="showRemindPopup">
        </div>
            <!-- 到期提醒弹窗 -->
            <van-popup v-model="showRemind" position="right" :overlay="false">
                <van-nav-bar :title="remindPopup" left-text="返回" @click-left="goTodaySet"  left-arrow>
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
            <div class="btndiv">
                <button>保存</button>
            </div>

    </div>
</template>
<script>
export default{
  data: function () {
    return {
      title: '新增今日计划',
      remindPopup: '到期提醒',
      currentDate: '',
      minDate: new Date(2013, 12, 1),
      maxDate: new Date(2025, 12, 1),
      startTime: '2018-9-17  16:42',
      endtime: '2018-10-17  16:42',
      starttimePopup: false, /* 初始弹窗隐藏 */
      endtimePopup: false,
      showRemind: false,
      radioIsShow: false,
      myDate: '',
      month: '',
      day: '',
      minute: '',
      newDate: '',
      remindlist: [{ title: '', show: 'false' }],
      remindpage: '',
      te: 1

    }
  },
  /* 页面加载前获取时间 */
  created: function () {
    this.getNewTime()
    // 默认提前15分钟
    this.remindlist[0].show = true
    this.remindpage = '截止前15分钟'
    // 请求数据赋值
    this.getRequest('/static/static1.json').then(res => {
      console.log(res)
      //   赋值
      this.remindlist = res.data.Todayplanset
    })
  },
  methods: {
    /* 获取当前时间 */
    getNewTime: function () {
      this.myDate = new Date()
      this.year = this.myDate.getFullYear()// 获取年
      this.month = this.myDate.getMonth() + 1 // js中是从0开始所以要加1
      this.day = this.myDate.getDate() // 获取当前日期（几号）
      this.hour = this.myDate.getHours() // 获取当前时间点（几点）
      this.minute = this.myDate.getMinutes() // 获取当前分钟
      this.nowDate = this.year + '-' + this.month + '-' + this.day + '  ' + this.hour + ':' + this.minute
      this.startTime = this.nowDate
      /* 结束时间 默认当前时间+1day */
      this.day = this.day + 1
      this.nowDate = this.year + '-' + this.month + '-' + this.day + '  ' + this.hour + ':' + this.minute
      this.endtime = this.nowDate
    //   return this.nowDate
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
    /* 开始时间获取选中时间1 */
    getStartTimeValue: function (e) {
      this.timevalue = e.getValues()
      // 合并拼接时间2
      this.timevalue = this.timevalue[0] + '-' + this.timevalue[1] + '-' + this.timevalue[2] + '    ' + this.timevalue[3] + ':' + this.timevalue[4]
      // 将拼接好的时间赋给开始时间3
      this.startTime = this.timevalue
      console.log(this.timevalue)
    },
    /* 关闭日期控件4 */
    closestart: function () {
      this.starttimePopup = false
    }, /*  弹出结束日期选择控件 */
    showEndtPopup: function () {
      if (this.endtimePopup === false) {
        this.endtimePopup = true
      } else {
        this.endtimePopup = false
      }
    },
    getEndTimeValue: function (e) {
      this.timevalue = e.getValues()
      // 合并拼接时间2
      this.timevalue = this.timevalue[0] + '-' + this.timevalue[1] + '-' + this.timevalue[2] + '    ' + this.timevalue[3] + ':' + this.timevalue[4]
      // 将拼接好的时间赋给开始时间3
      this.endtime = this.timevalue
      console.log(this.timevalue)
    },
    closeend: function () {
      this.endtimePopup = false
    },
    /* 弹出到期提醒窗 */
    showRemindPopup: function () {
      this.showRemind = true
    },
    goTodaySet: function () {
      this.showRemind = false
    },
    test: function () {
      alert(this.radioIsShow)
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
    }
  }
}
</script>
<style scoped>
.container{
    background-color: #efefef;
    width: 100%;
    height: 400px;
}
.setcontent{
    width: 96%;
    padding: 0px 2%;
    min-height: 200px;
    max-height:400px;
    background-color: #fff;
    border: none;
    font-size: 15px;
    margin-top: 10px;
    color: black;
}
.starttime{
    height: 40px;
    width: 100%;
    background-color: #fff;
    margin-top: 10px;
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
.remind{
    margin-top: 10px;
    height: 40px;
    width: 100%;
    background-color:#fff;
    border-bottom: 1px solid #e6e6e6;
}
.remind .p1{
    text-align: left;
    line-height: 40px;
    margin-left: 10px;
    width: 23%;
}
.remind .p2{
    float: left;
    margin-top: -49px;
    margin-left: 60%;

}
.remind img{
    height: 24px;
    width: 40px;
    float: right;
    margin-top: -48px;
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
button{
    margin-top: 63px;
    width: 127px;
    height: 44px;
    background: #33a8ff;
    border-radius: 8px;
    border: 1px solid #33a8ff;
    color: white;
    float: left;
    margin-left: 40%;
}
.btndiv{
    width: 100%;
    height: 120px;
    overflow: hidden;
}
</style>
