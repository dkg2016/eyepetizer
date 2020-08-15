<template>
  <div class="discovery">
    <scroll ref="scroll" class="discovery_content" :data="dataList" @pullDown="pullDown">
      <div>
        <div v-for="(item,index) in dataList" :key="index" class="box">

          <!-- header & footer -->
          <template v-if="item.type === 'textCard' || item.type === 'ugcSelectedCardCollection'">
            <all-title :data="item.data"></all-title>
          </template>
          
          <!-- 一则视频 -->
          <div v-if="item.type === 'videoSmallCard'">
            <myVideo :data="item.data" />
          </div>

          <div v-if="item.type === 'briefCard'" class="brief_card">
            <div class="b_img">
              <img :src="item.data.icon" alt="">
            </div>
            <div class="b_desc">
              <div class="title">{{item.data.title}}</div>
              <div class="desc">
                <img v-if="item.data.dataType === 'TopicBriefCard'" class="icon_liwu" src="@/assets/images/liwu.png" alt="">
                {{item.data.description}}</div>
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
.discovery
  box-sizing border-box
  position fixed
  width 100%
  top 44px
  bottom 0
  padding 0 12px
  .discovery_content
    height 100%
    overflow hidden
    .box
      .info_card
        margin-bottom 12px
        .bg_img
          width 100%
          border-radius 4px 4px 0 0
        .title_wrap
          padding 12px
          margin-top -2px
          background-color #ededed
          border-radius 0 0 4px 4px
          li
            padding-bottom 8px
            font-size 12px
            line-height 16px
      .brief_card
        display flex
        padding 10px 0
        border-bottom solid #eee 1px
        .b_img
          flex 50px 0 0
          height 50px
          border-radius 4px
          overflow hidden
          img 
            height 100%
            margin-left -15px
        .b_desc
          padding-left 10px
          display flex
          flex-direction column
          justify-content center
          .title
            font-weight bold
            font-size 14px
            margin-bottom 4px
            line-height 16px
          .desc
            font-size 10px
            .icon_liwu
              width 18px
              vertical-align text-top
</style>