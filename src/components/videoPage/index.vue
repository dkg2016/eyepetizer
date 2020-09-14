<template>
  <div class="video_page">
    <div class="video_wrap">
      <video id="video" class="video" controls :src="playUrl"></video>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playUrl: {
      type: String
    }
  }
}
</script>

<style lang="stylus">
.video_page
  .video_wrap
    .video
      width 100%
</style>