import Scroll from '@/components/scroll/scroll.vue'
import allTitle from '@/components/allTitle/allTitle.vue'
import myVideo from '@/components/myVideo/myVideo.vue'
export default {
  data() {
    return {
      dataList: []
    }
  },

  mounted() {
    this.getDiscovery();
  },

  methods: {
    getDiscovery () {
      this.$ajax({
        method: 'GET',
        url: '/api/home/discovery'
      }).then(res => {
        this.dataList = res.data.itemList || []
      })
    },

    pullDown () {
      this.getDiscovery();
    }
  },

  components: {
    Scroll,
    allTitle,
    myVideo
  }
}