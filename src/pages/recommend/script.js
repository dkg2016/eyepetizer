import Scroll from '@/components/scroll/scroll.vue'
import { formatTime } from '@/common/util'
export default {
  data() {
    return {
      dataList: []
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
        this.dataList = res.data.itemList || []
        this.$refs.scroll.refresh()
      })
    },

    duration: function (val) {
      return formatTime(val)
    }
  },

  components: {
    Scroll
  }
}