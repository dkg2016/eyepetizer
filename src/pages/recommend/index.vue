<template>
  <div class="recommend">
    <scroll ref="scroll" class="recommend_content" :data="dataList" @pullDown="pullDown" @pullUp="pullUp">
      <div>
        <div v-for="(item,index) in dataList" :key="index" class="box">

          <!-- header & footer -->
          <template v-if="item.type === 'textCard' || item.type === 'ugcSelectedCardCollection'">
            <all-title :data="item.data"></all-title>
          </template>
          
          <!-- 精选视频 -->
          <div v-if="item.type === 'followCard'">
            <pickedVideo :data="item.data" />
          </div>

          <!-- 资讯 -->
          <div v-if="item.type === 'informationCard'">
            <div v-if="item.data.dataType === 'InformationCard'" class="info_card">
              <img class="bg_img" :src="item.data.backgroundImage" alt="">
              <div class="title_wrap">
                <ul>
                  <li v-for="(title,idx) in item.data.titleList" :key="idx">{{title}}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 一则视频 -->
          <div v-if="item.type === 'videoSmallCard'">
            <myVideo :data="item.data" />
          </div>

          <!-- 社区精选-->
          <div v-if="item.type === 'ugcSelectedCardCollection'">
            <div class="select_card">
              <div class="left">
                <div class="wrap" :style="{backgroundImage: 'url(' + item.data.itemList[0].data.cover.feed + ')'}">
                  <div class="info">
                    <span class="usercover">
                      <img :src="item.data.itemList[0].data.userCover" alt="">
                    </span>
                    <span class="nickname">{{item.data.itemList[0].data.nickname}}</span>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="wrap" :style="{backgroundImage: 'url(' + item.data.itemList[1].data.url + ')'}">
                  <div class="info">
                    <span class="usercover">
                      <img :src="item.data.itemList[1].data.userCover" alt="">
                    </span>
                    <span class="nickname">{{item.data.itemList[1].data.nickname}}</span>
                  </div>
                </div>
                <div class="wrap" :style="{backgroundImage: 'url(' + item.data.itemList[2].data.url + ')'}">
                  <div class="info">
                    <span class="usercover">
                      <img :src="item.data.itemList[2].data.userCover" alt="">
                    </span>
                     <span class="nickname">{{item.data.itemList[2].data.nickname}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- banner -->
          <div v-if="item.type === 'banner'">
            <div class="banner_wrap">
              <img :src="item.data.image" alt="">
            </div>
          </div>

          <!-- 推荐创作 -->
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
.recommend
  box-sizing border-box
  position fixed
  width 100%
  top 44px
  bottom 0
  padding 0 12px
  .recommend_content
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
      .select_card
        display flex
        border-radius 4px
        overflow hidden
        padding-bottom 8px
        margin-bottom 12px
        border-bottom solid #eee 1px
        .left
          width 55%
          margin-right 2px
          .wrap
            height 200px
        .right
          width 45%
          .wrap
            height 99px
            margin-bottom 2px
        .left, .right
          .wrap
            position relative
            background-size cover
            background-position-y: 50%;
            .info
              position absolute
              bottom 4px
              right 4px
              .usercover
                display inline-block
                vertical-align middle 
                width 20px
                height 20px
                text-align center
                background-color #fff
                border-radius 50%
                img
                  margin-top 2px
                  width 16px
                  height 16px
                  border-radius 50%
              .nickname
                display inline-block
                vertical-align middle 
                color #fff
                font-size 12px
                margin-left 4px
      .banner_wrap
        overflow hidden
        padding-bottom 6px
        margin-bottom 12px
        border-bottom solid #eee 1px
        img 
          border-radius 4px
          width 100%
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