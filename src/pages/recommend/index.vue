<template>
  <div class="recommend">
    <scroll ref="scroll" class="recommend_content" :data="dataList">
      <div>
        <div class="box" v-if="topVideoInfo.itemList.length">
          <p class="box_title">{{topVideoInfo.header.title}}</p>
          <div v-for="(item,index) in topVideoInfo.itemList" :key="index" class="video">
            <div class="top">
              <img class="cover" :src="item.data.content.data.cover.detail" alt="">
              <div class="duration">{{duration(item.data.content.data.duration)}}</div>
            </div>
            <div class="bottom">
              <div class="author">
                <img class="avatar" :src="item.data.content.data.author.icon" alt="">
              </div>
              <div class="desc">
                <p class="title">{{item.data.header.title}}</p>
                <p class="cate">{{item.data.content.data.author.name}} / #{{item.data.content.data.category}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import script from './script';
export default script;
</script>

<style lang="stylus" scoped>
.recommend
  box-sizing border-box
  position fixed
  width 100%
  top 88px
  bottom 0
  padding 0 12px
  .recommend_content
    height 100%
    overflow hidden
    .box
      .box_title
        height 50px
        line-height 50px
        font-size 18px
        font-weight bold
      .video
        .top
          position relative
          .cover
            width 100%
            height 217px
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
          display flex
          margin-bottom: 8px
          padding 8px 0
          border-bottom: solid #eee 1px;
          .author
            .avatar
              margin-right 12px
              width 36px
              height 36px
              border-radius 50%
          .desc
            .title
              margin-bottom 10px
              font-size 14px
            .cate
              font-size 12px
              color #888
</style>