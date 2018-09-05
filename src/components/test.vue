<template>
    <div>
        恩恩恩 不用看了  你跳过来了  <van-button type="primary" @click="gohome">主要按钮</van-button>
    </div>
</template>
<script>
export default{
  methods: {
    gohome: function () {
      window.history.back()
    }
  }
}
</script>
