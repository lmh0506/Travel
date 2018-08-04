<template>
  <div>
    <detail-banner :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" :sightName="sightName"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from '@/components/Banner'
import DetailHeader from '@/components/DetailHeader'
import DetailList from '@/components/DetailList'
import axios from 'axios'

export default {
  name: 'Detail',
  data () {
    return {
      list: [],
      bannerImg: '',
      sightName: '',
      gallaryImgs: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        console.log(res)
        this.list = res.data.data.categoryList
        this.bannerImg = res.data.data.bannerImg
        this.gallaryImgs = res.data.data.gallaryImgs
        this.sightName = res.data.data.sightName
      })
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>

<style lang="scss" scoped>
  .content{
    height: 50rem;
  }
</style>
