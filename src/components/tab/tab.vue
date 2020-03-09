<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/allrec">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/discovery">
      <span class="tab-link">发现</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/feed">
      <span class="tab-link">日报</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rec">
      <span class="tab-link">社区</span>
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
  .tab-item
    flex 1
    text-align center
    .tab-link
      padding-bottom 5px
      color #777
    &.router-link-active
      .tab-link
        color #000
        border-bottom 2px solid #000
</style>