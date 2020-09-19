<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <bottomTab/>
  </div>
</template>

<script>
import bottomTab from './components/bottomTab/bottomTab'
export default {
  name: 'app',
  components: {
    bottomTab
  }
}
</script>

