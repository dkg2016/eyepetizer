<template>
  <div class="recommend">
    <scroll ref="scroll" class="recommend_content" :data="dataList">
      <div>
        <div class="box" v-if="topVideoInfo.itemList.length">
          <p class="box_title">{{topVideoInfo.header.title}}</p>
          <div v-for="(item,index) in topVideoInfo.itemList" :key="index" class="video">
            <div class="top"></div>
            <div class="bottom">{{item.data.header.title}}</div>
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
  position fixed
  width 100%
  top 88px
  bottom 0
  .recommend_content
    height 100%
    overflow hidden
    .box
      .video
        height 260px
</style>