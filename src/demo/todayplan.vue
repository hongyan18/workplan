<template>
    <div>
         <!-- 头部 -->
        <van-nav-bar :title="title" left-text="返回" @click-left="goback" left-arrow>
        </van-nav-bar>
        <!-- 标题列表 -->
        <div class="content">
            <ul v-for="(item,index) in planlist" :key="index">
                <li>
                    <p class="p1">任务{{index}}</p>
                    <p class="p2">XXXXX计划{{item.content}}</p>
                </li>
            </ul>
        </div>

        <van-button type="default" @click="test">新增今日计划</van-button>
        <van-cell-group style="margin-top:50px;">
            <van-field
                label="总述"
                type="textarea"
                placeholder="请输入今日计划总述"
                rows="1"
                autosize
            />
        </van-cell-group>
           <!-- 第一个弹出层 -->
        <van-popup v-model="show"  position="right">
            <van-nav-bar
                title="新增今日任务"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
            />
            <div>
                <div class="starttime">
                    <div class="title">开始时间：</div>
                    <div @click="showTwoPopup" style="float: left;margin-top: 40px;color:#38f;" >{{startTime}}</div>
                </div>

                  <!-- 第二个弹出层 开始时间-->
                <van-popup v-model="twoPopup" position="bottom" :overlay="false">
                   <van-datetime-picker  @change="getTimeValue" @confirm="close"
                    v-model="currentDate"
                    type="datetime"
                    :min-date="minDate"
                    :max-date="maxDate"
                    />
                </van-popup>
            </div>
            <!-- 结束时间 -->
             <div>
                <div class="endtime">
                    <div class="title">结束时间：</div>
                    <div @click="showTwoPopup" style="float: left;margin-top: 40px;color:#38f;" >{{planendTime}}</div>
                </div>

                  <!-- 第二个弹出层 结束时间-->
                <van-popup v-model="twoPopup" position="bottom" :overlay="false">
                   <van-datetime-picker  @change="getEndTimeValue" @confirm="close"
                    v-model="currentDate"
                    type="datetime"
                    :min-date="minDate"
                    :max-date="maxDate"
                    />
                </van-popup>
            </div>
              <div class="planhead">
                        <van-cell-group>
                        <van-field style="font-size:16px;"
                            v-model="message"
                            label="计划标题:"
                            type="textarea"
                            placeholder="请输入计划标题"
                            rows="1"
                            autosize
                        />
                        </van-cell-group>
                    </div>
                <div class="plancontentitle">任务详情：</div>
                <table class="planconten">
                    <textarea class="plantextrea"  placeholder="请输入任务详情"></textarea>
                </table>
                <!-- 响铃方式 -->
                <van-radio-group v-model="radio">
                   <img src="../assets/naozhong.png" style="width:30px;float: left;margin-top: 9px;"> <span class="tixingspan">提醒方式：</span>
                <van-cell-group>
                    <van-cell title="响铃提醒" clickable @click="radio = '1'">
                    <van-radio name="1" />
                    </van-cell>
                    <van-cell title="手机弹窗" clickable @click="radio = '2'">
                    <van-radio name="2" />
                    </van-cell>
                </van-cell-group>
                </van-radio-group>

           <button class="save">保存</button>
        </van-popup>
    </div>
