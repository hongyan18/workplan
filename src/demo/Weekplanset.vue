<template>
    <div>
        <van-nav-bar :title="title" left-text="返回" @click-left="goback" left-arrow>
        </van-nav-bar>
         <div class="input_content">
             <textarea placeholder="请输入本周计划内容"></textarea>
        </div>
        <div class="save">
            <button>保存</button>
        </div>
    </div>
</template>
<script>
export default{
  data () {
    return {
      title: '新增本周计划',
      contenttype: false
    }
  },
  methods: {
    goback: function () {
      window.history.back()
    }
  }
}
</script>
<style scoped>
.input_content{
    width: 100%;
    height: 400px;
}

.input_content textarea{
    width: 96%;
    height: 350px;
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
</style>
