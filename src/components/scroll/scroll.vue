<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    click: {
      type: Boolean,
      default: true
    }
  },

  mounted() {
    setTimeout(() => {
      this._initScroll()
    },20)
  },

  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: this.click,
        mouseWheel: true,
        pullDownRefresh: {
          threshold: 50,
          stop: 0
        },
        pullUpLoad: {
          threshold: 50
        }
      })

      this.scroll.on('pullingDown',()=>{
        this.$emit('pullDown')
        setTimeout(() => {
          this.scroll.finishPullDown()
        },2000)
      })

      this.scroll.on('pullingUp',()=>{
        this.$emit('pullUp')
        setTimeout(() => {
          this.scroll.finishPullUp()
        },2000)
      })
    },

    refresh() {
      this.scroll && this.scroll.refresh()
    },

    pullingDown: function () {
      console.log('pull down')
    }
  },

  watch: {
    data() {
      setTimeout(() => {
        this.refresh()
      },20)
    }
  }
}
</script>