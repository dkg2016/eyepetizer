import Scroll from '@/components/scroll/scroll.vue'
import allTitle from '@/components/allTitle/allTitle.vue'
import pickedVideo from '@/components/pickedVideo/pickedVideo.vue'
import { parseQuery } from '@/common/util'
export default {
  data() {
    return {
      dataList: [],
      nextPageUrl: ''
    }
  },

  mounted() {
    this.getFeeds();
  },

  methods: {
    getFeeds () {
      this.$ajax({
        method: 'GET',
        url: '/api/home/feed'
      }).then(res => {
        this.dataList = res.data.itemList || []
        this.nextPageUrl = res.data.nextPageUrl || ''
        this.$refs.scroll.refresh()
      })
    },

    pullDown () {
      this.getFeeds();
    },

    pullUp () {
      if (this.nextPageUrl) {
        let params = parseQuery(this.nextPageUrl)
        this.$ajax({
          method: 'GET',
          url: '/api/home/feed',
          data: params
        }).then(res => {
          this.dataList = this.dataList.concat(res.data.itemList || [])
          this.nextPageUrl = res.data.nextPageUrl || ''
        })
      }
    }
  },

  components: {
    Scroll,
    allTitle,
    pickedVideo
  }
}