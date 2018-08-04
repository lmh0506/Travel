<template>
  <div class="banner">
    <img @click="handleBannerClick" :src="bannerImg" alt="" class="banner-img">
    <div class="banner-info">
      <div class="banner-title">{{sightName}}</div>
      <div class="banner-num">
        <span class="iconfont icon-image">39</span>
      </div>
    </div>
    <fade-animation>
      <common-gallary @close="handleGalleryClose" :imgs="gallaryImgs" v-show="showGallary"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from '@/common/Gallary'
import FadeAnimation from '@/common/Fade'

export default {
  name: 'Banner',
  props: {
    bannerImg: String,
    gallaryImgs: Array,
    sightName: String
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGalleryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>

<style lang="scss" scoped>
  .banner{
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    .banner-img{
      width: 100%
    }

    .banner-info{
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: .6rem;
      color: #fff;
      background: linear-gradient(0deg, rgba(0, 0, 0, .8), transparent);

      .banner-title{
        flex: 1;
        font-size: .32rem;
        padding-left: .2rem;
      }
      .banner-num{
        padding: 0 .4rem;
        margin-top: .2rem;
        line-height: .32rem;
        height: .32rem;
        font-size: .24rem;
        border-radius: .2rem;
        background: rgba(0, 0, 0, .8);

        .icon-image{
          font-size: .24rem;
        }
      }
    }
  }
</style>
