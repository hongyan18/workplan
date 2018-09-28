<template>
    <div>
        <div>
            <p>年份</p>
            <p>月份</p>
        </div>
        <ul class="weekdays">
            <li>一</li>
            <li>二</li>
            <li>三</li>
            <li>四</li>
            <li>五</li>
            <li>六</li>
            <li>日</li>
        </ul>
        <button @click="test">test</button>
    </div>
</template>
<script>
export default{
  data () {
    return {
      //   res: '1', // 0:1是否闰年
      nstr: '', // 当前Date咨询
      ynow: '', // 年份
      mnow: '', // 月份
      n1str: '', // 当月第一天Date资讯
      firstday: '', // 当月第一天星期几
      m_days: '' // 各月份总天数
    }
  },
  created () {

  },
  methods: {

    is_leap: function (year) {
      // 判断是否为闰年
      return (year % 100 === 0 ? (year % 400 === 0 ? 1 : 0) === 1 : (year % 4 === 0 ? 1 : 0) === 1)
    },
    test: function () {
      this.nstr = new Date()
      this.ynow = this.nstr.getFullYear() // 年份
      this.mnow = this.nstr.getMonth() // 月份
      this.n1str = new Date(this.ynow, this.mnow, 1) // 当月第一天Date资讯
      this.firstday = this.n1str.getDay() // 当月第一天星期几
      this.m_days = [31, 28 + this.$options.methods.is_leap(2004), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      alert(this.m_days)
    }
  }
}
</script>
<style scoped>
 .weekdays li{
    float: left;
    width: 13%;
 }
</style>
