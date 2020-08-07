<template>
  <div class="recommend">
    <scroll ref="scroll" class="recommend_content" :data="dataList">
      <div>
        <div v-for="(item,index) in dataList" :key="index" class="box">
          
          <!-- 标题 -->
          <div v-if="item.type === 'textCard'" class="text_card" :class="item.data.type.includes('footer') ? 'top_border':''">

            <!-- 左 + 查看更多 -->
            <template v-if="item.data.type === 'header7'">
              <span class="title">{{item.data.text}}</span>
              <span class="right_text">{{item.data.rightText}}<em>&gt;</em></span>
            </template>

            <!-- 左 + 关注 -->
            <template v-if="item.data.type === 'header5'">
              <span class="title">{{item.data.text}} <em> ></em></span>
              <span v-if="item.data.follow" class="right_btn">+关注</span>
            </template>

            <!-- 刷新 + 查看更多 -->
            <template v-if="item.data.type === 'footer3'">
              <span class="mid_btn">刷新推荐</span>
              <span></span>
              <span class="right_text">{{item.data.text + ' >'}}</span>
            </template>

            <!-- 单右 查看更多 -->
            <template v-if="item.data.type === 'footer2' && item.data.type === 'footer2'">
              <span></span>
              <span class="right_text">{{item.data.text + ' >'}}</span>
            </template>
          </div>

          <!-- 每日推荐 -->
          <div v-if="item.type === 'followCard'" class="card">
            <div v-if="item.data.dataType === 'FollowCard'" class="follow_card">
              <div class="top">
                <img class="cover" :src="item.data.content.data.cover.feed" alt="">
                <div class="duration">{{duration(item.data.content.data.duration)}}</div>
              </div>
              <div class="bottom">
                <div class="author">
                  <img class="avatar" :src="item.data.content.data.author.icon" alt="">
                  <i class="iconfont iconjingxuan"></i>
                </div>
                <div class="desc">
                  <p class="title">{{item.data.header.title}}</p>
                  <p class="cate">{{item.data.content.data.author.name}} / #{{item.data.content.data.category}}</p>
                </div>
                <i class="iconfont iconshangchuan"></i>
              </div>
            </div>
          </div>

          <!-- 资讯 -->
          <div v-if="item.type === 'informationCard'" class="card">
            <div v-if="item.data.dataType === 'InformationCard'" class="info_card">
              <img class="bg_img" :src="item.data.backgroundImage" alt="">
              <div class="title_wrap">
                <ul>
                  <li v-for="(title,idx) in item.data.titleList" :key="idx">{{title}}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 一条视频 -->
          <div v-if="item.type === 'videoSmallCard'" class="card">
            <div v-if="item.data.dataType === 'VideoBeanForClient'" class="video_bean">
              <img class="l_img" :src="item.data.cover.feed" alt="">
              <div class="r_content">
                <p class="title">{{item.data.title}}</p>
                <p class="cate">#{{item.data.category}}</p>
              </div>
            </div>
          </div>

          <!-- 社区精选-->
          <div v-if="item.type === 'ugcSelectedCardCollection'">
            <div class="text_card" v-if="item.data.dataType === 'ItemCollection'">
              <span class="title">{{item.data.header.title}}</span>
              <span class="right_text">{{item.data.header.rightText + ' >'}}</span>
            </div>
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
          <div v-if="item.type === 'banner'" class="card">
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
      .text_card
        position relative
        height 46px
        display flex
        justify-content space-between
        align-items center
        .title
          height 46px
          line-height 46px
          font-size 16px
          font-weight bold
          em
            font-size 12px
            color #999
            vertical-align top
        .mid_btn
          position absolute
          width 80px
          height 26px
          line-height 26px
          left 50%
          margin-left -40px 
          text-align center
          background-color #4587d7
          border-radius 30px
          color #fff
          font-weight bold
          font-size 14px
        .right_text
          font-size 12px
          color #4587d7
          font-weight bold
          em
            margin-left 6px
            font-size 10px
        .right_btn
          height 18px
          line-height 18px
          text-align center
          width 40px
          border solid #777 1px
          border-radius 4px
          font-size 10px
          font-weight bold
      .top_border
        border-top solid #eee 1px
      .card
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
        .info_card
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
        .video_bean
          margin-bottom 14px
          display flex
          .l_img
            width 130px
            height 75px
            margin-right 14xp
            border-radius 4px
          .r_content
            padding 10px
            display flex
            flex-direction column
            justify-content space-between
            font-size 14px
            font-weight bold
            .cate
              color #c2c2c2
              font-size 12px
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
          width 50px
          height 50px
          border-radius 4px
          overflow hidden
          img 
            height 100%
            margin-left -10px
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