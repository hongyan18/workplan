<template>
    <div>
         <!-- 头部 -->
        <van-nav-bar :title="title" left-text="返回" @click-left="goback" left-arrow>
            <van-icon name="add-o" color="#38f;" slot="right" size="20px" @click="RedicSet"/>
        </van-nav-bar>

        <!-- 标题列表 -->
        <div class="content">
            <ul v-for="(item,index) in planlist" :key="index">
                <li v-if="item.type===true" style="border-left: 4px solid #a4d7ff;">
                    <p class="p1">任务{{index}}</p>
                    <p class="p2" @click="toContent">XXXXX计划{{item.content}}</p>
                </li>
                <li v-else>
                    <p class="p1">任务{{index}}</p>
                    <p class="p2" @click="toContent">XXXXX计划{{item.content}}</p>
                </li>

            </ul>
        </div>
    </div>
</template>
<script>
export default{
  data () {
    return {
      title: '今日计划',
      planlist: [{ content: '', type: '' }]

    }
  },

  methods: {
    goback: function () {
      this.$router.push({ path: '/dateplan' })
    },

    RedicSet: function () {
      this.$router.push({ path: 'TodaContentSet' })
    },
    toContent: function () {
      this.$router.push({ path: '/TodarContent' })
    }
  },
  created () {
    this.getRequest('/static/static1.json').then(res => {
      // console.log(res)
      //   赋值
      this.planlist = res.data.todayplan
      console.log(this.planlist)
    })
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
    margin-top: 34px;
    margin-left: 1%;
    width: 90%;
    font-size:14px;
    overflow: auto;/*超出显示滚动条*/
    height: 500px;

}
.content ul{
    list-style: none;

    margin-left: 9%;
    border-bottom-left-radius: 1em;
}
.content ul>li{
    overflow: hidden;
    background-color: #f0f0f0;
    margin-bottom: 25px;
    border-radius: 8px;
    border-top-left-radius: 0;
    border-left: 4px solid #f58181;
}
/* .content ul>li:hover {
    background-color:#6daaff;
    color:white;
} */
.content .p1{
    float: left;
    width: 15%;
}
.content .p2{
    float: left;
    width: 85%;
    height: 19px;
    overflow: hidden;
}
.listediticon{
    float: left;
    width:20%;
    margin-top: 18px;
    text-align: left;
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
.plancontentitle{
    height: 40px;
    float: left;
    line-height: 40px;
    padding-left: 14px;
    color: #545454;
}
 van-popup--bottom{
     bottom:-30px;
 }
 .remind{
     overflow: hidden;
 }
.remind span{
    line-height: 41px;
    float: left;
    margin-left: 10px;
}
button{
    margin-top: 26px;
    width: 127px;
    height: 44px;
    background: #33a8ff;
    border-radius: 8px;
    border: 1px solid #33a8ff;
    color: white;
}
</style>
