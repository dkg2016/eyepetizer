<template>
  <div id="app">
    <router-link to="/allrec">推荐</router-link>
    <router-link to="/discovery">发现</router-link>
    <router-link to="/feed">日报</router-link>
    <router-link to="/rec">社区</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

