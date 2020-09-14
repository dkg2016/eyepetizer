<template>
  <div class="follow_card">
    <div class="top" @click="videoClick(data.content.data.playUrl)">
      <img class="cover" :src="data.content.data.cover.feed" alt="">
      <div class="duration">{{duration(data.content.data.duration)}}</div>
    </div>
    <div class="bottom">
      <div class="author">
        <img class="avatar" :src="data.content.data.author.icon" alt="">
        <i class="iconfont iconjingxuan"></i>
      </div>
      <div class="desc">
        <p class="title">{{data.header.title}}</p>
        <p class="cate">{{data.content.data.author.name}} / #{{data.content.data.category}}</p>
      </div>
      <i class="iconfont iconshangchuan"></i>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/common/util'
export default {
  props: {
    data: {
      type: Object
    }
  },

  methods: {
    duration: function (val) {
      return formatTime(val)
    },

    videoClick: function (playUrl) {
      this.$emit('videoClick',playUrl)
    }
  }
};
</script>

<style lang="stylus" scoped>
.follow_card
  .top
    position relative
    .cover
      width 100%
      height 200px
      border-radius 4px
    .duration
      position absolute
      right 6px
      bottom 8px
      color #fff
      font-size 12px
      background-color #000
      padding 3px
      border-radius 3px
  .bottom
    position relative
    display flex
    margin-bottom: 8px
    padding 8px 0
    border-bottom: solid #eee 1px;
    .author
      margin-right 12px
      .avatar
        width 36px
        height 36px
        border-radius 50%
        border solid #eee 2px
      .iconjingxuan
        margin-left -14px
        color #4e6ef2
        font-size 13px
    .desc
      padding 4px 30px 4px 4px
      overflow hidden
      .title
        margin-bottom 6px
        font-size 14px
        font-weight bold
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
      .cate
        font-size 12px
        color #888
    .iconshangchuan
      position absolute
      top 20px
      right 6px
      font-size 20px
      color #888
      font-weight bold
</style>