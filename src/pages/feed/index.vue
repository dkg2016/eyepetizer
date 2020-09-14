<template>
  <div class="feed">
    <scroll ref="scroll" class="recommend_content" :data="dataList" @pullDown="pullDown" @pullUp="pullUp">
      <div>
        <div v-for="(item,index) in dataList" :key="index" class="box">

          <!-- header & footer -->
          <template v-if="item.type === 'textCard' || item.type === 'ugcSelectedCardCollection'">
            <all-title :data="item.data"></all-title>
          </template>
          
          <!-- 精选视频 -->
          <div v-if="item.type === 'followCard'">
            <pickedVideo :data="item.data" @videoClick="videoClick" />
            <videoPage :playUrl = item.data.content.data.playUrl />
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
.feed
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
</style>