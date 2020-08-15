<template>
  <div class="text_card" :class="(data.type || '').includes('footer') ? 'top_border':''"
  >
    <!-- header7 左 + 查看更多 -->
    <template v-if="data.type === 'header7'">
      <span class="title">{{data.text}}</span>
      <span class="right_text">
        {{data.rightText}}
        <em>&gt;</em>
      </span>
    </template>

    <template v-if="data.type === 'header8'">
      <span class="title">{{data.text}}</span>
      <span class="right_text">
        {{data.rightText}}
        <em>&gt;</em>
      </span>
    </template>

    <!-- header5 左 + 关注 -->
    <template v-if="data.type === 'header5'">
      <span class="title">
        {{data.text}}
        <em v-if="data.actionUrl">></em>
      </span>
      <span v-if="data.follow" class="right_btn">+关注</span>
    </template>

    <!-- footer3 刷新 + 查看更多 -->
    <template v-if="data.type === 'footer3'">
      <span class="mid_btn">刷新推荐</span>
      <span></span>
      <span class="right_text">{{data.text + ' >'}}</span>
    </template>

    <!--footer2 单右 查看更多 -->
    <template v-if="data.type === 'footer2' && data.type === 'footer2'">
      <span></span>
      <span class="right_text">{{data.text + ' >'}}</span>
    </template>

    <!-- 社区精选  特殊 -->
    <template v-if="data.dataType === 'ItemCollection'">
      <span class="title">{{data.header.title}}</span>
      <span class="right_text">
        {{data.header.rightText}}
        <em>&gt;</em>
      </span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
};
</script>

<style lang="stylus" scoped>
.text_card
  position relative
  height 46px
  display flex
  justify-content space-between
  align-items center
  .title
    height 46px
    line-height 46px
    font-size 16px
    font-weight bold
    em
      font-size 12px
      color #999
      vertical-align top
  .mid_btn
    position absolute
    width 80px
    height 26px
    line-height 26px
    left 50%
    margin-left -40px 
    text-align center
    background-color #4587d7
    border-radius 30px
    color #fff
    font-weight bold
    font-size 14px
  .right_text
    font-size 12px
    color #4587d7
    font-weight bold
    em
      margin-left 6px
      font-size 10px
  .right_btn
    height 18px
    line-height 18px
    text-align center
    width 40px
    border solid #777 1px
    border-radius 4px
    font-size 10px
    font-weight bold
.top_border
  border-top solid #eee 1px
</style>