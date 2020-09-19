<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="discovery">
      <span class="tab-link">发现</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="feed">
      <span class="tab-link">日报</span>
    </router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.tab
  display flex
  height 44px
  line-height 44px
  font-size 14px
  font-weight bold
  background-color #f5f6f7
  padding 0 70px
  .tab-item
    flex 1
    text-align center
    .tab-link
      position relative
      color #777
      &:after
        position absolute
        top 25px
        left 50%
        margin-left -6px
        height 2px
        width 12px
        background-color #f5f6f7
        content ''
    &.router-link-active
      .tab-link
        color #000
        &:after
          background-color #000
</style>