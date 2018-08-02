<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="data.swiperList"></home-swiper>
    <home-icons :iconList="data.iconList"></home-icons>
    <home-recommend :recommendList="data.recommendList"></home-recommend>
    <home-weekend :weekendList="data.weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from '@/components/Header'
import HomeSwiper from '@/components/Swiper'
import HomeIcons from '@/components/Icons'
import HomeRecommend from '@/components/Recommend'
import HomeWeekend from '@/components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Index',
  data () {
    return {
      data: {
        lastCity: localStorage.getItem('city'),
        iconList: [],
        recommendList: [],
        swiperList: [],
        weekendList: []
      }
    }
  },
  computed: {
    ...mapState(['city'])
    // ...mapState('a', ['counta']),
    // ...mapState('b', ['countb'])
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo () {
      // console.log('counta', this.counta, this.countb)
      // this.incrementIfOddOnRootSumb()
      // this.incrementIfOddOnRootSum()
      axios.get(`/api/index.json?city=${this.city}`).then(res => {
        console.log(res)
        this.data = res.data.data
      })
    }
    // ...mapActions('a', ['incrementIfOddOnRootSum']),
    // ...mapActions('b', {'incrementIfOddOnRootSumb': 'incrementIfOddOnRootSum'})
  },
  mounted () {
    this.getHomeInfo()
    console.log('mounted()')
  },
  activated () {
    // keep-alive 组件激活时调用。
    if (this.lastCity !== this.city) {
      this.getHomeInfo()
      this.lastCity = this.city
      console.log('active')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
