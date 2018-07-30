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

export default {
  name: 'Index',
  data () {
    return {
      data: {
        iconList: [],
        recommendList: [],
        swiperList: [],
        weekendList: []
      },
      city: '杭州'
    }
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
      axios.get('/api/index.json').then(res => {
        console.log(res)
        this.data = res.data.data
      })
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="scss" scoped>

</style>
