<template>
  <div class="banner_wrap">
    <a href="##" class="banner_link">
      <img :src="data.image" class="banner_img" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner_wrap
  overflow hidden
  padding-bottom 6px
  margin-bottom 12px
  border-bottom solid #eee 1px
  .banner_link
    .banner_img
      border-radius 4px
      width 100%
</style>