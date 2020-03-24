<template>
  <div class="recommend">
    <scroll ref="scroll" class="recommend_content" :data="dataList">
      <div>
        <div v-for="(item,index) in dataList" :key="index" class="box">
        <!-- 标题类型 -->
        <div v-if="item.type === 'textCard'" class="text_card">
          <!-- 左右类型 -->
          <template v-if="item.data.dataType === 'TextCardWithRightAndLeftTitle'">
            <span class="title">{{item.data.text}}</span>
            <span class="right_text">{{item.data.rightText + ' >'}}</span>
          </template>
          <!-- 左类型 -->
          <template v-if="item.data.dataType === 'TextCard'">
            <span class="title">{{item.data.text}} <em> ></em></span>
            <span class="right_btn">+关注</span>
          </template>
          <!-- 右类型 -->
          <template v-if="item.data.dataType === 'TextCardWithTagId'">
            <span></span>
            <span class="right_text">{{item.data.text + ' >'}}</span>
          </template>
        </div>
        <!-- 内容 -->
        <div v-if="item.type === 'followCard'" class="card">
          <div v-if="item.data.dataType === 'FollowCard'" class="follow_card">
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
        height 50px
        display flex
        justify-content space-between
        align-items center
        .title
          height 50px
          line-height 50px
          font-size 16px
          font-weight bold
          em
            font-size 12px
            color #999
            vertical-align top
        .right_text
          font-size 12px
          color #4587d7
        .right_btn
          height 18px
          line-height 18px
          text-align center
          width 40px
          border solid #999 1px
          border-radius 4px
          font-size 10px
          font-weight bold
      .card
        .follow_card
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