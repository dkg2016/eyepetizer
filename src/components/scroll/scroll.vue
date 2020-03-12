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
      this.scroll = new BScroll(this.$refs.wrapper)
    },

    refresh() {
      this.scroll && this.scroll.refresh()
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