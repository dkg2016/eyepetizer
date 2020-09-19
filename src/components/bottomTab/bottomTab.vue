<template>
  <div class="bottom_tab">
    <router-link tag="div" class="tab-item" to="/index">
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/group">
      <span class="tab-link">社区</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/notify">
      <span class="tab-link">通知</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/me">
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.bottom_tab
  position absolute
  bottom 0
  width 100%
  display flex
  height 44px
  line-height 44px
  font-size 14px
  font-weight bold
  background-color #f5f6f7
  .tab-item
    flex 1
    text-align center
    .tab-link
      position relative
      color #777
    &.router-link-active
      .tab-link
        color #000
        &:after
          background-color #000
</style>