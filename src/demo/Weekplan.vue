<template>
    <div>
        <!-- 头部 -->
        <van-nav-bar :title="title" left-text="返回" @click-left="goback" left-arrow>
             <van-icon name="add-o" color="#38f;" slot="right" size="20px" @click="RedicSet"/>
        </van-nav-bar>
        <div id="week_content">
           <ul v-for="(item,index) in weekcontentlist" :key=index>
               <li @click="gotoWeekContent">
                   <p class="p1">{{item.day}}</p>
                   <p class="p2">{{item.name}}</p>
               </li>
           </ul>
        </div>
    </div>
</template>
<script>
export default{
  data () {
    return {
      title: '本周计划',
      weekcontentlist: [{ day: '任务1', name: '计划名称' }, { day: '任务2', name: '计划名称' }, { day: '任务3', name: '计划名称' }, { day: '任务4', name: '计划名称' }, { day: '任务5', name: '计划名称' }, { day: '任务6', name: '计划名称' }, { day: '任务7', name: '计划名称' }]
    }
  },
  methods: {
    goback: function () {
      window.history.back()
    },
    //
    RedicSet: function () {
      this.$router.push({ path: '/Weekplanset' })
    },
    //
    gotoWeekContent: function () {
      this.$router.push({ path: '/Weekcentent' })
    }
  }
}
</script>
<style scoped>
#week_content{
    margin-top: 34px;
    margin-left: 1%;
    width: 90%;
    font-size: 14px;
    overflow: auto;
    height: 500px;
}
#week_content ul{
    list-style: none;
    margin-left: 9%;
    border-bottom-left-radius: 1em;
}
#week_content li{
    overflow: hidden;
    background-color: #f0f0f0;
    margin-bottom: 25px;
    border-radius: 8px;
    border-top-left-radius: 0;
    border-left: 4px solid #f58181;
}
#week_content .p1{
    float: left;
    width: 15%;
}
#week_content .p2{
    float: left;
    width: 85%;
    text-indent: 2em;
}
</style>
