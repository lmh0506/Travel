<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
      <swiper-slide v-for="slider in swiperList" :key="slider.id">
        <img class="swiper-img" :src="slider.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'MySwiper',
  props: {
    swiperList: {
      type: Array
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length > 0
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .wrapper{
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 31.25%;
    background-color: #eee;

    .swiper-pagination-bullet-active{
      background: red !important;
    }

    .swiper-img{
      width: 100%;
    }
  }
</style>
