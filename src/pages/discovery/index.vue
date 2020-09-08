<template>
  <div class="discovery">
    <scroll ref="scroll" class="discovery_content" :data="dataList" @pullDown="pullDown">
      <div>
        <div v-for="(item,index) in dataList" :key="index" class="box">
          <!-- header & footer -->
          <template v-if="item.type === 'textCard' || item.type === 'ugcSelectedCardCollection' || item.type === 'specialSquareCardCollection' || item.type === 'columnCardList'">
            <all-title :data="item.data"></all-title>
          </template>

          <!-- 轮播图 -->
          <div v-if="item.type === 'horizontalScrollCard'" class="swipper">
            <scroll ref="scrollHorizon" :scrollX=true :scrollY=false eventPassthrough="horizen" :data="item.data.itemList" class="swiper_scroll">
              <div class="swiper_wrap">
                <div class="swiper_item" v-for="(pic, idx) in item.data.itemList" :key="idx">
                  <img :src="pic.data.image" alt="">
                </div>
              </div>
            </scroll>
          </div>

          <!-- 热门分类 -->
          <div v-if="item.type === 'specialSquareCardCollection'" class="cate_outer">
            <scroll ref="scrollX" :scrollX=true :scrollY=false eventPassthrough="horizen" :data="item.data.itemList">
              <div class="cate_inner">
                <div v-for="(cate, idx) in item.data.itemList" :key="idx" class="cate" :style="{backgroundImage: 'url(' + cate.data.image + ')'}">
                  <span>{{cate.data.title}}</span>
                </div>
              </div>
            </scroll>
          </div>

          <!-- 专题策划 -->
          <div v-if="item.type === 'columnCardList'" class="column_card_wrap">
            <div v-for="(card, idx) in item.data.itemList" :key="idx" class="card" :style="{backgroundImage: 'url(' + card.data.image + ')'}">
              <div class="card_title">
                <span>{{card.data.title}}</span>
              </div>
            </div>
          </div>

          
          <!-- 一则视频 -->
          <div v-if="item.type === 'videoSmallCard'">
            <myVideo :data="item.data" />
          </div>

          <!-- banner -->
          <div v-if="item.type === 'banner'">
            <banner :data="item.data" />
          </div>

          <!-- 推荐主题 -->
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
  .discovery_content
    height 100%
    overflow hidden
    .box
      padding 0 12px
      .swipper
        padding 12px
        margin 0 -12px
        .swiper_scroll
          padding-bottom 10px
          border-bottom solid #eee 1px
          .swiper_wrap
            display flex
            justify-content space-between
            width 3190px
            .swiper_item
              img
                flex 375px 0 0
                width 350px
                height 206px
                border-radius 4px
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
      .cate_outer
        padding-bottom 5px
        border-bottom solid #eee 1px
        overflow hidden
        .cate_inner
          display flex
          flex-wrap wrap
          justify-content space-between
          width 636px
          .cate
            margin-bottom 5px
            width 75px
            height 75px
            flex 75px 0 0
            background-size 75px 75px
            border-radius 4px
            span 
              display inline-block
              width 100%
              line-height 75px
              text-align center
              color #ffffff
              font-size 12px
              font-weight 700
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
      .column_card_wrap
        display flex
        flex-wrap wrap
        justify-content space-between
        .card
          margin-bottom 5px
          width 49%
          height 90px
          background-size cover
          border-radius 4px
          background-repeat no-repeat
          .card_title
            display flex
            align-items center
            height 100%
            border-radius 4px
            overflow hidden
            background-color rgba(0,0,0,0.3)
            span 
              display inline-block
              width 100%
              text-align center
              color #ffffff
              font-size 14px
              font-weight 700
      .horizen_scroll
        // padding 6px 12px
        .img_wrap 
          display inline-block
          img 
            height 200px
            width 200px
</style>