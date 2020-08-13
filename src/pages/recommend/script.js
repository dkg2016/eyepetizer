import Scroll from '@/components/scroll/scroll.vue'
import allTitle from '@/components/allTitle/allTitle.vue'
import pickedVideo from '@/components/pickedVideo/pickedVideo.vue'
import myVideo from '@/components/myVideo/myVideo.vue'
export default {
  data() {
    return {
      dataList: [],
      nextPageUrl: ''
    }
  },

  mounted() {
    this.getRecommend();
  },

  methods: {
    getRecommend () {
      this.$ajax({
        method: 'GET',
        url: '/api/home/allRec'
      }).then(res => {
        this.dataList = res.data.itemList || []
        this.nextPageUrl = res.data.nextPageUrl || ''
        this.$refs.scroll.refresh()
      })
    },

    pullDown () {
      this.getRecommend();
    },

    pullUp () {
      if (this.nextPageUrl) {
        console.log(this.nextPageUrl)
        // this.$ajax({
        //   method: 'GET',
        //   url: '/api/home/allRec'
        // })
      }
      console.log(234)
    }
  },

  components: {
    Scroll,
    allTitle,
    pickedVideo,
    myVideo
  }
}