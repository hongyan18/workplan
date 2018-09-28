<template>
    <div>
        <!-- 头部 -->
        <van-nav-bar :title="title" left-text="返回" @click-left="goback" left-arrow>
        </van-nav-bar>
        <!-- 提醒栏 -->
        <div class="today">
            <div class="todayhead">
                <img :src="imgtixing" alt="">
                 <p>近期计划提醒</p>
            </div>
            <p class="todaycont">{{content}}</p>
            <p class="time">截止时间：{{time}}</p>
        </div>
        <!-- 选择按钮 -->
        <div class="timebt">
            <button class="defalut">{{textthree}}</button>
            <button class="primary" @click="goweekplan">{{texttwo}}</button>
            <button class="warning" @click="gotodayplan" >{{textone}}</button>
            <!-- <van-button type="default" @click="gotodayplan">{{textthree}}</van-button>
            <van-button type="primary" @click="gotodayplan">{{texttwo}}</van-button>
            <van-button type="warning"  @click="gotodayplan">{{textone}}</van-button> -->
        </div>

    </div>
</template>
<script>
export default{
  data () {
    return {
      imgtixing: '',
      title: '日程计划',
      textone: '今日计划',
      texttwo: '本周计划',
      textthree: '本月计划',
      content: '',
      time: ''
    }
  },
  methods: {
    goback: function () {
      this.$router.push({ path: '/' })
    },
    gotodayplan: function () {
      this.$router.push({ path: '/todayplan' })
    },
    goweekplan: function () {
      this.$router.push({ path: '/Weekplan' })
    }
  },
  created () { // 请求数据
    this.getRequest('/static/static1.json').then(res => {
      console.log(res)
      //   赋值
      this.imgtixing = res.data.dateplan.imgtixing // 提醒图片
      this.content = res.data.dateplan.content // 任务内容
      this.time = res.data.dateplan.time // 开始时间
    })
  }
}
</script>
<style scoped>
.today{
    margin-top: 10%;
    margin-left: 6%;
    width: 88%;
    height: 300px;
    background-color: #e2e2e2;
    border-radius: 11px;
}
.today span{
    color: rgb(219, 102, 102);
}
.timebt{
    margin-top: 17%;
    width: 100%;
}

.van-button--normal {
    padding: 0 24px;
    font-size: 14px;
    margin: 0 5px;
}
.defalut{
    color: white;
    padding: 10px 20px;
    font-size: 14px;
    border-color: #ffab19;
    background-color: #ffab19;
    border-radius: 4px;
    border-style: double;
    margin: 0 10px;
}
.warning{
    color: white;
    padding: 10px 20px;
    font-size: 14px;
    border-color: #00aaff;
    background-color: #00aaff;
    border-radius: 4px;
    border-style: double;
    margin: 0 10px;
}
.primary{
    color: white;
    padding: 10px 20px;
    font-size: 14px;
    border-color: #5ed125;
    background-color: #5ed125;
    border-radius: 4px;
    border-style: double;
    margin: 0 10px;
}
.todayhead{
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #d0d5d9;
}
.todayhead img{
    width: 30px;
    float: left;
    margin: 10px 0px 0px 23%;
}
.todayhead p{
    float: left;
    margin-left: 10px;
}
 .todaycont{
    text-align: left;
    height: 189px;
    margin-left: 6px;
    overflow: auto;
}
.time{
    line-height: 11px;
    color: #818181;
}
</style>
