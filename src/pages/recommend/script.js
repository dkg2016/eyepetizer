import Scroll from '@/components/scroll/scroll.vue'

export default {
  data() {
    return {
      dataList: [],
      topVideoInfo: {
        itemList: []
      }
    }
  },

  mounted() {
    this.getRecommend();
  },

  methods: {
    getRecommend() {
      this.$ajax({
        url: '/api/recommend'
      }).then(res => {
        let data = res.data.itemList || []
        this.topVideoInfo = data[0].data
        this.dataList = data
      })
    }
  },

  components: {
    Scroll
  }
}