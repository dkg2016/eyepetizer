<template>
  <div v-if="data.dataType === 'VideoBeanForClient'" class="video_bean">
    <img class="l_img" :src="data.cover.feed" alt="">
    <div class="r_content">
      <p class="title">{{data.title}}</p>
      <p class="cate">#{{data.category}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  }
};
</script>

<style lang="stylus" scoped>
.video_bean
  margin-bottom 14px
  display flex
  .l_img
    width 130px
    height 75px
    margin-right 4px
    border-radius 4px
  .r_content
    padding 6px 10px
    display flex
    flex-direction column
    justify-content space-between
    font-size 14px
    font-weight bold
    .title
      line-height 16px
    .cate
      color #c2c2c2
      font-size 12px
</style>