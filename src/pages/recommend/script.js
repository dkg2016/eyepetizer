import Scroll from '@/components/scroll/scroll.vue'
import { formatTime } from '@/common/util'
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

  computed: {
    
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
    },

    duration: function (val) {
      return formatTime(val)
    }
  },

  components: {
    Scroll
  }
}