</template>
<script>
export default{
  data () {
    return {
      message: '',
      radio: '',
      treatheight: [{ maxHeight: 100, minHeight: 50 }],
      title: '今日计划',
      show: false,
      startTime: '2018-09-06 09:20', // 开始时间
      planendTime: '2018-09-06 09:20',
      timevalue: '',
      minHour: 10,
      twoPopup: false, // 开始时间选择
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2020, 12, 29),
      currentDate: new Date(),
      planlist: [{ content: 'XXXXX计划11' }, { content: 'XXXXX计划22' }, { content: 'XXXXX计划11' }, { content: 'XXXXX计划22' }, { content: 'XXXXX计划11' }, { content: 'XXXXX计划22' }, { content: 'XXXXX计划11' }, { content: 'XXXXX计划22' }, { content: 'XXXXX计划11' }, { content: 'XXXXX计划22' }]

    }
  },

  methods: {
    goback: function () {
      window.history.back()
    },
    test: function () {
      this.show = true
    },
    onClickLeft: function () {
      this.show = false
    },
    // 获取时间
    getTimeValue: function (e) {
      this.timevalue = e.getValues()
      // 合并拼接时间
      this.timevalue = this.timevalue[0] + '-' + this.timevalue[1] + '-' + this.timevalue[2] + '-' + this.timevalue[3] + '-' + this.timevalue[4]
      // 将拼接好的时间赋给开始时间
      this.startTime = this.timevalue
      console.log(this.timevalue)
    },
    // 点击开始时间弹出/关闭
    showTwoPopup: function () {
      if (this.twoPopup === false) {
        this.twoPopup = true
      } else {
        this.twoPopup = false
      }
    },
    // 关闭弹窗
    close: function () {
      this.twoPopup = false
    },
    getEndTimeValue: function (e) {
      this.timevalue = e.getValues()
      this.timevalue = this.timevalue[0] + '-' + this.timevalue[1] + '-' + this.timevalue[2] + '-' + this.timevalue[3] + '-' + this.timevalue[4]
      this.planendTime = this.timevalue
    }
  }

}
</script>
<style src="../demo_css/pulic.css">

</style>

<style scoped>
html{
    background-color: #f3f3f3;
}
.content{
    margin-top: 37px;
    margin-left: 1%;
    width: 98%;

    overflow: hidden;/*超出显示滚动条*/
    height: 487px;

}
.content ul{
    list-style: none;
}
.content ul>li{
     overflow: hidden;
     border-bottom:1px solid #6daaff;
}
.content ul>li:hover {
    background-color:#6daaff;
    color:white;
}
.content .p1{
    float: left;
    width: 20%;
}
.content .p2{
    float: left;
    width: 80%;
}
.van-button--normal {
    padding: 0px 62px;
    font-size: 14px;
    top: 9px;
    border-radius: 10px;
    background-color: #6daaff;
    border: 1px solid #6daaff;
}
/*弹出层*/
.van-popup--right {
    top: 50%;
    right: 0;
    bottom: auto;
    left: auto;
    -webkit-transform: translate3d(0,-50%,0);
    transform: translate3d(0,-50%,0);
    width: 100%;
    height: 100%;
}
.starttime{
    font-size: 17px;
    line-height: 1px;
    overflow: hidden;
    height: 60px;
}

.starttime .title{
    float: left;
    margin-top: 38px;
    margin-left: 22%;
}
.endtime{
    font-size: 17px;
    line-height: 1px;
    overflow: hidden;
    height:60px;

}
.endtime .title{
    float: left;
    margin-left: 22%;
    margin-top: 38px;
}
/* 提醒span */
 .tixingspan{
    height: 50px;
    display: block;
    font-size: 20px;
    line-height: 50px;
    text-align: left;
    margin-left: 20px;
    color: red;
}
.planconten{

    height:300px;
    width: 98%;
    border:1px solid #e8e8e8;;
    height: 28px;
    line-height: 28px;
    margin-left:5px;
    border-top: 0;
}
.planhead{
    text-align:left;
    font-size:17px;
}
.plantextrea{
    width: 99%;
    height: 201px;
    border: 0;
}
.save{
    padding: 13px 71px;
    border-radius: 8px;
    background-color: #92c3ff;
    color: white;
    font-size: 18px;
    line-height: 19px;
    border:1px solid #92c3ff;
    margin-top: 43px;
}
.plancontentitle{
    height: 40px;
    float: left;
    line-height: 40px;
    padding-left: 14px;
    color: #545454;
}
</style>
