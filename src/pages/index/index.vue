<template>
  <div id="app">
    <tab/>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script type="text/exmascript-6">
import Tab from '@/components/tab/tab'
export default {
  name: 'app',
  components: {
    Tab
  }
}
</script>
<style lang="stylus">
.content
  position fixed
  top 44px
  bottom 50px
  width 100%
</style>