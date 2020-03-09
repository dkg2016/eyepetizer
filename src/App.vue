<template>
  <div id="app">
    <m-header/>
    <tab/>
    <router-view></router-view>
  </div>
</template>

<script type="text/exmascript-6">
import MHeader from './components/m-header/m-header'
import Tab from './components/tab/tab'
export default {
  name: 'app',
  components: {
    MHeader,
    Tab
  }
}
</script>

