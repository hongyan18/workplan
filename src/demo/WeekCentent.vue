<template>
    <div>
         <van-nav-bar title="任务详情" left-text="返回" left-arrow  right-text="删除" @click-right="ondelete"  @click-left="goback"/>
         <div class="content">
            <img :src="srcif" v-show="achieve" alt="" @click="select">
            <img v-if="achieve===false" :src="srcelse" @click="selecttwo" alt="">
         </div>
    </div>
</template>
<script>
export default{
  data () {
    return {
      srcif: '/static/image/方框.png',
      srcelse: '/static/image/选择-方框.png',
      achieve: true
    }
  },
  methods: {
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
    },
    goback: function () {
      window.history.back()
    },
    //
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
.content img{
    width: 30px;
    height: 30px;
    float: left;
    margin-top: 10px;
}
</style>
