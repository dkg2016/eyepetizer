<template>
  <div id="app">
    <tab/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/exmascript-6">
import Tab from './components/tab/tab'
export default {
  name: 'app',
  components: {
    Tab
  }
}
</script>

